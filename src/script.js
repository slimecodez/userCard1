function setDateTime() {
  let datetime = new Date();

  let datetab = (document.getElementById("currentDate").innerHTML =
    datetime.toLocaleDateString());
  console.log(datetab.innerHTML);

  let timetab = (document.getElementById("currentTime").innerHTML =
    datetime.toLocaleTimeString().slice(0,-3));
}
setDateTime
setInterval(setDateTime, 1000);
// console.log(new Date("2025-08-11T08:11:00"));
// console.log(new Date(1757569667776));
