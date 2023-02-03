//event delegation allows users to add an event listener to a parent element that adds the event to all of its present and future descendants.

document.querySelector('#sports').addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + " has been clicked");

    //Triggers event to the specified element/class inside the parent class.
    if(e.target.matches('li')){
        e.target.style.backgroundColor = "#B2DCBB";
    }

    //e.target.style.backgroundColor = "#B2DCBB"; //Triggers event to all elements/class inside the parent class.
})

//Creating an Element inside the parent node will also inherit the event that has been delegated.
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = "Rugby";
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);


/*
document.querySelector('#football').addEventListener('click', function(e){
    const target = e.target;

    console.log("football has been clicked");

    if(target.matches('li')){
        target.style.backgroundColor = "#B2DCBB";
    }
})

document.querySelector('#basketball').addEventListener('click', function(e){
    const target = e.target;

    console.log("basketball has been clicked");

    if(target.matches('li')){
        target.style.backgroundColor = "#B2DCBB";
    }
})

document.querySelector('#boxing').addEventListener('click', function(e){
    const target = e.target;

    console.log("football has been clicked");

    if(target.matches('li')){
        target.style.backgroundColor = "#B2DCBB";
    }
})

document.querySelector('#tennis').addEventListener('click', function(e){
    const target = e.target;

    console.log("tennis has been clicked");

    if(target.matches('li')){
        target.style.backgroundColor = "#B2DCBB";
    }
})

document.querySelector('#golf').addEventListener('click', function(e){
    const target = e.target;

    console.log("golf has been clicked");

    if(target.matches('li')){
        target.style.backgroundColor = "#B2DCBB";
    }
})
*/

/*
const li = document.querySelectorAll('li');

for(let i of li){
    console.log(i);
    i.addEventListener('click', function(){
        i.style.backgroundColor = "#B2DCBB";
        //or
        //e.target.style.backgroundColor = "#B2DCBB";
    })
}
*/