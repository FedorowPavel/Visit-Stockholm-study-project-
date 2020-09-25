var modal = document.getElementById('modal');
var btn = document.getElementById("modalImageBtn");
var span = document.getElementsByClassName("close")[0];
var topBtn = document.getElementsByClassName("top-button")[0];

btn.onclick = function () {
    modal.style.display = "block";
    topBtn.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var modalTwo = document.getElementById('modal-two');
var btnTwo = document.getElementById("modalImageBtn-two");
var spanTwo = document.getElementsByClassName("close")[1];

btnTwo.onclick = function () {
    modalTwo.style.display = "block";
    topBtn.style.display = "none";
}

spanTwo.onclick = function () {
    modalTwo.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}






var modalThree = document.getElementById('modal-three');
var btnThree = document.getElementById("modalImageBtn-three");
var spanThree = document.getElementsByClassName("close")[2];

btnThree.onclick = function () {
    modalThree.style.display = "block";
    topBtn.style.display = "none";
}

spanThree.onclick = function () {
    modalThree.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalThree.style.display = "none";
    }
}



var modalFour = document.getElementById('modal-four');
var btnFour = document.getElementById("modalImageBtn-four");
var spanFour = document.getElementsByClassName("close")[3];

btnFour.onclick = function () {
    modalFour.style.display = "block";
    topBtn.style.display = "none";
}

spanFour.onclick = function () {
    modalFour.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalThree.style.display = "none";
    }
}




var modalFive = document.getElementById('modal-five');
var btnFive = document.getElementById("modalImageBtn-five");
var spanFive = document.getElementsByClassName("close")[4];

btnFive.onclick = function () {
    modalFive.style.display = "block";
    topBtn.style.display = "none";
}

spanFive.onclick = function () {
    modalFive.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalThree.style.display = "none";
    }
}


var modalSix = document.getElementById('modal-six');
var btnSix = document.getElementById("modalImageBtn-six");
var spanSix = document.getElementsByClassName("close")[5];

btnSix.onclick = function () {
    modalSix.style.display = "block";
    topBtn.style.display = "none";
}

spanSix.onclick = function () {
    modalSix.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalThree.style.display = "none";
    }
}

