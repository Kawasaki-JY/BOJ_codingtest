let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    let n = line;
    console.log(n.charCodeAt(0));
}).on('close', function() {
    process.exit();
});