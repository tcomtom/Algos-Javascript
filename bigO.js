// 1. Just an example of measuring time. 
// Using the JS performace function
const nemo = ['nemo']
const everyone = ['joe','tom','john','yuko','bruce','maria','drew','tim','flask','nimo']
const large = new Array(1000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for(let i = 0;i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log("Found Nemo!")
      break;  // If nemo is at the end, it is worst case scenario. 
    }
  }
  let t1 = performance.now()
  console.log('Call to find nemo took ' + (t1 - t0) + ' milliseconds.')
}

findNemo(large) // O(n) --> Linear Time

// What is the Big O of the below function? 
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// BIG O(3 + 4n) --> Simplified to O(n)

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}
// Drop Constants
// O(1 + n/2 + 100) --> O(n + 1) --> O(n)  

// Log all pairs of array
const boxes = [1,2,3,4,5]

function logAllPairs(arr) {
  let allPairs = []
  for(let i = 0; i < arr.length; i++) {
    let pair = []
    for (let k = 0; k < arr.length; k++) {
      pair.push(arr[i])
      pair.push(arr[k])
    }
    allPairs.push(pair)
  }
  return allPairs
}

console.log(logAllPairs(boxes))

// O(n * n) --> O(n^2) - Quadratic Time
// NOTE:
// Multiple inputs: O(n + n). Nested: O(n^2)


function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

// O(n + n^2) --> O(n^2) *Most dominant.

// Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}

// Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)

