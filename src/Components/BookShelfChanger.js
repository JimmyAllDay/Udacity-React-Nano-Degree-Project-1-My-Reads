import React from 'react'

const BookShelfChanger = (props) => {

        const bookShelfAPIUpdater = (id, shelf ) => {
            const options = {
                    method: 'PUT',
                    headers: {
                    'Authorization': 'JimmyAllDayWantsBooksData',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({shelf})
                }
                fetch(`https://reactnd-books-api.udacity.com/books/${id}`, options)
                .catch(error =>{
                    console.error('Error:', error)
                })
        }
        
        return (

            <div className="book-shelf-changer">
                <select value={props.shelf} onChange={(event) => {
                            props.bookShelfHandler(event.target.value, props.id)
                            props.bookListHandler(event.target.value, props.id)
                            bookShelfAPIUpdater(props.id, event.target.value)
                        }
                    }>
                    <option value="move" disabled>Move to...</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
}

export default BookShelfChanger