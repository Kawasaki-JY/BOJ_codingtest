// #테스트케이스 3개는 해결되는데 틀렸다고 나온다. trim을 알면 간단한문제
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ');
// let shifted = input.shift();
// let poped = input.pop();
// if(shifted == '' || poped == '') {
//     console.log(input.length +1);
// } else if(shifted == '' && poped == ''){
//     console.log(input.length);
// } else {    
//     console.log(input.length +2);
// }
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
 
console.log(input[0] === "" ? 0 : input.length);