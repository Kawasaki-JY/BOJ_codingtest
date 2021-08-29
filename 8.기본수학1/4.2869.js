const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const V = +input[2];

solution();
 
function solution() {
    console.log(Math.ceil((V - B) / (A - B)));
}

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split(' ');

// const A = +input[0];
// const B = +input[1];
// const V = +input[2];


// solution();

// function solution() {
//   let climb = 0;
//   let i = 0;
//   while(climb < V) {
//     i++;
//     climb += A;
//     if(climb >= V) {
//       console.log(i)
//       break;
//     } else {
//         climb -= B;
//     }
//   }
// }  이 방식은 시간초과

// 문제를 이해하고 시간을 줄여야한다.
