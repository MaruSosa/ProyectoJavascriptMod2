let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoRojo.png";
}

blueBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoAzul.png";
}

blackBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoNegro.png";
}

