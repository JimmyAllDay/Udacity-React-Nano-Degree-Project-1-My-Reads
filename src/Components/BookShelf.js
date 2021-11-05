import React from 'react'

const BookShelf = (props) => {
 
    const shelf = props.title.toLowerCase().split(" ").join("")
    const filteredBooks = props.booksMap.filter(book => {
        return book.props.shelf.toLowerCase() === shelf
    })



    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                        {filteredBooks.length === 0 ? 'Add a book to this shelf' : filteredBooks}
                </ol>
            </div>
        </div>
    )
}



export default BookShelf