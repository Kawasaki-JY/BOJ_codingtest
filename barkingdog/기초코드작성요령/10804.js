const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(`\n`);


for(let i in  input){
  let a = input[i][0];
  let b = input[i][1];
  console.log("a",a);
  console.log("b",b);
  console.log("input" ,input[i]);
}
console.log(input);

card();

function card() {

}