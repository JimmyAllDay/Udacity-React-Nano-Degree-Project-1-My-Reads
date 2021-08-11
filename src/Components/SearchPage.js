import React, {Component} from 'react'
import SearchPageResults from './SearchPageResults'

class SearchPage extends Component {
    constructor(props){
          super(props)
          this.state = {
            books: this.props.booksData
          }
          this.getBooks = this.getBooks.bind(this)
    }

    getBooks = (searchTerm) => {
      console.log(searchTerm)
    }

    render(){
      return(
        <div>
          <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => {this.props.routeHandler()}}>Close</button>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(event) => {
                  this.getBooks(event.target.value)
                }}
                />

            </div>
          </div>
          
        </div>
        <SearchPageResults/>
        </div>
      )
    }
}

export default SearchPage