/*
const Employee = {
    Post : function(){
        return "A software developer";
    },

    changeName : function(name){
        this.name = name;
    }
};
*/

/*
let E1 = Object.create(Employee);
E1.name = "Kaushal";
E1.role = "Writer";
E1.changeName("Ram");
console.log(E1);
*/

/*
let E1 = Object.create(Employee, {
    name : {value : "James", writable : true},
    role : {value : "Accountant"},
})
E1.changeName("Ram");
console.log(E1);
*/

function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function(){
    return (this.name+" "+"is a content creator");
}

let employee1 = new Employee("Paul", 16043, 65450);
console.log(employee1);

function Programmer(name, id, salary, language){
    Employee.call(this, name, id, salary);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

let programmer1 = new Programmer("Peter", 16044, 90000, "JAVA");
console.log(programmer1);