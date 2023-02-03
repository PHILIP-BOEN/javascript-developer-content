let regex = /\d2633/; //92633
let str1 = "This is my number 07174926336274";
let output = regex.exec(str1);
console.log(output)


// \d -- works with numeric characters only.
// stops when there's a letter. 

// let regex = /\d2633/; //92633 (before) single numeric character
// let regex = /\d+2633/; //0717492633 (before) multiple numeric character

// let regex = /2633\d/; //26336 (after) single numeric character
// let regex = /2633\d+/; //26336274 (after) multiple numeric character

// let regex = /\d2633\d/; //926336 (both -before and after) single numeric character
// let regex = /\d+2633\d+/; //07174926336274 (both -before and after) multiple numeric character

let regex2 = /\D+2633/; //92633
let str2 = "This is my number 071749~}A26336274";
let output2 = regex2.exec(str2);
console.log(output2)

// \D -- works with unknown characters only i.e Letters or Symbols .
// stops when there's a numeric or digit value.

// let regex = /\D2633/; //F2633 (before) single Letters or Symbols
// let regex = /\D+2633/; //A(D2633 (before) multiple Letters or Symbols

// let regex = /2633\D/; //2633F (after) single Letters or Symbols
// let regex = /2633\D+/; //2633A!r (after) multiple Letters or Symbols

// let regex = /\D2633\D/; //Y2633a (both -before and after) single Letters or Symbols
// let regex = /\D+2633\D+/; //wTMn~2633TR%4q (both -before and after) multiple Letters or Symbols

let regex3 = /\w+c004\w+/; //sct_c004_0661
let str3 = "This is my student id Sct_c004_0661/2018";
let output3 = regex3.exec(str3);
console.log(output3)

// \w -any character that is a number,alphabet,underscore

let regex4 = /c004\W+/; //c004- !&
let str4 = "This is my student id Sct_c004- !&_0661/2018";
let output4 = regex4.exec(str4);
console.log(output4)

// \W -any character that is not a number,alphabet,underscore

let regex5 = /\sc004/; //  c004
let str5 = "This is my student id Sct c004 0661/2018";
let output5 = regex5.exec(str5);
console.log(output5)

// \s
// works for whitespaces only
// returns null if there's anything that is not a space

let regex6 = /\S+018/; //  c004
let str6 = "This is my student id Sct c004 0661/2018";
let output6 = regex6.exec(str6);
console.log(output6)