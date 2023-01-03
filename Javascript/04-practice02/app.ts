console.log(`connected`);

const boxArray = document.querySelectorAll(".box");
const wrapper = document.querySelector(".wrapper") as HTMLDivElement;

const newBoxArray = [];

function getRandomNumber(min:number, max:number) {
    try {
        return Math.random() * (max - min) + min;
    } catch (error) {
        console.error(error)
    }
}

function positionBox() {
    try {
        boxArray.forEach((box:HTMLDivElement) => {
            box.style.left = `${getRandomNumber(0,800)}px`
            box.style.top = `${getRandomNumber(0,800)}px`
        })
    } catch (error) {
        console.error(error)
    }
}

function startGame() {
    try {
        positionBox();
    } catch (error) {
        console.error(error)
    }
}

// setInterval(() => {
//     positionBox();
// }, 2000)

wrapper.addEventListener("click", (event) => {
    try {
        if(event.target.id !== "wrapper") {
            const box = event.target;
            box.style.display = "none";
        } else {
            console.log("id is null")
        }   
    } catch (error) {
        console.error(error)
    }
})

function createBox() {
    try {
        const newbox = document.createElement('div');
        newbox.classList.add('box2');
        newbox.style.left = `${getRandomNumber(0,800)}px`
        newbox.style.top = `${getRandomNumber(0,800)}px`
        wrapper.appendChild(newbox);
        newBoxArray.push(newbox)
    } catch (error) {
        console.error(error)
    }
}

function removeBox(newBoxArray) {
    try {
        newBoxArray[0].remove();
        newBoxArray.shift();
    } catch (error) {
        console.error(error)
    }
}

// setInterval(() => {
//     createBox()
// }, 1000)

// setInterval(() => {
//     removeBox(newBoxArray);
// },2000)

createBox()

