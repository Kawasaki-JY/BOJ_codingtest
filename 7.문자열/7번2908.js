const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let num1 = Number(input[0].toString().split("").reverse().join(""));
let num2 = Number(input[1].toString().split("").reverse().join(""));

let answer = num1 < num2 ? num2 : num1;
console.log(answer);