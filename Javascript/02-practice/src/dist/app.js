var form = document.getElementById("userForm");
// const form = document.querySelector("#userForm")
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = event.target.elements.firstName.value;
    var lastName = event.target.elements.lastName.value;
    console.log(firstName, lastName);
    var header = document.getElementById("header");
    header.innerText = "Hello " + firstName + " " + lastName + "!";
    // header!.innerText = 'Hello ' + firstName + " " + lastName + "!";
    event.target.elements.firstName.value = "";
    event.target.elements.lastName.value = "";
});
// console.log(form)
function handleSubmit(event) {
    event.preventDefault();
    var firstName = event.target.elements.firstName.value;
    var lastName = event.target.elements.lastName.value;
    var header = document.getElementById("header");
    header.innerText = "Hello " + firstName + " " + lastName + "!";
    event.target.elements.firstName.value = "";
    event.target.elements.lastName.value = "";
}
