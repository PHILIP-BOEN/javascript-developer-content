/*While -- loops through a block of code as long as a specified condition is true.
NB: Do not forget to increase the variable used in the condition, otherwise the loop will never end!*/
document.write("<h3>While Loop</h3>");

let i = 0;
/* while (condition)
statement */

while (i < 3) {
    i++;
}

document.write(i, "<br>");

{
    let i = 0;
    while (i < 4) 
    {
        document.write("Today <br>");
        i++;
    }
}


{    
let nameId = "";
let i = 0;

while(i<3)
{
    nameId+= "Name Id is "+ i+ "<br>";
    i++;
}

document.write(nameId);

}
/*Do While -- This loop will execute the code block once, before checking 
if the condition is true, then it will repeat the loop as long as the condition is true.

NB: Do not forget to increase the variable used in the condition, otherwise the loop will never end!*/
document.write("<h3>Do While Loop</h3>");

{
let i = 0;
let x = "Card";
do {
        document.write(x, "<br>");
        i++;
}

while(i<3);

}

{
let i = 1;
let txt = "";

do {
    txt+="The Number is " + i + "<br>";
    i++;
}
while(i<=3);
document.write(txt);
}


