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