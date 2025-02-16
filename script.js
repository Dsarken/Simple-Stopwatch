var myInterval; // Global time interval variable
var time = 0; // Global time variable

function startTimer() {
  var timer = document.getElementById("timer");
  myInterval = setInterval(function () {
    time++;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    timer.innerHTML =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(myInterval);
}

function resetTimer() {
  time = 0;
  var timer = document.getElementById("timer");
  timer.innerHTML = "00:00:00";
}
