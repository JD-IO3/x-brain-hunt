// var showBtn = document.getElementById("showBtn");
// var hideBtn = document.getElementById("hideBtn");
// var solutionContainer = document.getElementById('solutionContainer');

// showBtn.addEventListener('click', () => {
//     solutionContainer.style.display = 'block';
//     showBtn.style.display = 'none';
//     hideBtn.style.display = 'block';
// })

// hideBtn.addEventListener('click', () => {
//     solutionContainer.style.display = 'none';
//     showBtn.style.display = 'block';
//     hideBtn.style.display = 'none';
// })

function toggle() {
    var blur = document.querySelector(".box");
    blur.classList.toggle('active');
}
function activate() {
    var nextBtn = document.querySelector(".nextBtn");
    nextBtn.classList.toggle('disabled-link');
}

export {toggle, activate};