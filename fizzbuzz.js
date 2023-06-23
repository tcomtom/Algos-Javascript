// for(let i = 1; i <= 100; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz')
//   } else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(i)
//   }
// }
/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function(n) {
//   let result = [];

//   for(let i = 1; i <= n; i++) {
//       if(i % 3 === 0 && i % 5 === 0) {
//           result.push('FizzBuzz')
//       } else if (i % 3 === 0) {
//           result.push('Fizz')
//       } else if (i % 5 === 0) {
//           result.push('Buzz')
//       } else {
//           result.push(i.toString())
//       }
//   }
//   return result;
// };

// console.log(fizzBuzz(15))

// Time complexit = O(n)
// Space complexity = O(1)

var fizzBuzz = function(n) {
    let result = [];

    for(let i = 1; i <= n; i++) {
        console.log(i)
        let currStr = ""

        if (i % 3 === 0) {
            currStr += "Fizz"
        }
        if (i % 5 === 0) {
            currStr += "Buzz"
        }
        if (currStr == "") {
            currStr += i.toString()
        }
        result.push(currStr)
    }
    return result;
  };
  
  console.log(fizzBuzz(15))
  
  // Time complexit = O(n)
  // Space complexity = O(1)