// let regex = /To/i; -- disables case sensitive.

// let regex = /to/g; -- displays a list of the ones matching when printed twice.


/* 

let output = regex.exec(string1);
let output = regex.test(string1);
let output = string1.match(regex);
let output = string1.replace(regex, "Tomorrow");

*/

let regex = /to/g;
let string1 = "Today, We are to drive to the project to deliver our work";

//Exec
let output = regex.exec(string1);
console.log(output);

output = regex.exec(string1);
console.log(output);

//Test
output = regex.test(string1);
console.log(output);


// Match
let regex2 = /Today/;
let string2 = "Today, We are to drive to the project to deliver our work";

let output2 = string2.match(regex2);
console.log(output2);

let regex3 = /to/g;
let string3 = "Today, We are to drive to the project to deliver our work";

let output3 = string3.match(regex3);
console.log(output3);

//Replace

let regex4 = /Today/;
let string4 = "Today, We are to drive to the project to deliver our work";

let output4 = string4.replace(regex4, "Tomorrow");
console.log(output4);

let regex5 = /to/g;
let string5 = "Today, We are to drive to the project to deliver our work";

let output5 = string5.replace(regex5, "verb");
console.log(output5);






