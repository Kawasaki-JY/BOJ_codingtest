let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]); // 5
let array = input[1].split(' ').map(x=> Number(x)); //변수들을 num으로

let max = array[0]; // 최댓값 정의
let min = array[0]; // 최솟값 정의
for(let i = 1; i < count; i++) {
    if(max < array[i]) {
        max = array[i]
    } if(min > array[i]) {
        min = array[i]
    }
}
console.log(`${min} ${max}`);