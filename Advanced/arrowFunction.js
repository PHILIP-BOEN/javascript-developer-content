function func1(a, b){
    return a+b;
}
console.log(func1(30,21));


let sum = (a, b) => a+b;
console.log(sum(80, 22));
//or
/*
let sum = (a, b) => {
    return a+b;
}
*/

function func2(){
    console.log("Hey There!");
}
func2();

let x2 = () => {
    console.log("Hello Andrew");
}
x2();

let func3 = firstName => {
    console.log(firstName);
}
func3("John");