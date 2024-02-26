import displayCountryName from "../Utils/displayCountryName";
import { Link } from "react-router-dom";

function Country({ index, countryCode, nodeCount }) {
  return (
    <Link
      to={`${countryCode}`}
      className="border border-red-500 p-1 group text-red-500 cursor-pointer hover:bg-red-500 hover:text-black"
    >
      <p className="font-bold">
        {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
      </p>
    </Link>
  );
}

export default Country;
