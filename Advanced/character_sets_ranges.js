let regex = /[abc]def/;
let str1 = "This string contains bdef";

let output = regex.test(str1);
console.log(output);