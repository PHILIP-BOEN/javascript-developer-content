/*
function abc(call){
    call();
}
*/

/*
function one(){
    console.log("Function 1");
}
function two(){
    console.log("Function 2");
}
function three(){
    console.log("Function 3");
}

one();
two();
three();
*/


/*
function one(){
    console.log("Function 1");
}
function two(){
    console.log("Function 2");
}
function three(){
    console.log("Function 3");
}

setTimeout(one, 2000);
two();
three();
*/


/*
function one(){
    setTimeout(function(){
        console.log("Function 1");
        two();
    }, 3000)
}

function two(){
    console.log("Function 2");
}

one();
*/

/*
function person(friend){
    console.log("He goes by the name " +friend);
}

function person2(){
    console.log("He is the key target for now.")
}

person("Alex");
person2();
*/


/*
function person(friend, person2){
    console.log("He goes by the name " +friend);
    person2();
}

function person2(){
    console.log("He is the key target for now.")
}

person("Alex", person2);
*/


function person(friend, person2){
    setTimeout(function(){
        console.log("He goes by the name " + friend);
        person2();
    }, 3000)

}

function person2(){
    console.log("He is the key target for now.");
}

person("Alex", person2);

window.onload = () =>{
document.querySelector("#callback-btn")
.addEventListener("click", () =>{
    console.log("The user has clicked the button!");
});
}
