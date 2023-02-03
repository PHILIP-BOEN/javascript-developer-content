const reveal = document.querySelector('.reveal');
const hidden = document.querySelector('.hidden');
const less = document.querySelector('.less');


function revealContent(){
    if(hidden.classList.contains('reveal2')){
        hidden.classList.remove('reveal2');
    }
    else{
        hidden.classList.add('reveal2');
        reveal.style.display = "none";
    }
}

reveal.addEventListener("click", revealContent);

function hideContent(){
    if (hidden.classList.contains('reveal2')) {
        hidden.classList.remove('reveal2');
        reveal.style.display = "inline";
    }
    else {
        less.style.display = "none";
    }
}
less.addEventListener("click", hideContent);

//For the other Example
const reveal3 = document.querySelector('.reveal3');
const hidden3 = document.querySelector('.hidden3');

function revealContent3() {
    if (hidden3.getAttribute('style') == "display: inline;") {
        hidden3.removeAttribute('style', 'display: inline;')
        reveal3.innerText = "Show More";
        hidden3.setAttribute('style', 'display: none;')
    }
    else {
        hidden3.removeAttribute('style', 'display: none;')
        reveal3.innerText = "Show Less";
        hidden3.setAttribute('style', 'display: inline;')
    }
}

reveal3.addEventListener("click", revealContent3);