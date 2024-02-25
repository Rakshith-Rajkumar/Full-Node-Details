import fetchNodesByCountryCode from "./fetchNodeByCountryCode";

export default function calculateNoOfActiveNodes(countryCodeData, nodesData) {
  const countryCode = countryCodeData;
  const nodes = nodesData;
  // console.log(nodes);
  const countryNodes = fetchNodesByCountryCode(countryCode, nodes);

  let noOfActiveNodes = 0;
  noOfActiveNodes = countryNodes.length;

  return noOfActiveNodes;
}
