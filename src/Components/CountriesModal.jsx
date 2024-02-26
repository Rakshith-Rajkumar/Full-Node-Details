// import React from "react";
import NodesSummary from "./NodesSummary";
import CountryList from "./CountryList";

function CountriesModal({ activeNodes, formattedTimeStamp, countryData }) {
  return (
    <div className="container bg-black">
      <div className="border border-red-500 m-2 flex flex-col">
        <NodesSummary
          activeNodes={activeNodes}
          formattedTimeStamp={formattedTimeStamp}
        />
        <CountryList countryData={countryData} />
      </div>
    </div>
  );
}

export default CountriesModal;
