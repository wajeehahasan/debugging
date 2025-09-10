// You have numbers 1 to 10, but one number is missing. Use a loop to find the missing one.
let num = [1, 2, 3, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
  if (num.includes(i)) {
    console.log(i, "is present");
  } else {
    console.log(i, "is missing");
  }
}
