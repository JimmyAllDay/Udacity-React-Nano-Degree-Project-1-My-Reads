import React from 'react'
import { Link } from 'react-router-dom'
import SearchPageResults from './SearchPageResults'

const SearchPage = (props) => {

      return(
        <div>
          <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'>
              <button className="close-search">Close</button>
            </Link>
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