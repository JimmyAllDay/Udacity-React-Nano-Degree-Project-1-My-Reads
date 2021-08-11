import React from 'react'

const BookShelfChanger = (props) => {

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => {
                    props.bookShelfHandler(event.target.value, props.id)
                    }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
}

export default BookShelfChanger