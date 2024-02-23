import React from "react";
// import useSnapshotFetcher from "../CustomHooks/useSnapshotFetcher";

function NodesSummary({ activeNodes, formattedTimeStamp }) {
  //   const { activeNodes, formattedTimeStamp } = useSnapshotFetcher();

  return (
    <div className="border border-black m-2 p-1">
      <h6>REACHABLE BITCOIN NODES </h6>
      <p>
        {activeNodes} Nodes as of {formattedTimeStamp}
      </p>
    </div>
  );
}

export default NodesSummary;
