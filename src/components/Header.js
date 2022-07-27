import React from "react";
import Search from "./Search";

function Header({ updateListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateListings={updateListings}/>
    </header>
  );
}

export default Header;
