// let arr = [2, 4, 6, 8, 9, 10];

// // Q.1 Print all elements in the array

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   // Q.2 write a code to find number 9

//   if (arr[i] == 9) {
//     console.log("mil gya 9");
//   }
// }
// write a code to find duplicate number
let num = [1, 2, 3, 4, 3, 5];
let found = false;
for (let i = 0; i <= num.length; i++) {
  if (found == true) {
    break;
  }
  for (let j = 0; j <= num.length; j++) {
    if (num[i] == num[j] && i != j) {
      console.log("duplicated");
      found = true;
      break;
    }
  }
}
