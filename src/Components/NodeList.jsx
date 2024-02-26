import React, { useEffect, useState } from "react";
import NodeListColumnHeader from "./NodeListColumnHeader";
import NodeListItem from "./NodeListItem";
import PaginationDetails from "./PaginationDetails";
// import fetchNodesByCountryCode from "../Utils/fetchNodeByCountryCode";

function NodeList({ countryCode, countryNodes }) {
  // const nodeList = fetchNodesByCountryCode(countryCode, nodes);
  const [currentPage, setCurrentPage] = useState(1); //State to capture the current page.
  const [totalPages, setTotalPages] = useState(0); //State to capture the total number of pages based on the number of active nodes in the country.

  const NoOfNodesInEachPage = 20; //Variable to calculate number of nodes in each page.

  const startIndex = (currentPage - 1) * NoOfNodesInEachPage;
  const endIndex = startIndex + NoOfNodesInEachPage;

  //function to increase the current page on a button click
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  //Function to decrease the current page value on a button click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  //useEffect hook to synchronize changes in countryNodes and totalPages and set current page to 1.
  useEffect(() => {
    const totalNodesInCountry = countryNodes.length;
    setCurrentPage(1);
    setTotalPages(Math.ceil(totalNodesInCountry / NoOfNodesInEachPage));
  }, [countryNodes]);

  return (
    <>
      <PaginationDetails
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <div className="border border-red-500 p-1">
        <NodeListColumnHeader />
        <div className="flex flex-col gap-1">
          {countryNodes.slice(startIndex, endIndex).map((node, i) => (
            <NodeListItem key={i} nodeData={node} />
          ))}
        </div>
      </div>
      <PaginationDetails
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export default NodeList;
