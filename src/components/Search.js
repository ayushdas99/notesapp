import React from "react";

const Search = ({ handleSearchNote }) => {
    return(
        <div className="search">
            <input onChange={(event) => handleSearchNote(event.target.value)}
            type='text' placeholder="Type to search...."></input>
        </div>
    )
}

export default Search;