const Node = require('./Node')

class LinkList {
    constructor() {
        this.head = null;
    }

    count() {
        let current = this.head;
        let count = 0;
        if (current != null ) {
            count+=1;
            current = current.getNext()
        }
        return count;

    }

// add to back of list 
    addToBack(newNode) {
        // case 1:
        // if there is nothing in the listS
        if (this.head == null) {
            this.head = newNode;
        } else {
            //case 2: if there is already something in the list 
            let current = this.head;
            while(current.getNext() != null) {
                current = current.getNext()
            }
            current.setNext(newNode);
        }
    }

    insertAt(index, newNode) {
        if(index == 0) {
            // means we are inserting 
            
            // store temp reference
            let oldHead = this.head;
            this.head = newNode;
            this.head.setNext(oldHead);
        } else {
            let current = this.head;
            for (let i = 0; i < index -1; i++) {
                current = current.setNext()
            }
        }

    }

    deleteAt(index){
        if (index == 0) {
            let newNext = this.head.getNext()
            this.head = newNext
        } else {
            let current = this.head;
            for (let i=0; i<index-1; i++) {
                current = current.getNext()
            }
            current.setNext(current.getNext().getNext)
        }
    }

    getAt(index) {
        let current = this.head;
        for (let i=0; i<index; i++) {
            current=current.getNext()
        }
        return current.getData()
    }

    display() {
        let current = this.head;
        while (current != null) {
            console.log(current.getData());
            current = current.getNext();
        }
    }
}


module.exports = LinkList;