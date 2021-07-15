const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];
if(x > 0 && y > 0) { //1사분면 
    console.log(1);
}else if(x < 0 && y > 0) { //2사분면
    console.log(2);
}else if(x < 0 && y < 0) { //3사분면
    console.log(3);
}else if(x > 0 && y < 0) { //4사분면
    console.log(4);
}
    process.exit();
});