import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((post) => 
        <ListingCard post={post} key={post.id} 
          location={post.location} 
          image={post.image} 
          description={post.description}
          liked={false}
          handleDelete={handleDelete}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

