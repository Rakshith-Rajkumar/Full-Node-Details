// import ReactCountryFlag from "react-country-flag";
import calculateNoOfActiveNodes from "../Utils/calculateNoOfActiveNodes";
import percentageOfActiveNodes from "../Utils/calculatePercetageOfActiveNodes";
import displayCountryName from "../Utils/displayCountryName";

function CountrySummary({ countryCode, nodes, activeNodes }) {
  return (
    <div className="border border-black p-1">
      <p>Country Name : {displayCountryName(countryCode)}</p>
      {/* <ReactCountryFlag countryCode="FR" /> */}
      <p>
        Number of Active nodes : {calculateNoOfActiveNodes(countryCode, nodes)}
      </p>
      <p>
        Percentage of Active nodes :{" "}
        {percentageOfActiveNodes(countryCode, nodes, activeNodes)} %
      </p>
    </div>
  );
}

export default CountrySummary;
