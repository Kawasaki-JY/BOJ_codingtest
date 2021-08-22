selection();
// O(N^2)
function selection() {

  let arrayEx = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  console.log("first arrayEx :", arrayEx);
  for (let i = 0; i < 10; i++) {

    let min = 99; // make first minimum

    for (let j = i; j < 10; j++) {
      if (min > arrayEx[j]) {
        min = arrayEx[j];
        index = j;
      }
    }

    temp = arrayEx[i];
    arrayEx[i] = arrayEx[index];
    arrayEx[index] = temp;

  }
  for (let i = 0; i < 10; i++) {

    console.log("anwer is :", arrayEx[i]);
  }
}