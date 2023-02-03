let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let body = document.querySelector('body');

const quotes = [{
    quote: `"Things work out best for those who make the best of how things work out."`,
    person: `John Wooden`,
    body: `${'url(img/img1.jpg) no-repeat center center/ cover'}`,
},
{
    quote: `"Courage is grace under pressure."`,
    person: `Ernest Hemingway`,
    body: `${'url(img/img2.jpg) no-repeat center center/ cover'}`
},
{
    quote: `"If you are not willing to risk the usual, you will have to settle for the ordinary."`,
    person: `Jim Rohn`,
    body: `${'url(img/img3.jpg) no-repeat center center/ cover'}`
},
{
    quote: `"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." `,
    person: `Albert Einstein`,
    body: `${'url(img/img4.jpg) no-repeat center center/ cover'}`
},
{
    quote: `"Sometimes you can't see yourself clearly until you see yourself through the eyes of others."`,
    person: `Ellen DeGeneres`,
    body: `${'url(img/img5.jpg) no-repeat center center/ cover'}`
},
{
    quote: `"All our dreams can come true if we have the courage to pursue them."`,
    person: `Walt Disney`,
    body: `${'url(img/img1.jpg) no-repeat center center/ cover'}`
},
{
    quote: `${quote.innerText}`,
    person: `${person.innerText}`,
    body: `${'url(img/img5.jpg) no-repeat center center/ cover'}`
},];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    body.style.background = quotes[random].body;

    console.log(random);
});

console.log(quotes.length);

