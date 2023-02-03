/*
console.log("Hello");

let details = {

    Name : "Philip Boen",
    Subject : "Javascript",
    Address : "Nairobi"
}

console.log(details);
*/

function details(name,subject,address){
    this.name = name;
    this.subject = subject;
    this.address = address;
}

details.prototype.getName = function(){
    return this.name;
}

details.prototype.getAddress = function(){
    return this.address;
}

details.prototype.grades = "A";

let details1 = new details("Paul", "Student", "Nairobi");
let details2 = new details("James", "Staff", "Mombasa");
console.log(details1);

