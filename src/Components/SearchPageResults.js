import React from 'react'
// import Book from './Book'

const SearchPageResults = (props) => {

  // TODO: You may need to add a method to filter books that are already in state on the main page

//   const searchResults = props.foundBooks.map(book => {

//     return (<Book 
//         key={book.id}
//         id={book.id} 
//         image={book.imageLinks ? book.imageLinks.smallThumbnail : null}
//         title={book.title}
//         authors={book.authors}
//         shelf={book.shelf ? book.shelf : 'none'}
//         bookShelfHandler={props.bookShelfHandler}
//         bookListHandler={props.bookListHandler}
//         />)
// })

    return (
        <div className="search-books-results">
        <ol className="books-grid">{props.foundBooks}</ol>
      </div>
    )

}

export default SearchPageResults