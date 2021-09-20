const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
 
const T = parseInt(input.shift());
const numbers = input
.shift()
.split(' ')
.map(num => parseInt(num));
let counter = 0;
 
function primeNumber(n) {
if (n < 2) {
return;
}
 
for (let i = 2; i < n; i++) {
if (n % i === 0) {
return;
}
}
counter++;
}
 
for (let i = 0; i < T; i++) {
primeNumber(numbers[i]);
}
 
console.log(counter);