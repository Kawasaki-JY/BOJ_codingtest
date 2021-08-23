countingSort();


function countingSort() {
  let count = [0, 0, 0, 0, 0];
  let array = [1, 3, 2, 4, 3, 2, 5, 3, 1, 2,
    3, 4, 4, 3, 5, 1, 2, 3, 5, 2,
    3, 1, 4, 3, 5, 1, 2, 1, 1, 1
  ];
  // for (let i = 0; i < 5; i++) {
  //   count[i] = 0;
  // }
  for (let j = 0; j < 30; j++) {
    count[array[j] - 1]++;
    console.log(`${j}번째의 array i : ${array[j]} , count : ${count}`);
  }
  for (let k = 0; k < 5; k++) {
    if (count[k] != 0) {
      for (let l = 0; l < count[k]; l++) {
        console.log("%d",k + 1);
      }
    }
  }
}