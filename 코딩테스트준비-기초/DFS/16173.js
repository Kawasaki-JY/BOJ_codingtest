const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const board = arr.map(v => v.split(" ").map(v => +v));
const N = +n;

//1 정사각형 맵 길이 N을 받아서 방문하지않았다는 false를 넣어놓은 맵을 배열로 만든다.

// Array.from({length:a}, ()=> false)
const arrMap = Array.from(Array(N), () => new Array(N).fill(false));
  
//2 queue를 만들고 처음 위치 [0][0]을 넣는다.
//3 방문한곳은 true로 체크해준다.
//4 종착점인 -1에 도달하기전까지 answer는 false로 설정
let q = [];
q.push([0,0]);
arrMap[0][0] = true;
let answer = false;

//5 이동하는 모든위치를 확인할 때까지 도는 큐를 만든다.
//6 현재위치의 점프개수를 jump로 설정

//7 현재위치가 -1이면 결승점이니 answer를 true로 바꿔주고 멈춘다.

//8 만약에 현재 위치x에서 점프해도 맵을 벗어나지않고
//    점프한곳이 방문하지않은 곳일 경우 큐에넣어주고 방문했다고 체크

//9 만약에 현재 위치y에서 점프해도 맵을 벗어나지않고
//   점프한곳이 방문하지않은 곳일 경우 큐에넣어주고 방문했다고 체크

while(q.length > 0) {
  let [y, x] = q.shift();
  let jump  = board[y][x];
  if(jump == -1) {
    answer =true;
    break;
  } else {
    if(y + jump < N && !arrMap[y+jump][x]) {
      q.push([y+jump,x]);
      arrMap[y+jump][x] = true;
    }
    if(x + jump < N && !arrMap[y][x+jump]) {
      q.push([y,x+jump]);
      arrMap[y][x+jump] = true;
    }
  }
}
console.log(answer ? "HaruHaru" : "Hing");


//https://www.acmicpc.net/problem/16173

