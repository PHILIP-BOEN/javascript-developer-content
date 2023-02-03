/*
    new Map() - Creates the Map
    map.set(key, value) - stores the value by the key
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/



/*
let car = new Object();
{
    car.price = 600000;
    car.brand = "Audi";
    car.seats = 5;
}
*/


let car = new Map();
{
    car.set(1, "Benz");
    car.set(2, "Audi");
    car.set(3, "Tesla");

}
console.log(car);
console.log(car.get(2));
console.log(car.size);


let car2 = new Map();

let obj = {};
let func = function(){};

{
    car2.set("price", 600000);
    car2.set("brand", "Audi");
    car2.set("seats", 5);

    car2.set(obj, "product");
    car2.set(func, "makeOrders");
}

console.log(car2.get("price"));
console.log(car2.get(obj));
console.log(car2.get(func));

//Arrays and Maps
let myArray = [[1, "Audi"], [2, "Benz"], [3, "Tesla"]];
let car3 = new Map(myArray);
console.log(car3);
console.log(car3.get(3));

//For Loop, Arrays and Maps
let myArray1 = [[1, "Audi"], [2, "Benz"], [3, "Tesla"]];
let car4 = new Map(myArray1);
for(let [key, values] of car4){
    console.log(key+" "+values);
}

for(let key of car4.keys()){
    console.log(key);
}

for(let values of car4.values()){
    console.log(values);
}

//Clone an existing Map
let myArray2 = [[1, "Audi"], [2, "Benz"], [3, "Tesla"]]
let car5 = new Map(myArray2);

let car6 = new Map(car5);
console.log(car6);
