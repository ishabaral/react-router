import React from "react";
import { Link } from "react-router-dom";
import { data } from "../placeData";

function Places() {
  return (
    <div className="places">
      <h3>Place</h3>
      {data.map((place) => (
        <Link key={place.id} to={`/places/${place.name}`}>
          <p>{place.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Places;
