const form = document.getElementById("userForm") as HTMLFormElement;
// const form = document.querySelector("#userForm")


form.addEventListener("submit", (event:any) => {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;

    console.log(firstName, lastName);

    const header = document.getElementById("header");
    header!.innerText = `Hello ${firstName} ${lastName}!`;
    // header!.innerText = 'Hello ' + firstName + " " + lastName + "!";
    event.target.elements.firstName.value = "";
    event.target.elements.lastName.value = "";
})

// console.log(form)

function handleSubmit(event) {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;

    const header = document.getElementById("header");
    header!.innerText = `Hello ${firstName} ${lastName}!`;
    event.target.elements.firstName.value = "";
    event.target.elements.lastName.value = "";
}