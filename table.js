arr = [13, 15, 7, 2, 34, 2, 1, 3, 4, 12];
for (let i = 1; i <= 10; i++) {
  console.log("Table of", i);
  for (let j = 1; j <= arr[i - 1]; j++) {
    console.log(i, "x", j, "=", i * j);
  }
  console.log("Table", i, "ends");
}
