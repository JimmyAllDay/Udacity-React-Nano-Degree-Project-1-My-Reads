import React, { Component } from "react";
import sproutLogo from "../icons/sprout-logo.svg";
import { BsQuestionCircle } from "react-icons/bs";

// Reference: Logo sourced from https://www.emojipng.com/preview/12429992
class Header extends Component {
  constructor() {
    super();
    this.state = {
      shown: false,
    };
    this.setIsShown = this.setIsShown.bind(this);
  }

  setIsShown(bool) {
    this.setState({
      shown: bool,
    });
  }

  render() {
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
          <div className="question-icon-container">
            <BsQuestionCircle
              onMouseEnter={() => this.setIsShown(true)}
              onMouseLeave={() => this.setIsShown(false)}
              className="question-icon"
            />
            {this.state.shown && (
              <div className="tool-tip">
                <span>Book Sprout</span> is a branded component grown on the
                Udacity MyReads API. To nourish your reading list, use the
                search page for a list of searchable terms.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
