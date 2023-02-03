/*
let cars = ["BMW", "BENZ", "AUDI", "TESLA"];

for (let i = 0; i<cars.length; i++){
    console.log(cars[i]);
}
    //or

for(let i of cars){
    console.log(i);
}    

*/

let carsArray = ["BMW", "BENZ", "AUDI", "TESLA"];

function cars(values){
    let index = 0;

    return{
        next: function(){
            if (index < carsArray.length){
                return {
                    value: values[index++],
                    done: false
                }
            }
            else{
                return {
                    done: true
                }
            }
        }
    }
}

let newCars = cars(carsArray);
console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);
