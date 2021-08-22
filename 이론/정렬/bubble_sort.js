selection();
// O(N^2)
function selection() {

  let arrayEx = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  console.log("first arrayEx :", arrayEx);
  for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 9 - i; j++) {
      if (arrayEx[j] > arrayEx[j + 1]) {
        temp = arrayEx[j];
        arrayEx[j] = arrayEx[j + 1];
        arrayEx[j + 1] = temp;
      }
    }

  }
  for (let i = 0; i < 10; i++) {

    console.log("bubble is :", arrayEx[i]);
  }
}