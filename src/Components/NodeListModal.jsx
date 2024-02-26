import React, { useState, useEffect } from "react";
import CountrySummary from "./CountrySummary";
import { useParams } from "react-router-dom";
// import SearchBar from "./SearchBar";
import PaginationDetails from "./PaginationDetails";
import NodeList from "./NodeList";
import fetchNodesByCountryCode from "../Utils/fetchNodeByCountryCode";

function NodeListModal({ nodes, activeNodes }) {
  const { countryCode } = useParams();
  const [countryNodes, setCountryNodes] = useState([]); //State to capture the list of available active nodes in the country based on url parameter

  //useEffect hook to synchronise between the nodes and country nodes
  useEffect(() => {
    if (countryCode != null && nodes != null) {
      setCountryNodes(fetchNodesByCountryCode(countryCode, nodes));
    }
  }, [nodes, countryCode]);

  return (
    // h-[100vh]
    <div className="bg-black">
      <div className="border border-red-500 m-1 p-1 flex flex-col gap-1">
        <CountrySummary
          countryCode={countryCode}
          nodes={nodes}
          activeNodes={activeNodes}
        />
        {/* <SearchBar /> */}
        <NodeList
          countryCode={countryCode}
          // nodes={nodes}
          countryNodes={countryNodes}
        />
        {/* {console.log(countryNodes)} */}
      </div>
    </div>
  );
}

export default NodeListModal;
