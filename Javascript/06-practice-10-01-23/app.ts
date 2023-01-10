console.log("connected");

const userArray = [
  { userName: "gili", password: "123456" },
  { userName: "salman", password: "1234567" },
  { userName: "ruth", password: "12345678" },
];
const root = document.querySelector("#root") as HTMLDivElement;

function handleSubmit(event) {
  try {
    event.preventDefault();
    console.log(event);
    // event.stopPropagation();
    // const userNameINPUT = document.querySelector("#userName");
    // const password = document.querySelector("#password");
    const userName = event.target.elements.userName.value;
    const password = event.target.elements.password.value;

    if (!userName)
      throw new Error("Error202: No userName recevied from the client");
    if (!password)
      throw new Error("Error201: No password recevied from the client");

    // userArray.forEach((element) => {
    //     if (userName == element.userName && password == element.password) {
    //        root.innerText = `Hello ${userName}!`

    //     } else {
    //         root.innerText = "please try again"
    //     }
    // })

    for (let i = 0; i < userArray.length; i++) {
      if (
        userName == userArray[i].userName &&
        password == userArray[i].password
      ) {
        console.log("good");
        root.innerText = `Hello ${userName}!`;
        return
      } else {
        root.innerText = "please try again";
      }
    }
  } catch (error) {
    console.error(error);
    const message = error.message;
    if (message.includes("Error202")) {
      const userNameError = document.querySelector(
        "#userNameError"
      ) as HTMLDivElement;
      userNameError.innerText = "no user name Provided";
    }
  }
}
