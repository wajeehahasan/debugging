// write a code to find duplicate number

let arr = [1, 4, 6, 7, 3, 6];
let found = false;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) {
      console.log(arr[i], "is a duplicate number");
      found = true;
    }
  }
  if (found == true) {
    break;
  }
}
