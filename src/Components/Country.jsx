import displayCountryName from "../Utils/displayCountryName";

function Country({ index, countryCode, nodeCount }) {
  return (
    <div className="border border-black p-1 cursor-default">
      {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
    </div>
  );
}

export default Country;
