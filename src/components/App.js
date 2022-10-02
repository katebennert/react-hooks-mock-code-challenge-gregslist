import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listingsData => setListings(listingsData))
  }, [])

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
