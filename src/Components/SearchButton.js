import React from "react";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <div className="open-search">
      <Link to="/search">
        <div className="search-button">Add a book</div>
      </Link>
    </div>
  );
};

export default SearchButton;
