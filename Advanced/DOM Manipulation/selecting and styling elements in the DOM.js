

const heading = document.getElementById("main-heading");

heading.style.color = "#2C2C2C";
//console.log(heading);

const list = document.getElementsByClassName("list-items");

list[0].style.color = "#7F5D5D";
//console.log(list[0]);

const listItems = document.querySelector("#main-heading");
listItems.style.fontStyle = "italic";

const listItems1 = document.querySelector("li");
listItems1.style.fontStyle = "italic";
console.log(listItems1)

const listItems2 = document.querySelectorAll(".list-items");

for(let items of listItems2){
    items.style.fontSize = "20px";
}

//console.log(listItems2)
//or

/*
for(let i=0; i<listItems2.length; i++){
    listItems2[i].style.fontSize = "20px";
}
*/


function submit(){
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;
    const userName = firstName + lastName;
    
    document.querySelector("#demo").innerHTML = `<p>Good Evening, ${userName}.</p>`;
}

