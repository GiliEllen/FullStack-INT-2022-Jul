console.log("connected");
var boxArray = document.querySelectorAll(".box");
console.log(boxArray);
function getRandomNumber(min, max) {
    try {
        return Math.random() * (max - min) + min;
    }
    catch (error) {
        console.error(error);
    }
}
function positionBox() {
    try {
        boxArray.forEach(function (box) {
            box.style.left = getRandomNumber(0, 600) + "px";
            box.style.top = getRandomNumber(0, 600) + "px";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function startGame() {
    try {
        positionBox();
    }
    catch (error) {
        console.error(error);
    }
}
