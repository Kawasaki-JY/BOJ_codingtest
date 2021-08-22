quickSort();

function quickSort(start, end) {

  let data = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];

  if (start >= end) {
    return;
  }

  let key = start;
  let i = start + 1;
  let j = end,
    temp;

  while (i <= j) {
    while (i <= end && data[i] <= data[key]) {
      i++;
    }
    while (j > start && data[j] >= data[key]) {
      j--;
    }

    if (i > j) {
      temp = data[j];
      data[j] = data[key];
      data[key] = temp;
    } else {
      temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }

  quickSort(data, start, j - 1);
  quickSort(data, j + 1, end);

  // function main() {
  //   quickSort(data, 0, number-1);

  // }



}
// for (let i = 0; i < 10; i++) {

//   console.log("anwer is :", arrayEx[i]);
// }
// }