import React, { useEffect, useState } from "react";

function PaginationDetails({ currentPage, totalPages, nextPage, prevPage }) {
  return (
    <div className="border border-black p-1 flex flex-row justify-center gap-2">
      <button
        className="border border-black px-1"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p className="cursor-default">
        Page {currentPage} of {totalPages}
      </p>
      <button
        className="border border-black px-1"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationDetails;
