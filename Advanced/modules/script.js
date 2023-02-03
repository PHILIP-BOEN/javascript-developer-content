import currency from './module.js';
import { fullname, hobby } from './otherInfo.js';
import { sum, generateID, large as greater_than } from './otherInfo.js';

let format = currency('en-KE', 'KSH', 5000);
console.log(format);

console.log(`${fullname} loves ${hobby}`);

sum(greater_than);

console.log(generateID());
