selection();
//적절한 위치란 무엇인가
// 필요할 때만 위치를 바꾼다. 
//O(N*2)
function selection() {

  let arrayEx = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

  for (let i = 0; i < 9; i++) {

    let j = i;
    while (j >= 0 && arrayEx[j] > arrayEx[j + 1]) {

      temp = arrayEx[j];
      arrayEx[j] = arrayEx[j + 1];
      arrayEx[j + 1] = temp;
      j--;

    }
  }
  for (let i = 0; i < 10; i++) {

    console.log("anwer is :", arrayEx[i]);
  }
}