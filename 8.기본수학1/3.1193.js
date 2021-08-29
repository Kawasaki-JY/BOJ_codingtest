const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let X = fs.readFileSync(filePath).toString();

let counter = 0;
 
while (X > 0) {
counter++; //1 2 3 4 5
X = X - counter; // 13 11 8 4 -1
}
 
if (counter % 2 === 0) {
console.log(`${counter + X}/${1 + -X}`);
} else {
console.log(`${1 + -X}/${counter + X}`);
}