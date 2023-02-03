class Student{
    constructor(name, age, adm_no){
        this.name = name;
        this.age = age;
        this.adm_no = adm_no;
    }

    Org(){
        return("I am "+this.name+" from AWS.");
    }

    dob(){
        return("The date of birth of "+this.name+" is "+ (2022 - this.age));
    }
    static add(a, b){
        return a+b;
    }
}

let student1 = new Student("Fred", 23, 2771);
console.log(student1);
console.log(Student.add(10,45));


class Student2 extends Student {
    constructor(name, age, adm_no, language, section) {
        super(name, age, adm_no);
        this.language = language;
        this.section = section;
    }
}

let student2 = new Student2("Antony", 22, 1597, "C", "Backend");
console.log(student2);
console.log(Student2.add(70, 4));