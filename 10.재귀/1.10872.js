const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();


factorial(+input);

function factorial(n) {

  // n , n-1 , n-2...
  let answer = 1;
  for (let i = n; i > 0; i--) {

    answer *= i;

  }
  console.log(answer);

}