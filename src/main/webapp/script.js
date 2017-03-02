var display = document.getElementById("display");

document.getElementById("buttons").addEventListener("click", function (evt) {
    display.innerText += evt.target.innerText;
});
document.getElementById("calculate").addEventListener("click", function (evt) {
    display.innerText = eval(display.innerText); //eval. boom.
    evt.stopPropagation();
});