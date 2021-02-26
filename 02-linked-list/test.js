const LinkedList = require('./LinkedList');
const Node = require('./Node');
let numbers = new LinkedList();
numbers.addToBack(new Node(101));
numbers.addToBack(new Node(102));
numbers.addToBack(new Node(103));
numbers.addToBack(new Node(104));

console.log("total count: " , numbers.count())
console.log("It contains: " , numbers.contains(102));
numbers.display()
