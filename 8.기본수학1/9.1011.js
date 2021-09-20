const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let testCase = input[0];

solution();

function solution() {
  for (let i = 1; i <= testCase; i++) {

    let [A, B] = input[i].split(" ");
    let distance = B - A;

    let rootD = Math.sqrt(distance);

    if (rootD == Math.floor(rootD)) {

      console.log(rootD + (rootD - 1));

    } else {
      console.log(Math.floor(rootD * 2));
    }



  }
}