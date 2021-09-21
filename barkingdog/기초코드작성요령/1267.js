const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("\n");

let call = input.shift();
let calls = input[0].split(" ").map(a => Number(a));


callBill(calls);

function callBill(B) {

  let m = 0;
  let y = 0;

  for (let i = 0; i < B.length; i++) {
    y += B[i] % 30 === 0 ? (B[i] / 30 + 1) * 10 : Math.ceil(B[i] / 30) * 10;
    m += B[i] % 60 === 0 ? (B[i] / 60 + 1) * 15 : Math.ceil(B[i] / 60) * 15;
  }

  if (m === y) console.log("Y M " + m);
  else if (m > y) console.log("Y " + y);
  else console.log("M " + m);

}