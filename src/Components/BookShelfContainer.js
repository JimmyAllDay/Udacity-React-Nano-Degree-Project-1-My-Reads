import React, {Component} from 'react'
import BookShelf from './BookShelf'
import Book from './Book'


class BookShelfContainer extends Component  {
    constructor(){
        super()
        this.state = {
            books: []
        }
        this.authHeader = 'JimmyAllDayWantsBooksData'
        this.options = {
            "headers": {
                Authorization: this.authHeader
            }
        }
        this.initURL = 'https://reactnd-books-api.udacity.com/books'
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

    render(){
        const BooksMap = this.state.books.map(book => {
            // console.log(book.shelf)
            return (<Book 
                key={book.id} 
                image={book.imageLinks.smallThumbnail}
                title={book.title}
                // TODO:handle multiple authors
                author={book.authors}
                shelf={book.shelf}
                />)
        })
        return(
            <div className="bookshelf">
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            Books={BooksMap} 
                            Title={'Want to Read'}/>
                        <BookShelf 
                            Books={BooksMap} 
                            Title={'Currently Reading'}/>
                        <BookShelf 
                            Books={BooksMap} 
                            Title={'Read'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelfContainer