import React from "react";

export default function formatCountryData(data) {
  const nodes = data;
  const countryCodes = {}; // Object to store country codes and their occurrences

  for (const node in nodes) {
    const countryCode = nodes[node][7];
    if (!(countryCode in countryCodes)) {
      // If the country code is not already in the object, set the count to 1
      countryCodes[countryCode] = 1;
    } else {
      // If the country code is already in the object, increment the count
      countryCodes[countryCode]++;
    }
  }

  return countryCodes;
}
