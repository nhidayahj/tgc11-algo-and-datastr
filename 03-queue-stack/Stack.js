const LinkedList = require('./LinkedList')
const Node = require('./Node')

class Stack {
    constructor() {
        this.data = new LinkedList()
    }

    push(newData) {
        this.data.insertAt(0, new Node(newData))
    }

    pop() {
        let removed = this.data.getAt(0);
        if (removed != null) {
            
        }
        this.data.deleteAt(0)
        return removed;
    }

    peek() {

    }
}

module.exports = Stack;