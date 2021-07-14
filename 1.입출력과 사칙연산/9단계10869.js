//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(input[0]+input[1]);
console.log(input[0]-input[1]);
console.log(input[0]*input[1]);
console.log(Math.floor(input[0]/input[1]));
console.log(input[0]%input[1]);