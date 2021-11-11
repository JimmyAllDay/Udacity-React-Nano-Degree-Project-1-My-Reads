import React, { Component } from "react";
import sproutLogo from "../icons/sprout-logo.svg";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <h1>Book Sprout</h1>
            </Link>
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
              <div className="tool-tip tool-tip-anim">
                <span>Book Sprout</span> is a branded component built with the
                Udacity MyReads API. To grow your reading list, use a searchable
                term on the searchpage, find your book, and click the book shelf
                changer button to add it to a category. Thanks to the API, state
                persists across uses.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
