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
    const time = 15 * 60000;

    // CustomAlertHint.show("HI..");
    // setInterval(genQuote, 150000);

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

window.setTimeout(startTimer, 10000);
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

//HintTimer

// var quotes = ["Blank", "\"Dude, suckin' at something is the first step at being sorta good at something.\"", "\"Either I will find a way, or I will make one.\"", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"", "\"You are never too old to set another goal or to dream a new dream.\"", "\"If you can dream it, you can do it.\"", "\"Never give up, for that is just the place and time that the tide will turn.\"", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\""];

// function genQuote() {
//     var randNum = Math.floor(Math.random() * 8) + 1;
//     CustomAlertHint.show(quotes[randNum]);
// }

// const dialogContainerHint = document.getElementById('dialog-container-hint');
// const CustomAlertHint = new function (msg) {
//     this.show = function (msg) {
//         let content = document.getElementById('dialog-body-hint');
//         dialogContainerHint.style.top = '15%';
//         dialogContainerHint.style.opacity = 1;
//         content.textContent = msg;

//         setTimeout(this.close, 10000);
//         // document.body.addEventListener('click', this.close);
//     }

//     this.close = function () {
//         dialogContainerHint.style.top = '-30%';
//         dialogContainerHint.style.opacity = 0;
//     }
// }