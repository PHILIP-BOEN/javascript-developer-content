let audio = document.getElementById("ding");

document.addEventListener("keydown", (e)=>{
    if (e.key == "p" || e.key == "P" || e.key == " "){
        audio.play();
        console.log("Letter has been clicked!");
    }
    else{
        console.log("Invalid");
    }
})