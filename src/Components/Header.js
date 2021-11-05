import React from "react";
import sproutLogo from "../icons/sprout-logo.svg";
// Reference: Logo sourced from https://www.emojipng.com/preview/12429992

const Header = () => {
  return (
    <div className="list-books-title">
      <div className="nav-container">
        <div className="nav-title">
          <h1>Book Sprout</h1>
          <p className="nav-subtitle">Grow your knowledge</p>
        </div>
        <div className="sprout-logo">
          <img src={sproutLogo} alt="sprout logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
