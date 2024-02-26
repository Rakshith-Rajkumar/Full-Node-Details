import React from "react";

function NodeListColumnHeader() {
  return (
    <div
      className="border border-red-500 my-1"
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 5fr 1fr 2fr 2fr",
        gap: "5px",
      }}
    >
      <p className=" text-red-500 text-center cursor-default">
        Address Details
      </p>
      <p className=" text-red-500 text-center cursor-default">
        User Agent Details
      </p>
      <p className=" text-red-500 text-center cursor-default">Height</p>
      <p className=" text-red-500 text-center cursor-default">
        Location Details
      </p>
      <p className=" text-red-500 text-center cursor-default">
        Network Details
      </p>
    </div>
  );
}

export default NodeListColumnHeader;
