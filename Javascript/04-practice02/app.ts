console.log(`connected`);

const boxArray = document.querySelectorAll(".box");
const wrapper = document.querySelector(".wrapper") as HTMLDivElement;


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