let num = [1, 4, 5, 3, 6, 1];
let found = false;
for (let i = 0; i < 6; i++) {
  if (found == true) {
    break;
  }
  for (let j = 0; j < 6; j++) {
    if (num[i] == num[j] && i != j) {
      console.log("duplicate is 1");
      found = true;
      break;
    }
  }
}
