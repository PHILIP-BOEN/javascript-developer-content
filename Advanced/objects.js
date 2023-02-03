/*

let car_manufacturer = "Audi";
let car_model = "Q7";
let price = 50000;

function allwheeldrive()
{
    document.write("This car is a four wheel drive!");
}

allwheeldrive();

*/

{

let car = {
            car_manufacturer: "Audi",
            car_model: "Q7",
            price: 50000,

            allwheeldrive: function()
            {
                return("This car comes with four wheel drive.");
            }
          }

document.write(car.car_manufacturer);
document.write("<br>");
document.write(car.allwheeldrive());


}

//Constructor Function 
{
function cars (car_manufacturer, car_model, price)
{
    this.car_manufacturer = car_manufacturer;
    this.car_model = car_model;
    this.price = price;

    this.allwheeldrive = function(){
        document.write("This is a four-wheel drive car!");
    }
}
let car1 = new cars("Ford", "Ranger Sports", 55000);
document.write("<br>");
car1.allwheeldrive();

let car2 = new cars("BMW", "X7", 43000);
document.write("<br>");
document.write(car2.car_model);
document.write("<br>");
document.write(car2.price);
}

//Data Types as Objects
{
    let str1 = new String();
    document.write("<br>");
    document.write(typeof(str1));
}

{
    let str1 = "Evening";
    document.write("<br>");
    document.write(typeof(str1));
}

//Adding properties outside the definition of the object
{

    let car = {
        car_manufacturer: "Mazda",
        car_model: "CX 5",
        price: 50000,

        allwheeldrive: function () {
            document.write("This car comes with four wheel drive.");
        }
    }

    document.write("<br>");
    document.write(car.car_manufacturer);

    document.write("<br>");
    car.allwheeldrive();

    car.car_color = "Grey";
    document.write("<br>");
    document.write(car.car_color);
    
    car.fuel_type = "Diesel";
    document.write("<br>");
    document.write(car.fuel_type);

    car.car_type = function(){
        document.write("Compact Crossover SUV");
    }
    document.write("<br>");
    car.car_type();

}

//Deleting a property of an object
{
    let car = {
        car_manufacturer: "Mazda",
        car_model: "CX 5",
        price: 50000,

        allwheeldrive: function () {
            document.write("This car comes with four wheel drive.");
        }
    }
    document.write("<br>");
    document.write(car.car_model);

    delete car.car_model;
    document.write("<br>");
    document.write(car.car_model);
}

//Updating values of an existing property
{
    let car = {
        car_manufacturer: "Mazda",
        car_model: "CX 5",
        price: 50000,

        allwheeldrive: function () {
            document.write("This car comes with four wheel drive.");
        }
    }
    document.write("<br>");
    car.price = "70000";
    document.write(car.price);

    document.write("<br>");
    document.write(typeof(car.price));
}