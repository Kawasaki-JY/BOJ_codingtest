const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];


console.log("ABC is",A, B, C);
solution(A,B,C);

function solution(A,B,C) {

  let answer = 1;

  for (let i = 1; i < 2100000001; i++) {


    if ((A + B * i) - C * i < 0) { // 이득 날때
      break;
    }
    
    if(B *i- C * i>= 0) {
      answer = -1;
      break;
    }
    answer++;

  }
  console.log(answer);
}