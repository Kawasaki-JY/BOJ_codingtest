const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const numbers = input.map((item) => +item);


solution(numbers);

function solution(numbers) {

  const number = numbers[0] * numbers[1] * numbers[2]
  const strNum = String(number)
  const answer = Array(10).fill(0)

  for (let i in strNum) {

    let A = +strNum[i];
    answer[A]++;

  }

  for (let j in answer) {
    console.log(answer[j]);
  }


}