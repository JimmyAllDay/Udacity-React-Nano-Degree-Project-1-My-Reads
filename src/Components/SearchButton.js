import React from 'react'

const SearchButton = (props) => {

    return (
        <div className="open-search">
            <button onClick={() => {props.clickHandler()}}>Add a book</button>
        </div>
    )
}

export default SearchButton