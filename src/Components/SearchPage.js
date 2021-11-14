import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchPageResults from "./SearchPageResults";
import searchTerms from "./searchTerms";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      shown: false,
      searchTerms: searchTerms,
      userSearch: searchTerms,
    };
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.closeListHandler = this.closeListHandler.bind(this);
    this.filterTerms = this.filterTerms.bind(this);
    this.userInputHandler = this.userInputHandler.bind(this);
  }

  // Render datalist on focus
  onFocusHandler = () => {
    this.setState({ shown: true });
  };

  // Close datalist on click outside
  closeListHandler = () => {
    this.setState({ shown: false });
  };

  // filter datalist terms passed as props to datalist component
  filterTerms = (e, termsArray) => {
    const userInput = e.target.value.trim().toLowerCase();
    const filteredTerms = termsArray.filter((term) => {
      return term.toLowerCase().includes(userInput);
    });
    return this.setState({ userSearch: filteredTerms });
  };

  // Update state on user input
  userInputHandler = (input) => {
    this.setState(
      { userInput: input },
      // Setstate callback
      () => {
        this.props.getBooks(this.state.userInput);
      }
    );
  };

  // Update state on list item click
  clickHandler = (input) => {
    this.setState(
      {
        userInput: input,
        userSearch: [input],
      },
      // Setstate callback
      () => {
        this.props.getBooks(this.state.userInput);
      }
    );
  };

  render() {
    return (
      <div>
        <form>
          <div
            className="search-books"
            onFocus={() => this.onFocusHandler(this.state.searchTerms)}
          >
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="search"
                  placeholder="Enter search term"
                  value={this.state.userInput}
                  onChange={(event) => {
                    this.userInputHandler(event.target.value);
                    this.filterTerms(event, this.state.searchTerms);
                  }}
                />
              </div>
            </div>
            {this.state.shown && (
              <DataList
                className="datalist"
                searchTerms={this.state.userSearch}
                clickHandler={this.clickHandler}
                hideDivHandler={this.closeListHandler}
              />
            )}
          </div>
        </form>
        <SearchPageResults
          bookShelfHandler={this.props.bookShelfHandler}
          bookListHandler={this.props.bookListHandler}
          foundBooks={this.props.foundBooks}
        />
      </div>
    );
  }
}

class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  renderList() {
    const dataArray = this.props.searchTerms.map((term, i) => {
      return (
        <div
          key={i}
          className="datalist-term"
          value={term}
          onClick={(e) => {
            this.props.clickHandler(e.target.getAttribute("value").toString());
            this.props.hideDivHandler();
          }}
        >
          {term}
        </div>
      );
    });
    return dataArray;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  //Seet wrapper ref
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  //Close search on c lick outside
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.hideDivHandler();
    }
  }

  render() {
    return (
      <div
        ref={this.wrapperRef}
        className="search-datalist"
        style={{ border: "black solid 1px" }}
      >
        {this.props.searchTerms.length > 0 ? (
          this.renderList()
        ) : (
          <p>No search terms with that search string. Try another.</p>
        )}
      </div>
    );
  }
}

export default SearchPage;
