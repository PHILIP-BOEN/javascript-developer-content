const unlist = document.querySelector("ul");
const list = document.createElement("li"); //Creating an Element

unlist.append(list); //Adding an Element at the end
//Use prepend to add element at the beginning.

//Modifying Text
const text = document.querySelector("li");
console.log(text.innerText);
console.log(text.textContent);
console.log(text.innerHTML);

list.innerText = "The Office";

//Modifying Attributes & Classes

list.setAttribute('class', 'list-items');
list.setAttribute('style', 'font-style: italic;')

//Remove Attribute
list.removeAttribute('style', 'font-style: italic;');

//get Attribute
const title =  document.querySelector("#main-heading");
console.log(title.getAttribute('id'));

//classList method
list.classList.add('list-items');

// remove class
//list.classList.remove('list-items')

//check classList if it exists
console.log(list.classList.contains('list-items'));

//Remove Elements in DOM
list.remove();