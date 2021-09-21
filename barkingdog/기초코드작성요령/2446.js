const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString();

star(input);

function star(num) {
  for (let i = 0; i < num * 2 - 1; i++) {
    
    let stars = "";
    if (i < num) {

      for (let j = 0; j < i; j++) {
        stars += " ";
      }
      for (let k = 0; k < (num - i) * 2 - 1; k++) {
        stars += "*";
      }
      console.log(stars);
    } else {
      for (let j=0; j<2*(num-1)-i; j++) {
        stars += " ";
      }
      for(let j=0; j<(i+1-num)*2+1; j++) {
        stars += "*";
      }

      console.log(stars);
    }

  }
}