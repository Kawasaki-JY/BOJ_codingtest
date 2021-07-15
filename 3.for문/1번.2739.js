let input = require('fs').readFileSync('dev/stdin').toString();
let a = Number(input[0]);
for(let b=1; b<10; b++){
        console.log(a + " * " + b + " = " + a * b); // ab는 안됨 a*b로해야됨
}