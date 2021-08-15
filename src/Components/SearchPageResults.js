import React from 'react'
import Book from './Book'

const SearchPageResults = (props) => {

  // TODO: You will need to add a method to filter books that are already in state on the main page

  const searchResults = props.foundBooks.map(book => {
    console.log(book)
    return (<Book 
        key={book.id}
        id={book.id} 
        image={book.imageLinks ? book.imageLinks.smallThumbnail : null}
        title={book.title}
        // TODO:handle multiple authors
        authors={book.authors}
        shelf={book.shelf ? book.shelf : 'none'}
        bookShelfHandler={props.bookShelfHandler}
        bookListHandler={props.bookListHandler}
        />)
})

    return (
        <div className="search-books-results">
        <ol className="books-grid">{searchResults}</ol>
      </div>
    )

}

export default SearchPageResults