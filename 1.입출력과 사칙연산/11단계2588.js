const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = Number(input[0]);
const B = Number(input[1]);

const Bnumbers3 = Math.floor(String(B).substr(2, 1));
const Bnumbers4 = Math.floor(String(B).substr(1, 1));
const Bnumbers5 = Math.floor(String(B).substr(0, 1));

console.log(A * Bnumbers3 );
console.log(A * Bnumbers4 );
console.log(A * Bnumbers5 );
console.log(A * B);