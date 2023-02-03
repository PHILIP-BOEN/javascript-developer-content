/*
forEach()
filter()
map()
sort()
reduce()

*/

let companies = [
    {name: "Equity", category: "Banking", start: 2004, end: 2018},
    {name: "Safaricom", category: "Tech", start: 2001, end: 2020},
    {name: "Mombasa Cement", category: "Construction", start: 2008, end: 2012},
    {name: "KPLC", category: "Electricity", start: 1985, end: 2020,},
    {name: "Monsor Clothings", category: "Retail", start: 1971, end: 1977,},
];

let ages = [30, 24, 16, 44, 17, 20, 9];

//forEach method calls a callback function for each element in an array.

//array.forEach(function (currentValue, index, arr), thisValue)

companies.forEach(function(element){
    console.log(element);
    console.log(element.name);
});

//filter method creates a new array filled with elements that pass a test provided by a function.

//array.filter(function (currentValue, index, arr), thisValue)

/*
//example using for loop
let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

//example using filter
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
})

console.log(canDrink);
*/

//using filter arrow function

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

let tech = companies.filter(function(company){
    if(company.category === 'Tech'){
        return true;
    }
});

console.log(tech);

retail = companies.filter(company => company.category === 'Retail');

console.log(retail);

let founded = companies.filter(company => company.start >= 2000 && company.start <= 2010);

console.log(founded);

let lastedTenYears = companies.filter(company => company.end - company.start >= 10);

console.log(lastedTenYears);

//Map() method creates a new array from calling a function for every array element

const companyNames = companies.map(function(company){
    return company.name;
});

console.log(companyNames);

let testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

testMap = companies.map(company => `[${company.name}, ${company.category}], [${company.start} - ${company.end}]`);
console.log(testMap);

let ageSqrt = ages.map(age => Math.floor(Math.sqrt(age)));
console.log(ageSqrt);
let ageTwice = ages.map(age => age * 2);
console.log(ageTwice);

let ageMap = ages
    .map(age => Math.floor(Math.sqrt(age)))
    .map(age => age * 2);

console.log(ageMap);

let newArr = ["Philip", "Boen"];
let newResult = newArr.map(newNames => newNames).join(' ');
console.log(newResult);

//Sort() method sorts the elements as strings in alphabetical and ascending order, it overwrites the original array.

let sortCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});

console.log(sortCompanies);

sortCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);
sortCompanies = companies.sort((c1, c2) => c2.start - c1.start);

console.log(sortCompanies);

let sortAges = ages.sort(function(a, b){
    if(a > b){
        return 1;
    }
    else
    {
        return -1;
    }
});
console.log(sortAges);

//Ascending Order
sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
//Descending Order
sortAges = ages.sort((a, b) => b - a);
console.log(sortAges);


//Reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
/*
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum+= ages[i];
}

console.log(ageSum);
*/

let ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);

console.log(ageSum);

ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

let totalYear = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0);
console.log(totalYear);

totalYear = companies.reduce((total, company) => (total + company.end - company.start), 0);
console.log(totalYear);

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((total, age) => (total + age), 0);

console.log(combined);