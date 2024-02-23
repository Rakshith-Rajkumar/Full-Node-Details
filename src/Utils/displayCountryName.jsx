export default function displayCountryName(countryCode) {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  if (countryCode === "null") {
    return "N/A";
  } else {
    return regionNamesInEnglish.of(countryCode);
  }
}
