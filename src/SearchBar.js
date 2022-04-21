import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search baby name"
      onKeyUp={props.handleClick}
    ></input>
  );
}

export default SearchBar;
