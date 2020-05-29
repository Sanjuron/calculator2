

"use strict";

console.log("salut");

let div = document.createElement("div"); // je crée une variable qui crée une div ds mon dom
div.classList.add("calculator"); // je lui ajoute une classe calculator
console.log(div); // div est créée mais elle n'apparait pas.
document.body.append(div);

for(let i=0; i<=9; i++){ // génération des dix chiffres
let button = document.createElement("button");
button.classList.add("button");
button.textContent = i; // textContent pas innerContent
console.log(button);
div.prepend(button);
}

let plus = document.createElement("button");
plus.classList.add("button__operator");
plus.textContent = "+";
console.log(plus);
div.prepend(plus);

let minus = document.createElement("button");
minus.classList.add("button__operator");
minus.textContent = "-";
console.log(minus);
div.prepend(minus);

let multiply = document.createElement("button");
multiply.classList.add("button__operator");
multiply.textContent = "x";
console.log(multiply);
div.prepend(multiply);

let divide = document.createElement("button");
divide.classList.add("button__operator");
divide.textContent = "/";
console.log(divide);
div.prepend(divide);

let screen = document.createElement("p");
screen.classList.add("screen");
div.prepend(screen);



let getContent = document.getElementsByClassName("div");
getContent.addEventListener("click", function(event){
    console.log(event.target.textContent);
})



// let button = document.getElementsByClassName("calculator");

// button.addEventListener("click", function(event){
//     console.log(event.target.textContent);
//         event.preventDefault();

// })

