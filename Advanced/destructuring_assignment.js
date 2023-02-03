let [firstName, lastname] = ["John", "Doe"];
console.log(firstName + " " + lastname);

let [length, width, ...other] = [80, 100, 75, 8000];
console.log(other);

let { today, tomorrow } = { today: "Monday", tomorrow: "Tuesday" };
console.log(today);
console.log(tomorrow);

let car = {
    brand: "Audi",
    year: 2022,
};

let { brand, year } = car;

console.log(brand);
console.log(year);


let { length1, width2, ...other2 } = { length: 50, width: 70, height: 90, area: 3500 };
console.log(other2);