import React from 'react'
import SearchPageResults from './SearchPageResults'

const SearchPage = (props) => {

      return(
        <div>
          <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => {props.routeHandler()}}>Close</button>
            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(event) => {
                  props.getBooks(event.target.value)
                }}
                />
            </div>
          </div>
          
        </div>
        <SearchPageResults
          bookShelfHandler={props.bookShelfHandler} 
          bookListHandler={props.bookListHandler} 
          foundBooks={props.foundBooks}
          />
        </div>
      )
    }

export default SearchPage