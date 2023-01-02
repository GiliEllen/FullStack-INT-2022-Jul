console.log("connected");
var y = 40;
// number, string, boleen, array, undifiend null, object
var fullName = "Gili menahem";
var x = 30; // number
var array = [0, 1, 2];
array.push(3);
console.log(array);
// math opreators
// + - * / **
var salary = 5000;
var tax = salary * 0.1;
// tax++;
// logic opreator -- if && ||
// compertor opreators < > ==, ===, >=, <=
// if(x > y) console.log("x is bigger")
//     true
// assiments opreators  הקצאה
// = += -= ++ --
tax = tax - 1;
tax--;
console.log(tax);
// conditions
if (x > y) {
    console.log("x is bigger");
}
else if (x < y) {
    console.log("x is smaller");
}
else {
    console.log("try again");
}
var noValue; //undefined
// turthy and falsy values
// flasy values: 0, '', undefined, null, NaN (false)
// turthy: number, array, string, [], {} ... (true)
var connectedUsers = [
    { name: "gili", age: 35 },
    { name: "Yaser", age: 29 },
    { name: "hadar", age: 26 },
];
if (connectedUsers.length > 0) {
    console.log("this is the users:");
    console.log(connectedUsers);
    console.log(connectedUsers[0].name);
    connectedUsers[0].age++;
}
else {
    console.log("no users found from database");
}
// x = 30
// soft Vs strict == ===
// strict checks type as well
// console.log(x == "30"); // true
//  ternery  opreator
//condition ? (true) Do This : (false) do this
connectedUsers.length > 0
    ? console.log("users exist")
    : console.log("no users found from database");
// task                  form     prompt
// עליכם ליצור מחשבון מס, שיקבל מהיוזר (פורמפט, או פורם) משכורת, ויחשב לפי
// מדרגות מס כמה מס אמור לרדת, עליו להדפיס על המסך את המשכורת נטו, וכמה מס ירד.
//let tax = 0;
// 6,450 > salary == X 10%
//tak = X
//6,451 < salary < 9,240 == 2489 14%
// tax = tax +
//
//
// 55,271 < salary == 64,729 50%
function handleCalc(event) {
    event.preventDefault();
    var input = document.querySelector(".salary");
    console.log(input);
    //@ts-ignore
    var salary = input.value;
    console.log(salary);
}
// loops
// for
// while
// counter   considtion for loop  change
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(`hello ${i}! and hello ${j}!`)
//   }
// }
// let i = 0;
// while (i < 5) {
//   console.log(`hello ${i}!`)
//   i++;
// }
// array
//    index            0      1       2        3 ...
var namesArray = ["gili", "dor", "yaser", "sarah"];
var numArray = [1, 2, 3, 4];
var initialValue = 0;
var sumWithInitial = numArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, initialValue);
console.log(sumWithInitial);
var sum = 0;
for (var i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
}
console.log(sum);
namesArray.forEach(function (name) {
    console.log("hello " + name);
});
// for(let i = 0; i < namesArray.length; i++) {
//   console.log("hello " + namesArray[i])
// }
if (namesArray.includes("gili")) {
    console.log("gili is in the array");
}
// add to end of array
namesArray.push("maxim");
// add to start of array
namesArray.unshift("yahel", "mustafa");
// removes last element from array
namesArray.pop();
// removes first element from array
namesArray.shift();
console.log(namesArray);
// filter, map , some , reverse
//function - repeatble code segment
function sayHello(name) {
    console.log("hello " + name + "!");
    return 5;
}
// sayHello("hadar")
// sayHello("yuval")
// namesArray.forEach((name) => {
//   sayHello(name)
// })
// DOM
var box1 = document.querySelector(".box");
console.log(box1);
var box2 = document.getElementById("box");
console.log(box2);
box1.style.height = "100px";
box1.style.width = "100px";
box1.style.border = "1px solid black";
// events
var form = document.querySelector(".NumberForm");
// form?.addEventListener("submit", (event:any) => {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.target.elements.salary.value);
//   const salary = event.target.elements.salary.value;
// });
