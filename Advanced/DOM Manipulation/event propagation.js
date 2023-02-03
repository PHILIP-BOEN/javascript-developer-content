//e is the event object i.e function(e) or function(event)
//third parameter is the boolean value, true represents event capturing, false (default value) represents event bubbling
//e.stopPropagation(); To stop an event from further propagation in the capturing and bubbling phases. 
//stopPropagation(); - during capturing, events down the dom tree, will not be fired in the web browser, i.e innerText = "Clicked!" ;
//can be used to determine which event to be fired first, example is a row which has an onclick method and a button inside the row which has an onclick method. If you click on the button, it executes both the row and the button. To prevent this we use event propagation.

//once: true; fires the event only once, best when the other events are set to false
//default behaviour of an anchor tag is to try to redirect the user to somewhere else, when you try to use event propagation, it quickly fires off the events then immediately disappears.
//use e.preventDefault() method to stop this from happening.  

window.addEventListener("click", function () {
    console.log("Window");
}, false);

document.addEventListener("click", function () {
    console.log("Document");
}, false);

document.querySelector(".div2").addEventListener("click", function(e){
    console.log("Div 2");
    //e.stopPropagation();
}, false);
document.querySelector(".div1").addEventListener("click", function(){ 
    console.log("Div 1");
}, {once: true});
document.querySelector(".button").addEventListener("click", function(e){
    //console.log(e); //Event Object i.e PointerEvent whose type is click.
    //console.log(e.target); //target property shows the element the event is on. i.e <button>Click</button>
    e.preventDefault();
    console.log(e.target.innerText = "Clicked!"); //changes the property of the element of the target.

}, false);