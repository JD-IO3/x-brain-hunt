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
    // const time = document.getElementById("time").value * 60000;
    const time = 30 * 60000;

    start = Date.now();
    interval = setInterval(function () {
        const timeLeft = time - (Date.now() - start + elapsedTime);
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor(timeLeft % 60000 / 1000);
        // const centiseconds = Math.floor(timeLeft % 1000 / 10);

        if (timeLeft <= 0) {
            clearInterval(interval);
            display.innerHTML = "Time's Up";
            startBtn.disabled = true;
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

window.setTimeout(startTimer, 5000);
okBtn.addEventListener('click', CustomAlert.close);

// function pauseTimer() {
//     clearInterval(interval);
//     isPaused = !isPaused;
//     if (isPaused) {
//         elapsedTime += Date.now() - start;
//         // pauseBtn.innerHTML = "<img src=\'https://img.icons8.com/material-outlined/256/play.png\' width=\'40px\' height=\'40px\' title=\'Play\'>";
//         pauseBtn.innerHTML = "<img src=\'https://img.icons8.com/material-outlined/256/play.png\' width=\'40px\' height=\'40px\' title=\'Play\'>";
//     } else {
//         start = Date.now();
//         pauseBtn.innerHTML = "<img src=\'https://img.icons8.com/material-outlined/256/pause.png\' width=\'40px\' height=\'40px\'>";
//         startTimer();
//     }
//     document.getElementById("startBtn").disabled = true;
// }

// function resetTimer() {
//     clearInterval(interval);
//     display.innerHTML = "";
//     startBtn.disabled = false;
//     pauseBtn.innerHTML = "<img src=\'https://img.icons8.com/material-outlined/256/pause.png\' width=\'40px\' height=\'40px\'>";
//     pauseBtn.disabled = true;
//     resetBtn.disabled = true;
//     elapsedTime = 0;
//     isPaused = false;
// }

// window.onload = function () {
//     setVolume();
// }

// function setVolume() {
//     audio.volume = document.getElementById("volumeControl").value;
// }