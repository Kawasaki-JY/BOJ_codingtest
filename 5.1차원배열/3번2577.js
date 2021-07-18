// 1번 케이스
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let three_string = String(input[0] * input[1] * input[2]);

    for(let i = 0; i<10; i++) {
        
      let count = 0;
        
        for(let j=0; j<three_string.length; j++) {
            
                if(i === Number(three_string[j])) {
                     count++;
            }
        
        } 
        console.log(count);
    }
    
        // 2번 케이스

        let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) { 
   console.log(num.split(i + '').length - 1);    
}
  
