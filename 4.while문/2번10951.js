let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
   
    let inputs = input[i].split(' ');
    console.log(Number(inputs[0]) + Number(inputs[1]));
    
}