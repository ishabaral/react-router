import React from "react";
import { useParams } from "react-router";
import { data } from "../placeData";

function DisplayPlacesDetails() {
  const { name } = useParams();
  console.log(name);
  return (
    <div className="displayPlacesDetails">
      <h1>Places Details</h1>
      {data
        .filter((list) => list.name === name)
        .map((list) => (
          <div key={list.id}>
            <h2>Name: {list.name}</h2>
            <h3>Category: {list.category}</h3>
            <img style={{ height: 300, width: 400 }} src={list.img} />
          </div>
        ))}
    </div>
  );
}

export default DisplayPlacesDetails;
