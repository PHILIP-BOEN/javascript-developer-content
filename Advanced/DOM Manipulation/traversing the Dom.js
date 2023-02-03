//Parent Node Traversal

const node = document.querySelector('ul');

console.log(node.parentNode.parentNode);
console.log(node.parentElement.parentElement);

const html = document.documentElement;

console.log(html.parentNode); // will display document since it is a node property.
console.log(html.parentElement); //will display null since document does not have any element property.


//Child Node Traversal
console.log(node.childNodes); //Display node list of the child, and counts whitespace and indentation as text nodes.
console.log(node.firstChild); //since it counts indentation as a text node, it will say text is the first child.
console.log(node.lastChild);  // also the last child will be counted as text node.

//styling child nodes 
node.childNodes[1].style.fontStyle = 'italic';

console.log(node.children); //Displays children as HTML collection

//node.children[3].innerText = "Inside Man";
console.log(node.firstElementChild);
console.log(node.lastElementChild);

//display count of child elements
console.log(node.childElementCount);


//Sibling Node Traversal
//h1 and ul are siblings

console.log(node.previousSibling); //text node
console.log(node.nextSibling); // text node

console.log(node.previousElementSibling); // h1 element
console.log(node.nextElementSibling); // null, no other element sibling