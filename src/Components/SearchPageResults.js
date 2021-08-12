import React from 'react'
import Book from './Book'

const SearchPageResults = (props) => {
  console.log(props)
  const searchResults = props.books.map(book => {
    return (<Book 
        key={book.id}
        id={book.id} 
        image={book.imageLinks ? book.imageLinks.smallThumbnail : null}
        title={book.title}
        // TODO:handle multiple authors
        authors={book.authors}
        shelf={book.shelf}
        />)
})


    return (
        <div className="search-books-results">
        <ol className="books-grid">{Array.isArray(props.books) && searchResults}</ol>
      </div>
    )

}

export default SearchPageResults