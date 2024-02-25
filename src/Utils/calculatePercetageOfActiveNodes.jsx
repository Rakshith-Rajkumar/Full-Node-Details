// import data from "../testData.json";
import calculateNoOfActiveNodes from "./calculateNoOfActiveNodes";

export default function calculatePercetageOfActiveNodes(
  countryCode,
  nodes,
  activeNodes
) {
  let totalNoOfNodes = activeNodes;
  let noOfActiveNodesByCountry = calculateNoOfActiveNodes(countryCode, nodes);
  let percentageOfActiveNodes = 0;
  percentageOfActiveNodes = (noOfActiveNodesByCountry / totalNoOfNodes) * 100;

  return percentageOfActiveNodes.toFixed(3);
}
