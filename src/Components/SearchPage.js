import React, {Component} from 'react'
import SearchPageResults from './SearchPageResults'

class SearchPage extends Component {
    constructor(){
          super()
          this.state = {
            search: '',
            books: []
            }
            this.getBooks = this.getBooks.bind(this)
            this.validateSearch = this.validateSearch.bind(this)
          }

    // client side validation - not yet implemented
    validateSearch = (searchTerm) =>{
      searchTerm.trim()
      searchTerm !== '' && (
        this.setState(() =>({
            search: searchTerm
        }))
      )
    }

    getBooks = (searchTerm) => {
      const searchURL = 'https://reactnd-books-api.udacity.com/search'
      const authHeader = 'JimmyAllDayWantsBooksData'
      const options = {
              method: 'POST',
              headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({query: searchTerm, maxResults: 20 })
            }
      fetch(searchURL, options)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.error) {
          this.setState(() => ({
            books: []
         })
         )
        } else if (Array.isArray(result.books)) {
          if (result.books === []) {
            this.setState(() => ({
              books: []
            })
          )} else {
            this.setState(() => ({
              books: result.books
            }))
          }
        } else if (result.books.error){  
          this.setState(() => ({
            books: []
        })
        )
        }

      }).catch(console.log('no search results'))
}

    render(){
      console.log(this.state.books)
      return(
        <div>
          <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => {this.props.routeHandler()}}>Close</button>
            <div className="search-books-input-wrapper">
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
        <SearchPageResults books={this.state.books}/>
        </div>
      )
    }
}

export default SearchPage