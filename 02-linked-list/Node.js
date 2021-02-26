class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getNext() {
        return this.next;
    }

    setNext(nextNode) {
        this.next = nextNode;
    }
    getData() {
        return this.next;
    }

    setData(newData) {
        this.data = newData;
    }

    
}

module.exports = Node;