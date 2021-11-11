import React from "react";
// import Book from './Book'

const SearchPageResults = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">{props.foundBooks}</ol>
    </div>
  );
};

export default SearchPageResults;
