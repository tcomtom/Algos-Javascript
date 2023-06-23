/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//   let runSum = [];
//   let sum = 0;
//   for(let i = 0;i < nums.length;i++){
//       sum = sum + nums[i]; 
//       runSum.push(sum);       
//   }
//   return runSum;
// };

// console.log(runningSum([3,6,9,2]))

var runningSum = function(nums) {
  for(let i = 1;i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums;
};

console.log(runningSum([3,6,9,2]))
