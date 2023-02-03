let text = document.querySelector(".text");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");

let num = 0;

increase.addEventListener('click', ()=>{
    num += 1;
    console.log(num);

    text.innerText = num;
})

decrease.addEventListener('click', ()=>{
    num -= 1;
    console.log(num);

    text.innerText = num;
})

reset.addEventListener('click', () => {
    num = 0;
    console.log(num);

    text.innerText = num;
})
