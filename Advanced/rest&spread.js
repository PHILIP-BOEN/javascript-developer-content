//rest
var [firstname, lastname, ...othername] = ["John", "Doe", "James", "Peter"];

console.log(othername);

function trial(yesterday, ...restof) {
    return `Yesterday was ${yesterday} the following days are ${restof}`;
}

console.log(trial("Monday", "Wednesday", "Thursday"));

// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
    firstName: "Oluwatobi",
    lastName: "Sofela",
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}

// Invoke the otherInfo variable:
console.log(otherInfo);



//spread
var othername = ["James", "Peter"];

var fullname = ["John", "Doe", ...othername];
console.log(fullname);

var myName = ["Sofela", "is", "my"];
var aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

//Convert a String into Individual Array Items
var myName = "Oluwatobi Sofela";

console.log([...myName]);

let numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
    return a + b + c + d;
}

console.log(addNumbers(...numbers));

//adds first numbers in a case where the numbers declared are more than required in the function parameter
numbers = [1, 3, 5, 7, 10, 200, 90, 59];

function addNumbers(a, b, c, d) {
    return a + b + c + d;
}

console.log(addNumbers(...numbers));

const myNames = ["Oluwatobi", "Sofela"];
const subject = "DevOps";
const bio = { ...myNames, runs: "codesweetly.com", subject };

console.log(bio);

//Object literal
let othernames = { othername: "Santos Júnior" };
let legal = { firstname: "Neymar", lastName: "da Silva" };
let fullName = { firstname: "Neymar", lastName: "da Silva", ...othernames };

console.log(fullName);
