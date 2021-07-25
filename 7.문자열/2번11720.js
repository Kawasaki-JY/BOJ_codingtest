const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let num = Number(input[0]);
let arr = input[1].split('');

let answer = 0;
for(let i =0; i<num; i++){

     answer += Number(arr[i]);

    }
    console.log(answer);
