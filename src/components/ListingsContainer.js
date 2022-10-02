import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  function onDeleteClick(listing) {
    setListings(listings.filter(l => listing.id !== l.id));
  }

  const displayedListings = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDeleteClick={onDeleteClick}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
