console.log("connected");
var userArray = [
    { userName: "gili", password: "123456" },
    { userName: "salman", password: "1234567" },
    { userName: "ruth", password: "12345678" },
];
var root = document.querySelector("#root");
function handleSubmit(event) {
    try {
        event.preventDefault();
        console.log(event);
        // event.stopPropagation();
        // const userNameINPUT = document.querySelector("#userName");
        // const password = document.querySelector("#password");
        var userName = event.target.elements.userName.value;
        var password = event.target.elements.password.value;
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
        for (var i = 0; i < userArray.length; i++) {
            if (userName == userArray[i].userName &&
                password == userArray[i].password) {
                console.log("good");
                root.innerText = "Hello " + userName + "!";
                return;
            }
            else {
                root.innerText = "please try again";
            }
        }
    }
    catch (error) {
        console.error(error);
        var message = error.message;
        if (message.includes("Error202")) {
            var userNameError = document.querySelector("#userNameError");
            userNameError.innerText = "no user name Provided";
        }
    }
}
