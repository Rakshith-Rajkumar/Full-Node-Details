// import ReactCountryFlag from "react-country-flag";
import calculateNoOfActiveNodes from "../Utils/calculateNoOfActiveNodes";
import percentageOfActiveNodes from "../Utils/calculatePercetageOfActiveNodes";
import displayCountryName from "../Utils/displayCountryName";

function CountrySummary({ countryCode, nodes, activeNodes }) {
  return (
    <div className="border border-red-500 p-1">
      <p className="text-red-500">
        Country Name : {displayCountryName(countryCode)}
      </p>
      {/* <ReactCountryFlag countryCode="FR" /> */}
      <p className="text-red-500">
        Number of Active nodes : {calculateNoOfActiveNodes(countryCode, nodes)}
      </p>
      <p className="text-red-500">
        Percentage of Active nodes :{" "}
        {percentageOfActiveNodes(countryCode, nodes, activeNodes)} %
      </p>
    </div>
  );
}

export default CountrySummary;
