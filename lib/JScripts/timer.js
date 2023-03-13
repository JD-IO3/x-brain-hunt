import { CustomAlert } from "./alert.js";

var interval;
var elapsedTime = 0;
var isPaused = false;
var start;
var startBtn = document.getElementById("startBtn");
var okBtn = document.getElementById("okBtn");
// var pauseBtn = document.getElementById("pauseBtn");
// var resetBtn = document.getElementById("resetBtn");
// var startImg = document.getElementById("startImg");
// var pauseImg = document.getElementById("pauseImg");
// var resetImg = document.getElementById("resetImg");
var display = document.getElementById("display");
var audio = new Audio("../lib/Images/timer_audio.mp3");

function startTimer() {
    const time = document.getElementById("time").value * 60000;
    // const time = 15 * 60000;

    // CustomAlertHint.show("HI..");
    // setInterval(genQuote, 150000);

    start = Date.now();
    interval = setInterval(function () {
        const timeLeft = time - (Date.now() - start + elapsedTime);
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor(timeLeft % 60000 / 1000);
        // const centiseconds = Math.floor(timeLeft % 1000 / 10);
        startBtn.disabled = true;
        document.getElementById("time").disabled = true;

        if (timeLeft <= 0) {
            clearInterval(interval);
            display.innerHTML = "Time's Up";
            // startBtn.disabled = true;
            // pauseBtn.disabled = true;

            audio.play();
            CustomAlert.show("Do Not Click anywhere On the window...!!");
            /* alert("Temps écoulé !"); */
        } else {
            // display.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds + ":" + (centiseconds < 10 ? "0" : "") + centiseconds;
            display.innerHTML = (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
        }
    }, 10);

    // document.getElementById("pauseBtn").innerHTML = "<img src=\'https://img.icons8.com/material-outlined/256/pause.png\' width=\'40px\' height=\'40px\'>";
    // pauseImg.src = "./Images/zyro-image.png";
    // pauseBtn.disabled = false;
    // resetBtn.disabled = false;
}

// let btnShow = document.querySelector('button');

setInterval(showTime, 10);
let displayTime = document.getElementById("displayTime");
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + " " + ":" + " " + min + " " + ":" + " " + sec + " " + am_pm;

    displayTime.innerText = currentTime;

    // let t = setTimeout(function(){ showTime() }, 1000);
    // console.log(today);
}

// window.setTimeout(startTimer, 10000);
// showTime();
startBtn.addEventListener('click', startTimer);
okBtn.addEventListener('click', CustomAlert.close);
