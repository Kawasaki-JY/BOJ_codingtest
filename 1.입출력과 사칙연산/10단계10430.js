const readline = require('readline');
    
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  input = line.split(' ');

  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  console.log((num1 + num2) % num3);
  console.log(((num1 % num3) + (num2 % num3)) % num3);
  console.log((num1 * num2) % num3);
  console.log(((num1 % num3) * (num2 % num3)) % num3);

  rl.close();
}).on("close", function() {
  process.exit();
});