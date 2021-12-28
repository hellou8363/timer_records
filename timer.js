let hour = 0;
let minute = 0;
let second = 0;
let active = false;

document.getElementById("start").onclick = function () {
  if (active == false) {
    active = true;
    timeoutId = setInterval(function () {
      second++;
      if (second > 59) {
        second = 0;
        minute++;
        if (minute > 59) {
          minute = 0;
          hour++;
          if (hour > 59) {
            hour = 0;
          }
        }
      }
      document.getElementById("time").innerText =
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);
    }, 1000);
  }
};
document.getElementById("stop").onclick = function () {
  clearInterval(timeoutId);
  active = false;
};
document.getElementById("reset").onclick = function () {
  clearInterval(timeoutId);
  active = false;
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("time").innerText = "00:00:00";
};
