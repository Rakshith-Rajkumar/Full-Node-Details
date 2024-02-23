import { flag } from "country-emoji";

export default function displayCountryFlag() {
  const countryCode = "FR";
  const countryFlag = flag(countryCode);
  console.log(countryFlag);

  return <div>{countryFlag}</div>;
}
