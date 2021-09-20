const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(" ");
console.log(+input[0] + +input[1])
// solution();

// function solution() {
//     let [A, B] = input.split(" ");
//     console.log(Number(A)+Number(B));
// }