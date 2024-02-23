import React, { useState, useEffect } from "react";
import CountriesModal from "./Components/CountriesModal";
import "./App.css";
// import NodeListModal from "./Components/NodeListModal";
import formatCountryData from "./Utils/formatCountryData";

import formatTimestamp from "./Utils/formatTimestamp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [snapshot, setSnapshot] = useState({});

  const [activeNodes, setActiveNodes] = useState(0);
  const [formattedTimeStamp, setFormattedTimeStamp] = useState(0);
  const [nodes, setNodes] = useState({});
  const [countryData, setCountryData] = useState({});

  // useEffect to fetch the API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const result = testData;
        const response = await fetch(
          "https://bitnodes.io/api/v1/snapshots/latest/"
        );
        const result = await response.json();
        setSnapshot(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // ##################################################################################

  // useEffect to update country nodes and timestamp
  useEffect(() => {
    //Update the timestamp
    setActiveNodes(snapshot.total_nodes);
    //Update the number of active nodes
    setFormattedTimeStamp(formatTimestamp(snapshot.timestamp));
    //Update the object that groups nodes by countries.
    setNodes(snapshot.nodes);

    //Update the countryData state, that stores value in this format{country:number of active nodes}
    setCountryData(formatCountryData(snapshot.nodes));
  }, [snapshot]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CountriesModal
              activeNodes={activeNodes}
              formattedTimeStamp={formattedTimeStamp}
              countryData={countryData}
            />
          }
        />
        {/* <Route path="/NodeList" element={<NodeListModal />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
