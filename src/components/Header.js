import React from "react";
import Search from "./Search";

function Header({ listings, setListings }) {

  function onSearch(search) {
    setListings(listings.filter(l => l.description.includes(search)))
  } 

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;
