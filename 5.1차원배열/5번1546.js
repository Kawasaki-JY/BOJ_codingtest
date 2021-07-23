let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0]);
let score = input[1].split(" ");
let max_score = Math.max(...score); //최고점
let sum_score = 0; // 나눠서 합친애들담을곳
for(let i=0; i<num;i++){
        
            sum_score += Number(score[i]/max_score);
    }
    console.log(sum_score);
    let answer = sum_score/num; //다시나눔
    console.log(answer*100);