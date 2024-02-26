import displayCountryName from "../Utils/displayCountryName";
import { Link } from "react-router-dom";

function Country({ index, countryCode, nodeCount }) {
  return (
    <Link to={`${countryCode}`}>
      <div className="border border-red-500 p-1 cursor-default hover:bg-red-500 hover:text-black">
        <p className=" font-bold cursor-pointer text-red-500 hover:text-black">
          {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
        </p>
      </div>
    </Link>
  );
}

export default Country;
