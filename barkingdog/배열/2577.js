const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("\n");

let sum = (input[0] * input[1] * input[2]).toString().split("");
abc();

function abc() {
  let arr = Array(10).fill(0);
  for (let i in sum) {
    arr[sum[i]]++;
  }
  for (let j in arr) {
    console.log(arr[j]);
  }
}