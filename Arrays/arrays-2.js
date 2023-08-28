// Creat a function that reverses a string:
// 'Hi my name is Tom' should be:
// moT si eman ym iH'

function reverseString(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Something is wrong'
  }
  let newString = ''
  str = str.split('')

  for(let i = str.length-1;i>=0;i--){
    newString = newString + str[i]
  }
  return newString
}

console.log(reverseString('Hi my name is Tom'))
// console.log(reverseString(''))

function reverseString2(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Something is wrong'
  }

  const backwards = []
  const totalItems = str.length - 1
  for(let i = totalItems;i>=0;i--){
    backwards.push(str[i])
  }
  return backwards.join('')
}

console.log(reverseString2('Hi my name is Tom'))

function reverseString3(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Something is wrong'
  }
  return str.split('').reverse().join('')
}

console.log(reverseString3('Hi my name is Tom'))

const reverse4 = str => str.split('').reverse().join('')

console.log(reverse4('Hi my name is Tom'))

const reverse5 = str => [...str].reverse().join('')

console.log(reverse5('Hi my name is Tom'))


function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
    if(array2Item === undefined || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }     
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);

// Result should be:
// [0,3,4,4,6,30,31]
// Both passed in arrays are sorted.
console.log(mergeSortedArrays([0,3,4], [4,6,30,31]))
console.log(mergeSortedArrays([4,6,30], [0,3,4,31]))

/*
TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
function twoSum(nums, target) {
  let result = []
  let match = false

  for(let i = 0;i < nums.length;i++){
    // check first iteration
    for(let j = 1;j < nums.length;j++){
      if(nums[i] + nums[j] === target && i !== j){
        result.push(i, j)
        match = true;
        break;
      }
    }
    if(match) {
      break;
    }
  }
  return result
};


console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))
console.log(twoSum([2,11,7,33],9))
console.log(twoSum([2,5,5,11],10))

// 53. Maximum Subarray
/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

// 88. Merge Sorted Array
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside 
the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
denote the elements that should be merged, and the last n elements are set to 0 and should be 
ignored. nums2 has a length of n.
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/


/**
 * @param {number[]} nums1
 * @param {number} m can be 0 or empty
 * @param {number[]} nums2
 * @param {number} n can be 0 or emtpy
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Fist validate m and n
    let totalLength = m + n
    for (let i = 0;i<totalLength;i++){
      if(!m) {
        nums1 = nums2
        break;
      }
      if (!n) {
        nums1 = nums1
        break;
      }
      for(let j = 0;j<nums2.length;j++) {
        if(nums1[i] < nums2[j]) {
          nums1[i] = nums1[i]
          console.log(i, j)
          break;
        }
        if(nums1[i] === nums2[j]) {
          nums1.splice(i+1, 0, nums2[j])
          break;
        }
      }
    }
    
    console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([0], 0, [1], 1)
merge([1], 1, [], 0)


