// import { useEffect, useState } from "react";
// // import testData from "../testData.json";
// import formattedDate from "./formatDate";
// import listNodesByCountries from "./fetchCountryCount";

// export default function useSnapshotFetcher() {
//   const [activeNodes, setActiveNodes] = useState(null);
//   const [formattedTimeStamp, setFormattedTimeStamp] = useState(null);
//   const [nodes, setNodes] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const result = testData;
//         const response = await fetch(
//           "https://bitnodes.io/api/v1/snapshots/latest/"
//         );
//         const result = await response.json();

//         setActiveNodes(result.total_nodes);
//         setFormattedTimeStamp(() => {
//           return formattedDate(result.timestamp);
//         });

//         setNodes(result.nodes);

//         listNodesByCountries(nodes);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//     const intervalId = setInterval(fetchData, 600000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return { activeNodes, formattedTimeStamp };
// }

// import React, { useState, useEffect } from "react";

// export default useSnapshot;
