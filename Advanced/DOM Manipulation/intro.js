let title = document.getElementById("container");

let fullname = "Philip!";

console.log(title.innerHTML);

title.innerHTML = `<h4 style = "font-style: italic;">Good Afternoon, ${fullname} </h4>`;

console.log(title.innerHTML);

let inner = document.querySelector(".inner");

console.log(title.innerText);

let car = [
    {
        brand: "Toyota",
        seat: 7,
        type: "SUV",
        milage: "unlimited",
    },
    {
        brand: "Benz",
        seat: 5,
        type: "saloon",
        milage: "unlimited",
    },
    {
        brand: "Honda",
        seat: 5,
        type: "wagon",
        milage: "unlimited",
    }
];

inner.innerText = car[1].brand;

const square = document.querySelector(".square");

/*
square.onclick = (e) => e.target.style.background = "black", false;

const innersquare = document.querySelector(".inner-sq");

innersquare.onclick = (e) => e.target.style.background = "black", true;

*/

/*
square.onclick = () => square.style.background = "black";

const innersquare = document.querySelector(".inner-sq");

innersquare.onclick = (e) => {innersquare.style.background = "black"; e.stopPropagation()};
*/

square.onclick = (e) => e.target.style.background = "black";

const innersquare = document.querySelector(".inner-sq");

innersquare.onclick = () =>innersquare.style.background = "black";