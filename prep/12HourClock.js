function formatAs12HourClock(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}
let time = "23:00";
//console.log(formatAs12HourClock(time));
console.assert(formatAs12HourClock(time) === "11:00 pm");
