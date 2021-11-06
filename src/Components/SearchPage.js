import React from "react";
import { Link } from "react-router-dom";
import SearchPageResults from "./SearchPageResults";
import searchTerms from "./searchTerms";

function SearchPage(props) {
  const datalist = (e) => {};
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="search"
              placeholder="Enter search term"
              list="search-terms"
              onChange={(event) => {
                props.getBooks(event.target.value);
              }}
            />
            <datalist id="search-terms">
              {searchTerms.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
      <SearchPageResults
        bookShelfHandler={props.bookShelfHandler}
        bookListHandler={props.bookListHandler}
        foundBooks={props.foundBooks}
      />
    </div>
  );
}

export default SearchPage;

//TODO: Add https://www.npmjs.com/package/react-datalist-input and use this to populate a list of searchable terms when the user enters input
