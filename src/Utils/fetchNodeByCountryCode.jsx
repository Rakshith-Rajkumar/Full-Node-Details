export default function fetchNodesByCountryCode(countryCodeData, nodeData) {
  const countryNodes = [];
  const nodes = nodeData;

  // console.log(nodes);
  for (const [node, details] of Object.entries(nodes)) {
    if (details[7] === countryCodeData) {
      countryNodes.push({ [node]: details });
    }
  }

  return countryNodes;
}
