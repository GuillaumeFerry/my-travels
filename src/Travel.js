// src/Travel.js
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <div className="card">
    <h1>{destination}</h1>
    <h2>{country}</h2>
    <img src={photo} alt={destination} />
    <p>{distance}</p>
  </div>
);

export default Travel;