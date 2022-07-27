import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data)
      });
  }, []);

  function handleDelete(deleted) {
    const newList = listings.filter(item => item.id !== deleted.id)
    setListings(newList);
  }

  function updateListings(search) {
    const searched = listings.filter(item => item.description === search)
    setListings(searched);
  }

  return (
    <div className="app">
      <Header updateListings={updateListings}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
