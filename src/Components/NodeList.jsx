import React from "react";
import NodeListColumnHeader from "./NodeListColumnHeader";
import NodeListItem from "./NodeListItem";
import fetchNodesByCountryCode from "../Utils/fetchNodeByCountryCode";

function NodeList({ countryCode, nodes }) {
  const nodeList = fetchNodesByCountryCode(countryCode, nodes);
  return (
    <div className="border border-black p-1">
      <NodeListColumnHeader />
      <div className="flex flex-col gap-1">
        {nodeList.map((node, i) => (
          <NodeListItem key={i} nodeData={node} />
        ))}
      </div>
    </div>
  );
}

export default NodeList;
