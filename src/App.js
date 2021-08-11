import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Components/Header'
import BookShelfContainer from './Components/BookShelfContainer'

class BooksApp extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
         <div className="list-books">
            <Header/>
            <BookShelfContainer/>
          </div>
      </div>
    )
  }
}

export default BooksApp
