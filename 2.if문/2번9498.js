//90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin');
var a = parseInt(input);
if(a >= 90) {
    return console.log("A");
}else if(a < 90 && a >=80){
    return console.log("B");
}else if(a < 80 && a >=70){
    return console.log("C");
}else if(a < 70 && a >=60){
    return console.log("D");
}else{
    return console.log("F");
}