/* Each time the value in the array is "food", log "Yummy" */
function alwaysHungry(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "food") {
      console.log("yummy")
    } else {
      console.log("I'm hungry")
    }
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"])

alwaysHungry([4, 1, 5, 7, 2])

/* Return an array containing only the values larger than cutoff */
function highPass(arr, cutoff) {
  let filteredArr = []

  for(let i = 0;i < arr.length; i++) {
    if(arr[i] > 5) {
      filteredArr.push(arr[i])
    }
  }

  return filteredArr
}

let result = highPass([6,8,3,10,-2,5,9], 5)

console.log(result)


/* Given an array of numbers return a count of how many of the numbers are larger than the average */
function betterThanAverage(arr){
  let sum = 0
  // calculate the average
  let count = 0
  // count how many values are greater than the average
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  arr.forEach(element => {
    if(element > sum / arr.length) {
      count++
    }
  });

  return count
}

let resultCount = betterThanAverage([6, 8, 3, 10, -2, 5, 9])

console.log(resultCount)

/* This function will reverse the values of an array and return them */
function reverse(arr) {

  let newArray = []

  for(let i = arr.length-1; i >= 0; i--) {
    newArray.push(arr[i])
  }

  return newArray;
}

let resultArray = reverse(["a", "b", "c", "d", "e"])
console.log(resultArray)

/* This function returns an array of fibonacci numbers up to a given length n */
function fibonacciArray(n) {
  // the [0 , 1] are the starting values of the array to calculate the rest from 
  let fibArr = [0, 1]

  for(let i = 1; i < n-1; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i])
  }

  return fibArr
}

let resultFib = fibonacciArray(10)

console.log(resultFib)

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
function common(arr1, arr2){
  for (let i = 0;i<arr1.length;i++) {
    for (let j = 0;j<arr2.length;j++){
      // console.log(arr1[i], arr2[j])
      if(arr1[i] === arr2[j]){
        return true;
        break;
      }
    }
  }
  return false
}

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'i']
console.log(common(array1, array2)) // Returns false

array3 = ['d', 'e', 'f', 'x']
array4 = ['z', 'y', 'x']
console.log(common(array3, array4)) // Returns true

// Option 2
function common2(arr1, arr2){
  let map = {}
  // convert 1st array into object
  for (let i = 0;i<arr1.length;i++) {
   if(!map[arr1[i]]) {
    const item = arr1[i]
    map[item] = true;
   }
  }
  console.log(map)
  // loop through 2nd array and check it item matches on object
  for(let j = 0;j < arr2.length;j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }

  return false
}

console.log(common2(array1, array2)) // Returns false
console.log(common2(array3, array4)) // Returns true

// O(a + b)
// O(a) Space complexity

// Option 3
function common3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

console.log(common3(array1, array2)) // Returns false
console.log(common3(array3, array4)) // Returns true