const Node = require('./Node')

class LinkList {
    constructor() {
        this.head = null;
    }

    count() {
        let current = this.head;
        let count = 0;
        while (current != null ) {
            count+=1;
            current = current.getNext()
        }
        return count;
    }

    contains(data){
        let current = this.head;
        while(current != null) {
            if(current.getData() == data) {
                return true;
            } 
            current = current.getNext()
        }
        return false;
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
            
        } else {
            let current = this.head;
            for (let i=0; i<index-1; i++) {
                current = current.getNext()
            }
            current.setNext(current.getNext().getNext())
        }
    }

    getAt(index) {
        let current = this.head;
        for (let i=0; i<index; i++) {
            current=current.getNext()
        }
        if (current != null) {
            return current.getData()
        } else {
            return null;
        }
    }

     insertSorted(number) {
        let newNode = new Node(number);
        if (this.head == null) {
            this.head = newNode;
        } else {

            let indexToInsertAt = 0;
            // if the list is not empty
            let prev = null;
            let current = this.head;
            while (current != null) {

                if (number < current.getData())
                {
                    // found the place to insert at
                    if (prev != null) {
                        prev.setNext(newNode);
                        newNode.setNext(current);
                    } else {
                        this.head = newNode;
                        newNode.setNext(current);
                    }
                    
                    return;
                }

                prev = current;
                current = current.getNext(); 
            }

            // if we reach the end of the loop,
            // means the new node is supposed to be at the aback
            prev.setNext(newNode);

        }

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