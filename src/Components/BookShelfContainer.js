import React, {Component } from 'react'
import BookShelf from './BookShelf'
import Book from './Book'
import SearchPage from './SearchPage'
import SearchButton from './SearchButton'
import { Route } from 'react-router-dom'


class BookShelfContainer extends Component  {
        constructor(){
            super()
            this.state = {
                books: [],
                search: '',
                foundBooks: []
            }
            this.initURL = 'https://reactnd-books-api.udacity.com'
            this.authHeader = 'JimmyAllDayWantsBooksData'
            this.options = {
                "headers": {
                    Authorization: this.authHeader
                }
            }

            this.getBooks = this.getBooks.bind(this)
            this.bookShelfHandler = this.bookShelfHandler.bind(this)
            this.bookListHandler = this.bookListHandler.bind(this)
            this.validateSearch = this.validateSearch.bind(this)
        }

        componentDidMount() {
            fetch(`${this.initURL}/books`, this.options)
            .then(res => res.json())
            .then(result => {
                this.setState(() => ({
                    books: result.books
                }))
            })
        }

        // Client side validation - not yet implemented
        validateSearch = (searchTerm) =>{
            searchTerm.trim()
            searchTerm !== '' && (
            this.setState(() =>({
                search: searchTerm
            }))
            )
        }

        //  Searchpage API Call
            // TODO: refactor
        getBooks = (searchTerm) => {

            const noBooks = this.state.foundBooks.splice(0, this.state.foundBooks.length)
            const emptySearch =() =>{
                this.setState({noBooks})
            }

            const returnSearch = (result) => {

                // Reference: the below solution was derived from: https://www.tutorialspoint.com/filter-an-array-containing-objects-based-on-another-array-containing-objects-in-javascript
                const filterRes = (arr1, arr2) =>{
                let resArray = []
                resArray = arr1.filter(el=>{
                    return !arr2.find(element =>{
                        return element.id === el.id
                        })
                    })
                return resArray
                }

                this.setState(() => ({
                    foundBooks: filterRes(result, this.state.books)
                    })
                )
            }

            const options = {
                    method: 'POST',
                    headers: {
                    'Authorization': this.authHeader,
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({query: searchTerm, maxResults: 20 })
                }

            searchTerm !== '' && (      
                fetch(`${this.initURL}/search`, options)
                .then(res => res.json())
                .then(result => {
                        result.error || result.books.error || result.books === [] ?
                        emptySearch() :
                        returnSearch(result.books)
                    }
                )
                .catch(null)
            )

            searchTerm === '' && (
                emptySearch()
            )            
        }

        
        bookListHandler = (id) => {
            let bookIndex = null
            this.state.foundBooks.forEach(book => {
                if (book.id === id){
                    bookIndex = this.state.foundBooks.indexOf(book)
                }
            })
            const addBook = this.state.foundBooks.splice(bookIndex, 1)
            const books = this.state.books.concat(addBook)
            this.setState({books})
            }

        // Reference - the below solution was derived from https://knowledge.udacity.com/questions/216569
        bookShelfHandler(event, id){
                this.setState(prevState => ({
                    books: prevState.books.map(book => {
                        if (book.id === id){
                                const newBook = { ...book, shelf: event}
                                return newBook;
                        }
                        return book
                    })
                }))
        }

        render(){

            const booksMap = (stateArray) => {   
                const mappedBooks = stateArray.map(book => {
                    return (<Book 
                        key={book.id}
                        id={book.id} 
                        image={book.imageLinks ? book.imageLinks.smallThumbnail : null}
                        title={book.title}
                        authors={book.authors}
                        shelf={book.shelf ? book.shelf : 'none'}
                        bookShelfHandler={this.bookShelfHandler}
                        bookListHandler={this.bookListHandler}
                        />)
                })
                return mappedBooks
            }

            const shelves = [
                'Want to Read', 'Currently Reading', 'Read'
            ]

            const shelvesMap = (booksArray, shelfArray) => {
                const shelfMap = shelfArray.map((shelf)=>{
                    return <BookShelf
                                key={shelf}
                                booksMap={booksArray}
                                title={shelf}
                    />
                })
                return shelfMap
            }
            
        return(
            <div className="bookshelf">

                <Route exact path='/' render={()=>(
                    <div className="list-books-content">
                            {shelvesMap(booksMap(this.state.books), shelves)}
                        <SearchButton/>
                        </div>
                    )
                }/>

                <Route path='/search' render={()=>(
                        <SearchPage
                            bookShelfHandler={this.bookShelfHandler}
                            bookListHandler={this.bookListHandler}
                            foundBooks={booksMap(this.state.foundBooks)}
                            getBooks={this.getBooks}
                        />
                    )
                }/>

            </div>

        )
    }
}

export default BookShelfContainer