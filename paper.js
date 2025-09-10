// Write a JavaScript program using a loop to print all the numbers from 1 to 100.

// If a number is divisible by 3, print "Fizz" instead of the number.

// If it’s divisible by 5, print "Buzz".

// If divisible by both 3 and 5, print "FizzBuzz".

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
