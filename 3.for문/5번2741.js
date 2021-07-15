//  포문의 답을 한 곳에 답아서 한번만 콘솔로그 출력하는게 핵심
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const numberN = Number(line);
    
    let answer = '';

    for (let i = 1; i <= numberN; i++) {
    answer += i + '\n';
    }

    console.log(answer);

    rl.close();
}).on('close', function () {
    process.exit();
});