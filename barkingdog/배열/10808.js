const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("");

alphabet(input);

function alphabet(A) {
  let arr = Array(26).fill(0);

  for (let i = 0; i < A.length; i++) {

    let letter = A[i].charCodeAt() - 97;

    arr[letter]++;


  }
  console.log(arr.join(" "));
}