import data from "../testData.json";
import calculateNoOfActiveNodes from "./calculateNoOfActiveNodes";

export default function calculatePercetageOfActiveNodes() {
  let totalNoOfNodes = data.total_nodes;
  let noOfActiveNodesByCountry = calculateNoOfActiveNodes();
  let percentageOfActiveNodes = 0;
  percentageOfActiveNodes = (noOfActiveNodesByCountry / totalNoOfNodes) * 100;

  return percentageOfActiveNodes.toFixed(3);
}
