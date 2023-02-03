console.log("Run 1st");

fetch("https://dog.ceo/api/breeds/image/random") //Send a request and returns as a promise
    .then(response => response.json()) //Converts the response to json
    .then(json => console.log('Run 2nd', json))

console.log("Run 3rd");



/*
    The first and the third console logs will be printed first
    The second console log will be printed last.
    This is because the first and the third console logs values are available
    while the second will have to retrieve the values in the url which will take some few seconds.
*/

/*
fetch("https://dog.ceo/api/breeds/image/random") //Send a request and returns as a promise
    .then(response => response.json()) //Converts the response to json
    .then(json => {
        console.log(json.message)
        dog_img.innerHTML = `<img src = "${json.message}" style = "max-width: 300px; max-height: 300px;"/>`;
    })

    //Object Notation
    /*
        message: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_2645.jpg"
        status: "success"
    */

//Display image in the DOM

let dog_img = document.getElementById("dog-image");
let reload = document.querySelector(".refresh");


 

reload.onclick = () => {
    fetch("https://dog.ceo/api/breeds/image/random") //Send a request and returns as a promise
        .then(response => response.json()) //Converts the response to json
        .then(json => {
            dog_img.innerHTML = `<img src = "${json.message}" style = "max-width: 300px; max-height: 300px;"/>`;
        })
};    

//Async - Await
/* let getDog = async () => {
   let url = 'https://dog.ceo/api/breeds/image/random';
   let response = await fetch(url);
   let data = await response.json();
   console.log(data.message);
 }

async function getDog() {
  let url = 'https://dog.ceo/api/breeds/image/random';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.message);

  let {message, status} = data;
  console.log(message);
}

getDog();
 */
    