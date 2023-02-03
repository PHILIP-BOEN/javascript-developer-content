//Global Variable
let x = 10;
document.write(x);

//Local Variable
{
    let x = 5;
    document.write("<br>", x);
}

document.write("<br>", x);


// Local Variable
function myfunction(x,y)
{
    let area = x*y;
    document.write("<br>",area);
}

myfunction(5,6);

//document.write(y); will not print since variable y is defined inside the function


//Global Variable
let firstName = "Philip";
let lastName = "Boen";

function fullName()
{
    let output = firstName + " " + lastName;
    document.write("<br>", output);
}

fullName();

/*
var1 = 20; global variable without using a separate var or let keyword
document.write(var1)
*/