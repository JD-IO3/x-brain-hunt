import { activate, toggle } from "./rounds.js";

const dialogContainer = document.getElementById('dialog-container');
const CustomAlert = new function (msg) {
    this.show = function (msg) {
        let content = document.getElementById('dialog-body');
        dialogContainer.style.top = '15%';
        dialogContainer.style.opacity = 1;
        content.textContent = msg;

        toggle();
    }

    this.close = function () {
        dialogContainer.style.top = '-30%';
        dialogContainer.style.opacity = 0;

        var alert = document.querySelector(".box");
        alert.classList.toggle('active');

        activate();
    }
}

export {CustomAlert};