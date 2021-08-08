import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Components/Header'
import BookShelfContainer from './Components/BookShelfContainer'
import SearchButton from './Components/SearchButton'
import SearchPage from './Components/SearchPage'

class BooksApp extends React.Component {
  constructor(){
    super()
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    this.setState((prevState) => ({
      showSearchPage: !prevState.showSearchPage
    }))
  }

  render() {
    return (
     
      <div className="app">

        {this.state.showSearchPage ? (
          <SearchPage clickHandler={this.clickHandler}/>
        ) : (
          <div className="list-books">
            <Header/>
            <BookShelfContainer/>
            <SearchButton clickHandler={this.clickHandler} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
