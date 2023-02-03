let regex = /We.come/; // single character in an expression
// let regex = /W*e/; // multiple characters in an expression
// let regex = /^Welcome/; // returns true only if it starts with the specified word in the string
// let regex = /back$/; // returns true only if it starts with the specified word in the string
// let regex = /Welc?ome?/; // returns true only if it starts with the specified word in the string
let str1 = "Welcome back";

let tst = regex.test(str1);
console.log(tst);

let output = regex.exec(str1);
console.log(output);