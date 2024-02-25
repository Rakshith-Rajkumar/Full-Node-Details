import displayCountryName from "../Utils/displayCountryName";
import { Link } from "react-router-dom";

function Country({ index, countryCode, nodeCount }) {
  return (
    <Link to={`${countryCode}`}>
      <div className="border border-black p-1 cursor-default">
        {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
      </div>
    </Link>
  );
}

export default Country;
