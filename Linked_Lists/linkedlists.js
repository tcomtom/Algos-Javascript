// Pointers
// let obj1 = {a: true }
// let obj2 = obj1;
// obj1.a = 'hello'
// delete obj1
// obj2 = 'object 2'

// console.log('1', obj1)
// console.log('2', obj2)

// 10 --> 5 --> 16
// let aLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// Singly Linked List 
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    //const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  printList(){
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    // check params
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }
    const previousIndex = this.traverseIndex(index-1)
    const originalIndex = previousIndex.next
    previousIndex.next = newNode
    newNode.next = originalIndex
    this.length++
    return this.printList()

  }
  traverseIndex(index) {
    //check params
    let currentNode = this.head
    let counter = 0
    while(counter !== index){
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    // check params
    const previousIndex = this.traverseIndex(index-1)
    const originalIndex = previousIndex.next
    previousIndex.next = originalIndex.next
    // console.log(previousIndex)
    // console.log(originalIndex)
    // console.log(nextIndex)
    this.length--
    return this.printList()
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    //const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
  reverse(){
    
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.remove(1)
console.log(myLinkedList.printList())
console.log(myLinkedList)

// Doubly Linked List
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }
  printList(){
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    // check params
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    // the node prior to the index
    const previousIndex = this.traverseIndex(index-1)
    // the index of the node to be shift to next
    const originalIndex = previousIndex.next
    // set the new node to the next node
    previousIndex.next = newNode
    // set the previous new node to the node before it 
    newNode.prev = previousIndex
    // set the next node of the new node to node after it.
    newNode.next = originalIndex
    // set the previous node of the shifted node to the new node.
    originalIndex.prev = newNode
    this.length++
    return this.printList()

  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  traverseIndex(index) {
    //check params
    let currentNode = this.head
    let counter = 0
    while(counter !== index){
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    // check params
    
    const previousIndex = this.traverseIndex(index-1)
    const originalIndex = previousIndex.next
    previousIndex.next = originalIndex.next
    originalIndex.prev = previousIndex
    // console.log(previousIndex)
    // console.log(originalIndex)
    // console.log(nextIndex)
    this.length--
    return this.printList()
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    //const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }
}


const doubleLinkedList = new DoubleLinkedList(20)

doubleLinkedList.append(100)
doubleLinkedList.append(16)
doubleLinkedList.prepend(99)
doubleLinkedList.insert(1, 55)
doubleLinkedList.remove(1)
console.log(doubleLinkedList)
console.log(doubleLinkedList.printList())