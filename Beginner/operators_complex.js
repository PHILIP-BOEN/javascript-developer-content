//Conditional Operator
/*
    Syntax:

    variable name = (condition)?"value1":"value2";
    variable name = (condition)?"true":"false";
*/

{
    let x = 30;
    let y =(x>=50)?"true":"false";
    console.log(y);

    let age = 17;
    let voter = (age>=18)?"Eligible to Vote":"Invalid";
    console.log(voter); 
}

//Logical Operators
/* 
    Assume x=7, y=4;
    &&  and (x<10 && y>1) true
    ||  or  (x==5 || y==1) false
    !   not !(x==y) true
*/
{
  let x = 7;
  let y = 4;
  console.log(x < 10 && y > 1);  
}


//Comparison Operator
/*  
    Assume x=5;

    ==      Equals to                   x==8      False
    ===     Equals to & data type       x===5     True
    !=      Not Equal                   x!=8      True
    !==     Not Equal & data type       x!==5     False
    >       greater than                x>8       False
    <       less than                   x<8       True
    >=      greater than or equal to    x>=8      False
    <=      less than or equal to       x<=8      True
*/
{
    let x = 5;
    console.log(x=="5");
    console.log(x==="5");
    console.log(x!=5);
    console.log(x!=="5");

}
