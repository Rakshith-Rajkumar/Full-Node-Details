import getNodesByCountryCode from "../CustomHooks/fetchNodeByCountryCodes";

export default function calculateNoOfActiveNodes() {
  const countryNodes = getNodesByCountryCode();

  let noOfActiveNodes = 0;
  noOfActiveNodes = countryNodes.length;

  return noOfActiveNodes;
}
