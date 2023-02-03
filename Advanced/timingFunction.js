
/*let message = () => alert("You have been logged out!");

function Start(){
    setTimeout(message, 2000);
}
*/

let message = () => alert("You have been logged out!");

let id = 0;

function Start(){
    id = setTimeout(message, 2000);
}

function Stop(){
    clearTimeout(id);
}

function Start1(){
    setTimeout(function(){
        alert("Good Afternoon")
    }, 2500)
}

let message2 = () => alert("You have been logged out!");

let id1 = 0;

function Start2() {
    id1 = setInterval(message2, 2000);
}

function Stop() {
    clearTimeout(id1);
}