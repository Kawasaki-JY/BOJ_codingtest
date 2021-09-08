const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
const T = +input.shift(); // case


prezidente();


function prezidente() {

  for (let q = 0; q < T; q++) {
    let a = +input.shift();
    let b = +input.shift();

    const apartment = [];

    for (let i = 0; i <= a; i++) {
      apartment.push([1]);
      for (let j = 1; j < b; j++) {
        if (i === 0) {
          apartment[i].push(j + 1);
          console.log(j, apartment);
        } else {
          apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
        }
      }
    }

    const floor = a;
    const room = b - 1;
    console.log(apartment[floor][room]);
  }
}