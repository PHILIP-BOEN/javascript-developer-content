let x = 15,
    y = 5,
    total = x+y;

document.write(total, "<br>");


function sum()
{
    let x = 20,
        y = 30,
        total = x+y;
    
    document.write(total);
}

sum();


function sum2(x, y)
{
    let total = x+y;
    document.write("<br>",total);
}

sum2(5, 4);
sum2("Hello ", "John");


function sum3(x,y)
{
    let total = x + y;
    return total;
}

document.write("<br>", sum3(70, 3));

        //OR
let output = sum3("Monday ","Tuesday");
document.write("<br>", output);