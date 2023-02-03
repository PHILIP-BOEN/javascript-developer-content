let car1 ="Jeep",
    car2 ="Honda",
    car3 ="BMW";

document.write(car1, "<br>");
document.write(car2, "<br>");
document.write(car3, "<br>");

let car = ["Mustang", "Kia", "Tesla"];
document.write(car, "<br>");
document.write(car[2], "<br>");
document.write(car[0], "<br>");
document.write(car[1], "<br>");


let carbrand = ["Mustang", "Kia", "Tesla"];
for(let i = 0; i<5; i++)
{
    document.write(carbrand, "<br>");


    /* document.write(carbrand[2], "<br>");
                    OR
       document.write(carbrand[0], "<br>"); 
    */
}

let fruits = new Array("Mango", "Apple", "Orange");

for(let i=0; i<3; i++)
{
    document.write(fruits[i], "<br>");
}

{

let cartype = ["Mazda", "Hyundai", "Lexus"];
cartype.push("Supra");
cartype.pop();
cartype.pop();
cartype.push("Harrier");

for (let i =0; i<4; i++)
{
    document.write(cartype[i],", ");
}

}


{

let students = ["Philip", "Richard", "Saul"];
students.push("Lee");
students.pop();
students.pop();
students.push("Howard");

for (let i =0; i<students.length; i++)
{
    document.write("<br>" ,students[i]);
}

}