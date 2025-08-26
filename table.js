let i;
let j;

for (i = 1; i <= 10; i++) {
  console.log("Table of", i);
  for (j = 1; j <= 10; j++) {
    let z = i * j;

    console.log(i, "x", j, "=", z);
  }
  console.log("Table", i, "ends");
}
