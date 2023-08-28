// Creating a hash table
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) { // _ means private property in JS
    let hash = 0;
    for(let i = 0;i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %  // method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
      this.data.length
    }
    console.log(hash)
    return hash;
  } // O(1) hash function are very fast.

  set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]) {
      this.data[address] = []
      // this.data[address].push(key, value)
      // console.log(this.data)
    } 
    this.data[address].push([key, value])
    return this.data
  } // O(1)

  get(key){
    let address = this._hash(key)
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined 
  } // O(1) 
  keys(){
    const keysArray = []
    for(let i=0; i < this.data.length; i++){
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const myHashTable = new HashTable(50)
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.set('apples', 54))
console.log(myHashTable.set('oranges', 2))
console.log(myHashTable.keys())
// console.log(myHashTable.get('apples'))


//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {

  for(let i = 0;i<input.length;i++){
    for(let j = i+1;j<input.length;j++){
      if(input[i] === input[j]){
        return input[i]
      }
    }
  }
  return undefined
} // O(n^2)

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))

function firstRecurringCharacter2(input) {

  let map = {}
  for (let i = 0;i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    console.log(map)
  }
  return undefined
} // O(n)

//console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]))