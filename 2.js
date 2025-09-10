// find the largest element in the array
// let arr = [6, 5, 7, 9, 8];

// let largest = true;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] > arr[j] && i != j) {
//       largest = false;
//       break;
//     }
//   }

//   if (largest == false) {
//     console.log(arr[i], "is the largest");
//     break;
//   }
// }
let arr = [6, 5, 3, 8, 9];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
let small = largest;
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < largest) {
    small = arr[j];
  }
}
console.log(small, "is the second smaller");
