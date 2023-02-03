let x = 8;
if (x<10)
{
    document.write("X is less than 10 <br>");
}
else if(x=10)
{
    document.write("X is equals to 10");
}
else
{
    document.write("X is greater than 10");
}

let marks = 48;
if (marks>=0 && marks<=39)
{
    document.write("Failed Test");
}
else if (marks>=40 && marks<=49)
{
    document.write("\nGrade: D");
}
else if (marks>=50 && marks<=64)
{
    document.write("Grade: C");
}
else if (marks>=65 && marks<=79)
{
    document.write("Grade: B");
}
else if (marks>=80 && marks<=100)
{
    document.write("Grade: A");
}
else
{
    document.write("Invalid Input");
}


let y = 224;

if (y%2 == 0) 
{
    document.getElementById("demo").innerHTML = "Even No";
}
else {
    document.getElementById("demo").innerHTML = "Odd No";
}


let a = -15;
if (a%2 == 0 && a>0)
{
    document.write("Even and Positive No");
}
else if (a%2 == 0 && a<0)
{
    document.write("Even and Negative No");
}
else if (a%2 != 0 && a>0)
{
    document.write("Odd and Positive No");
}
else if (a%2 != 0 && a<0)
{
    document.write("<br> Odd and Negative No");
}
else
{
    document.write("Error or Zero");
}

a = -15;
if(a>0)
{
    if(a%2==0)
    {
        document.write("Positive and Even");
    }
    else
    {
        document.write("Positive and Odd");
    }
}

else if(a<0)
{
    if (a%2==0) 
    {
        document.write("Negative and Even");
    } 
    else 
    {
       document.write("<br> Negative and Odd"); 
    }
}

else
{
    document.write("Error");
}