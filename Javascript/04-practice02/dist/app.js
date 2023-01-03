console.log("connected");
var boxArray = document.querySelectorAll(".box");
var wrapper = document.querySelector(".wrapper");
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
            box.style.left = getRandomNumber(0, 800) + "px";
            box.style.top = getRandomNumber(0, 800) + "px";
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
// setInterval(() => {
//     positionBox();
// }, 2000)
wrapper.addEventListener("click", function (event) {
    try {
        if (event.target.id !== "wrapper") {
            var box = event.target;
            box.style.display = "none";
        }
        else {
            console.log("id is null");
        }
    }
    catch (error) {
        console.error(error);
    }
});
