import React from "react";
// import {TiLeaf} from "react-icons/ti"

const BookShelfChanger = (props) => {
  const bookShelfAPIUpdater = (shelf, id) => {
    const options = {
      method: "PUT",
      headers: {
        Authorization: "JimmyAllDayWantsBooksData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shelf }),
    };
    fetch(`https://reactnd-books-api.udacity.com/books/${id}`, options).catch(
      (error) => {
        console.error("Error:", error);
      }
    );
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={props.shelf}
        onChange={(event) => {
          props.bookListHandler(props.id);
          props.bookShelfHandler(event.target.value, props.id);
          bookShelfAPIUpdater(event.target.value, props.id);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
