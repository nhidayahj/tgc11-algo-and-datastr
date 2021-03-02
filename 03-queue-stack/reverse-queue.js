const Stack = require('./Stack')
const Queue = require('./Queue')

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

let stack = new stack() 

while( queue.peek() != null) {
    let item = queue.dequeue()
    console.log(item)
}

while (stack.peek()  != null) {
    let item = stack.pop()
    console.log(item)
}