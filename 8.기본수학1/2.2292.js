const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

honey()


function honey() {

  let N = Number(input);

  let i = 1;
  let sum = 1;

  while (sum < N) {
    sum += 6 * i;
    i++;
  }

  console.log(i);

}