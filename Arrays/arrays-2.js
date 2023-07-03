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
        result.push(i)
        result.push(j)
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