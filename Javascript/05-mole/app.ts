console.log("connected");

const moleDivArray = document.querySelectorAll(".mole");
const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
const activeMoleArray = [];
console.log(moleDivArray);

function createAMole() {
  try {
    const newMole = document.createElement("div");
    newMole.classList.add("mole");
    wrapper.appendChild(newMole);
    newMole.style.gridArea = `${getRandomNumber(1,9)}`
    activeMoleArray.push(newMole);
  } catch (error) {
    console.error(error);
  }
}

function getRandomNumber(min:number, max:number) {
    try {
        return Math.random() * (max - min) + min;
    } catch (error) {
        console.error(error)
    }
}

createAMole()