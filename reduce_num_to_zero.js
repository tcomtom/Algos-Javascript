/**
 * @param {number} num
 * @return {number}
 * Given an integer num, return the number of steps to reduce it to zero.
  In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it
 */
var numberOfSteps = function(num) {
    let steps = 0
    while (num > -1) {
      // console.log(num)
      if(num === 0) {
        break;
      }
      else if (num % 2 == 0) {
        num = num / 2
        steps++
      } else if(num % 2 !== 0) {
        num--
        steps++
      }
    }
    return steps
};

console.log(numberOfSteps(123))

// Time complexity: O(logn)
// Space complexity: O(1)

var numberOfSteps2 = function(num) {
  let steps = 0
  while (num > 0) {
    // console.log(num)
    if (num % 2 == 0) {
      num /= 2
    } else  {
      num--
    }
    steps++
  }
  return steps
};

console.log(numberOfSteps2(123))
// Time complexity: O(logn)
// Space complexity: O(1)

// Using bitwise operator
var numberOfSteps3 = function(num) {
  let steps = 0
  while (num > 0) {
    if ((num & 1) == 0) {
      num >>= 1
    } else  {
      num--
    }
    steps++
  }
  return steps
};

console.log(numberOfSteps3(123))
