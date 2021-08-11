import React, {Component} from 'react'
import BookShelf from './BookShelf'
import Book from './Book'
import SearchPage from './SearchPage'
import SearchButton from './SearchButton'


class BookShelfContainer extends Component  {
        constructor(){
            super()
            this.state = {
                books: [],
                //  TODO: add React Router
                showSearchPage: false
            }
            this.initURL = 'https://reactnd-books-api.udacity.com/books'
            this.authHeader = 'JimmyAllDayWantsBooksData'
            this.options = {
                "headers": {
                    Authorization: this.authHeader
                }
            }
            this.bookShelfHandler = this.bookShelfHandler.bind(this)
            this.routeHandler = this.routeHandler.bind(this)
        }

        componentDidMount() {
            fetch(this.initURL, this.options)
            .then(res => res.json())
            .then(result => {
                this.setState(() => ({
                    books: result.books
                }))
            })
        }

        routeHandler(){
            this.setState((prevState) => ({
            showSearchPage: !prevState.showSearchPage
            }))
        }

        // For reference - the below solution was derived from https://knowledge.udacity.com/questions/216569
        bookShelfHandler(event, id){
                this.setState(prevState => ({
                    books: prevState.books.map(book => {
                        if (book.id === id){
                                const newBook = { ...book, shelf: event};
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
                    // TODO:handle multiple authors
                    authors={book.authors.length > 1 
                        ? (book.authors.map((author) => `${author} `)) 
                        : book.authors}
                    shelf={book.shelf}
                    bookShelfHandler={this.bookShelfHandler}
                    />)
            })
                console.log(this.state.books)
        return(
            <div className="bookshelf">
            {this.state.showSearchPage ? (
                <SearchPage 
                    routeHandler={this.routeHandler}
                    booksData={this.state.books}
                    />
              ) : (
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
                )
            }
            </div>

        )
    }
}

export default BookShelfContainer