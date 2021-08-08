import React, {Component} from 'react'
import BookShelf from './BookShelf'


class BookShelfContainer extends Component  {
    
    render(){
        return(
            <div className="bookshelf">
                <div className="list-books-content">
                    <div>
                        <BookShelf title={'Want to Read'}/>
                        <BookShelf title={'Reading'}/>
                        <BookShelf title={'Have Read'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelfContainer