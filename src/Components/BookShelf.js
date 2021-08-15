import React from 'react'

const BookShelf = (props) => {
    const shelf = props.Title.toLowerCase().split(" ").join("")
    const filteredBooks = props.Books.filter(book => {
        return book.props.shelf.toLowerCase() === shelf
    })


    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.Title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks}
                </ol>
            </div>
        </div>
    )
}



export default BookShelf