document.write("<h3>For</h3> -- console.log");
for(let i = 0; i < 5; i++)
{
    console.log("Hello World", i);
}

for(let i = 0; i <= 5; i++)
{
    if(i%2 == 1)
    console.log(i);
}

for(let i = 5; i >= 0; i--)
{
    if(i%2 == 1)
    console.log(i);
}

//For In
document.write("<h3>For In</h3>");
const person = {fname: "John", lname: "Cole", age: 21};

for(let i in person)
{
    document.write(i + ":" + person[i], "<br>");
}

{
const person = {
                    fname: "John",
                    lname: "Cole", 
                    age: 21
                };

let txt = "";
for(let i in person)
{
    txt+=person[i] + "<br>";
}

document.write(txt)
}


{
let numbers = [45, 3, 21, 9];

let txt = "";
for(let i in numbers)
{
    txt+=numbers[i] + " ";
}

document.write(txt)
}

//ForEach method
{
let numbers = [60, 13, 5, 901];

let txt = "<br>";
numbers.forEach(myFunction);


function myFunction(value, index, array)
{
    txt+=value + "<br>";
}

document.write(txt)
}

//  For Of
document.write("<h3>For Of</h3>");

{
const cars = ["BMW", "Volvo", "GTI"]
let txt ="";
for (let i of cars)
{
    txt+=i+"<br>";
}
document.write(txt);

}

{
const name = "JAMES";
let txt ="";
for (let i of name)
{
    txt+=i+"<br>";
}
document.write(txt);

}