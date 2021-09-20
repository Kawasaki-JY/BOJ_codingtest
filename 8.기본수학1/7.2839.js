const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let sugar = Number(fs.readFileSync(filePath).toString()); 

solution();

function solution() {

    let smallBag = 0;
    while (true) {
            if (sugar % 5 == 0) {
                console.log(sugar / 5 + smallBag);
                break;
            } else if (sugar / 5 < 0) {
                console.log(-1);
                break;
            } else {

                sugar -= 3;
                smallBag++;
            }
        }
}