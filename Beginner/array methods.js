//Array Methods
/* 
    push() – Insert an element at the end of the array.
    unshift() – Insert an element at the beginning of the array.
    pop() – Remove an element from the end of the array.
    shift() – Remove an element from the beginning of the array.
    slice() – Create a shallow copy of an array.
    Array.isArray() – Determine if a value is an array.
    length – Determine the size of an array.
    filter() - creates a new array filled with elements that pass a test provided by a function.
    filter(function(currentValue, index, arr), thisValue)
    splice(index, howmany, item1, ....., itemX)
    sort() - sorts & overwrites the elements of an array. sorts the elements as strings in alphabetical and ascending order. "25" is bigger than "100", because "2" is bigger than "1". array.sort(compareFunction)
    const points = [40, 100, 1, 5, 25, 10]; // Ascending Order
    points.sort(function(a, b){return a-b}); 
    reverse() - 
*/

const car = [{
    brand: "Toyota",
    type: "saloon",
    price: 60000,
    availability: "car is available",
    mileage: "unlimited mileage"
},
{
    brand: "Audi",
    type: "suv",
    price: 70000,
    availability: "Remaining four units",
    mileage: "unlimited mileage"
},
{
    brand: "BMW",
    type: "suv",
    price: 75000,
    availability: "Car not available for now",
    mileage: "unlimited mileage"
},];

console.log(car[2].brand);
console.log(car[2].type);

let newCar = {
    brand: "Tesla",
    type: "wagon",
    price: 105000,
    availability: "Car not available for now",
    mileage: "unlimited mileage"
};

car.splice(1, 0, newCar);

console.log(car);
console.log(car.length);