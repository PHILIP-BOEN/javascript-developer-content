//onclick = '' i.e onclick="alert('Testing button 1')"

//element.addEventListener("click", function, true/false);

const buttonTWO = document.querySelector('.btn-2');

function alertBtn(){
    alert('Testing button 2');
}

buttonTWO.addEventListener("click", alertBtn);

//MouseOver
const box3 = document.querySelector('.box3');

function changeBgColor(){
    box3.style.background = "#B2DCBB";
}
function removeBgColor(){
    box3.style.background = "#ACBDE6";
    box3.style.transition = "1s";
}

box3.addEventListener("mouseover", changeBgColor);
box3.addEventListener("mouseout", removeBgColor);

