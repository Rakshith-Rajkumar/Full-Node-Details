import React from "react";
// import useSnapshotFetcher from "../CustomHooks/useSnapshotFetcher";

function NodesSummary({ activeNodes, formattedTimeStamp }) {
  //   const { activeNodes, formattedTimeStamp } = useSnapshotFetcher();

  return (
    <div className="border border-red-500 m-2 p-1">
      <h6 className="text-red-500">REACHABLE BITCOIN NODES </h6>
      <p className="text-red-500">
        {activeNodes} Nodes as of {formattedTimeStamp}
      </p>
    </div>
  );
}

export default NodesSummary;
