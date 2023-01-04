console.log("connected");
var moleDivArray = document.querySelectorAll(".mole");
var wrapper = document.querySelector(".wrapper");
var activeMoleArray = [];
console.log(moleDivArray);
function createAMole() {
    try {
        var newMole = document.createElement("div");
        newMole.classList.add("mole");
        wrapper.appendChild(newMole);
        newMole.style.gridArea = "" + getRandomNumber(1, 9);
        activeMoleArray.push(newMole);
    }
    catch (error) {
        console.error(error);
    }
}
function getRandomNumber(min, max) {
    try {
        return Math.random() * (max - min) + min;
    }
    catch (error) {
        console.error(error);
    }
}
createAMole();
