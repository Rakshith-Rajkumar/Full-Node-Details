export default function formattedDate(timestamp) {
  // Convert timestamp to milliseconds
  const date = new Date(timestamp * 1000);

  // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];

  // Get the month (0 = January, 1 = February, etc.)
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];

  // Get the day of the month (1-31)
  const dayOfMonth = date.getDate();

  // Get the year (4-digit format)
  const year = date.getFullYear();

  // Get the hours (0-23)
  let hours = date.getHours();
  // Adjust for 12-hour format
  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;

  // Get the minutes (0-59)
  const minutes = date.getMinutes();

  // Get the time zone (e.g., "EST")
  const timeZone = "EST";

  // Combine the date and time components into the requested format
  const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth} ${year}, ${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm} ${timeZone}`;

  return formattedDate;
}
