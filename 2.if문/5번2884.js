let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let num1 = Number(input[0]);  // H
let num2 = Number(input[1]);  // M

num2 -= 45;

if(num2 < 0) {
    num2 += 60;
    num1--;

    if(num1 === -1) {
        num1 = 23;
    }
}

console.log(num1 + ' ' + num2);