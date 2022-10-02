import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {

  const [isFavorite, setIsFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteClick(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorite(true)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
