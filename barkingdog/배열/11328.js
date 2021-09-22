const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("\n");

let num = +input.shift();
strfry();

function strfry() {
  for (let i = 0; i < num; i++) {

    let arr = input[i].split(" ");
    let a = arr[0];
    let b = arr[1].split("").reverse().join("");
    if (a === b) {
      console.log("Possible");
    } else {
      console.log("Impossible");
    }
  }
}