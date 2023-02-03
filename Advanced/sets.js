/*
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete ()	Removes an element from a Set
has()	Returns true if a value exists
clear()	Removes all elements from a Set
forEach()	Invokes a callback for each element
values()	Returns an Iterator with all the values in a Set
keys()	Same as values()
entries()	Returns an Iterator with the[value, value] pairs from a Set
*/


const mySet = new Set();

mySet.add("Mango");
mySet.add("Apple");
mySet.add("Banana");

//Won't add the same value again
mySet.add("Mango");

console.log(mySet);


const arr = ["Mango", "Apple", "Banana", 1,2,1,3,4,5,6];
const mySet2 = new Set(arr);
console.log(mySet2);

const myArray = Array.from(mySet2);
console.log(myArray);

console.log(myArray == mySet2);


for (let item of mySet2){
    console.log(item);
}

//  OR

/*
for (let item of myArray){
//     console.log(item);
// }
*/

//Removes selected values from the Array
mySet2.delete("Mango");
mySet2.delete(4);
console.log(mySet2);

//Removes all the values from the Array
mySet.clear();
console.log(mySet);


