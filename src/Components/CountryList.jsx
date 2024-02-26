import React, { useState, useEffect } from "react";
import Country from "./Country";

function CountryList({ countryData }) {
  let countries = [];
  if (countryData != null) {
    countries = Object.entries(countryData);
  }

  return (
    <div
      className="border border-red-500 m-2 p-1"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5px",
      }}
    >
      {countries.map(([countryCode, nodeCount], index) => (
        <Country
          key={index}
          index={index}
          countryCode={countryCode}
          nodeCount={nodeCount}
        />
      ))}
    </div>
  );
}

export default CountryList;
