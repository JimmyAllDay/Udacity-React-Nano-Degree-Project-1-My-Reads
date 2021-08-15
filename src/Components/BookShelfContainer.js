import React, {Component} from 'react'
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
                foundBooks: [],
                splicedBooks:[]
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
                if (result.error)  {
                    console.log(result)
                    this.setState(() => ({
                        foundBooks: []
                        })
                    )
                } else if (Array.isArray(result.books)) {
                    if (result.books === []) {
                        this.setState(() => ({
                            foundBooks: []
                        })
                    )} else {
                        this.setState(() => ({
                            foundBooks: result.books
                            })
                        )
                    }
                } else if (result.books.error){  
                        this.setState(() => ({
                            foundBooks: []
                            })
                        )
                    }
                })
                .catch(console.log('no search results'))
                    )
            }

        bookListHandler = (event, id) => {
            let bookIndex = null
            this.state.foundBooks.forEach(book => {
                if (book.id === id){
                    bookIndex = this.state.foundBooks.indexOf(book)
                }
            })
            this.setState(prevState => ({
                splicedBooks: prevState.foundBooks.splice(bookIndex, 1)
                // TODO: the below is causing an error due to an unresolved synthetic event - may require refactoring
                // books: prevState.books.push(prevState.splicedBooks)
                }))
            }

        // For reference - the below solution was derived from https://knowledge.udacity.com/questions/216569
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
            const booksMap = this.state.books.map(book => {
                return (<Book 
                    key={book.id}
                    id={book.id} 
                    image={book.imageLinks.smallThumbnail}
                    title={book.title}
                    authors={book.authors}
                    shelf={book.shelf}
                    bookShelfHandler={this.bookShelfHandler}
                    bookListHandler={this.bookListHandler}
                    />)
            })
            
        return(
            <div className="bookshelf">

                <Route exact path='/' render={()=>(

                <div className="list-books-content">
                <div>
                    <BookShelf 
                        Books={booksMap} 
                        Title={'Want to Read'}/>
                    <BookShelf 
                        Books={booksMap} 
                        Title={'Currently Reading'}/>
                    <BookShelf 
                        Books={booksMap} 
                        Title={'Read'}/>
                </div>
                    <SearchButton routeHandler={this.routeHandler} />
                </div>

                )}/>

                <Route path='/search' render={()=>(

                    <SearchPage
                    bookShelfHandler={this.bookShelfHandler}
                    bookListHandler={this.bookListHandler} 
                    routeHandler={this.routeHandler}
                    foundBooks={this.state.foundBooks}
                    getBooks={this.getBooks}
                    />

                )}/>

            </div>

        )
    }
}

export default BookShelfContainer