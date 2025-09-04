// let arr = [1, 7, 5, 9, 3, 2, 6, 8, 4];
// // let found = false;
// for (i = 0; i < 9; i++) {
//   for (j = 0; j ; j++) {
//     if (arr[i] > arr[j].length && arr[i] != arr[j]) {
//       console.log("yeah");
//     }
//   }
// }

let arr = [1, 7, 5, 9, 3, 2, 6, 8, 4];

let isLargest = true;
let assumeLarge = 7;
for (i = 0; i < 9; i++) {
  if (assumeLarge < arr[i]) {
    isLargest = false;
  }
}

console.log(isLargest);
// if (isLargest == true) {
//   console.log("largest");
// } else {
//   console.log("not largest");
// }
