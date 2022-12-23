const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const [w, h] = n.split(' ').map(v => +v);
const bang = arr.map(v => v.split(""));
let answer = 0;

  
  // 타일을 하나씩 확인
  //  가로 확인 후 세로 확인
  
  for(let i = 0; i < w; i++) {
    let checkedBang = true; 
      for(let j = 0; j < h; j++) {
        if(checkedBang == true && bang[i][j] == '-'){
          answer++;
          checkedBang = false;
      } else if(bang[i][j] == '|'){
        checkedBang = true;
      }
    }
  }

  for(let i = 0; i < h; i++) {
    let checkedBang = true; 
      for(let j = 0; j < w; j++) {
        if(checkedBang == true && bang[j][i] == '|'){
          answer++;
          checkedBang = false;
      } else if(bang[j][i] == '-'){
        checkedBang = true;
      }
    }
  }
  console.log(answer);
  //https://www.acmicpc.net/problem/1388
  

