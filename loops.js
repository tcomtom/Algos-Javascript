/* Prins odds 1-20 */
for(let i = 1; i <= 20; i++) {
  if(i % 2 !== 0) {
    console.log(i)
  }
}

/* Prints all values that are evenly divisible by 3 from 100 down to 0. */
for(let i = 100; i >= 0; i--) {
  if(i % 3 === 0) {
    console.log(i)
  }
}

/* PRint the values in sequence */
let arr = [4, 2.5, 1, -0.5, -2, 3.5]

for(let i = 0;i < arr.length; i++) {
  console.log(arr[i])
}

/* Add of the values from 1-100 and log the sum */
let sum = 0

for(let i = 1;i <= 100; i++) {
  console.log(i)
  sum += i
}

console.log(sum)

/* Multiply all of the values from 1-12 and log the result */
let product = 1

for(let i = 1; i <= 12; i++) {
  product *= i
}

console.log(product)