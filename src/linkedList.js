export class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            // If the list is null/empty, the new node is both the head and tail
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size(){
        let i = 0;
        let currentNode = this.head;
        while(!this.head){
            i++;
            currentNode = currentNode.next;
        }
        return i;
    }

    head(){
        if(this.head){
            const headNode = this.head;
            return headNode;
        } else {
            return null;
        }
    }

    tail(){
        if(this.tail){
            const tailNode = this.tail;
            return tailNode;
        } else {
            return null;
        }
    }

    at(index){
        if (index < 0) return null; // Index should be non-negative
        if(this.head) {
            let currentNode = this.head;
            let i = 0;
            while(i < index){
                i++;
                currentNode = currentNode.next;
            }
            return currentNode ? currentNode : null; // Return the node if found, else null
        }
    }

    pop(){
        if (!this.tail) {
            console.log("No item to pop");
            return null;
        }

        const poppedValue = this.tail.value;

        if (this.head === this.tail) {
            // If there's only one node in the list
            this.head = null;
            this.tail = null;
            return poppedValue;
        }

        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        // Now currentNode is the second-to-last node
        currentNode.next = null;
        this.tail = currentNode;

        return poppedValue;
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(currentNode.value === value){
                return true
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let i = 0;
        while(currentNode){
            if(currentNode.value === value){
                return i;
            }
            currentNode = currentNode.next;
            i++;
        }
        return -1;
    }

    toString(){
        let output = ""
        if(!this.head){
            return null;
        } else {
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.next === null){
                    return output += "null" ;
                } else {
                    output += `( ${currentNode.value} ) -> `;
                    currentNode = currentNode.next
                }
            }
            return output;
        }
    }

    insertAt(value, index){
        if (index < 0) return null;

        const newNode = new Node(value);

        if (index === 0) {
            // Insert at the head
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
              // If the list was empty, update the tail as well
              this.tail = newNode;
            }
            return true;
        }

        let currentNode = this.head;
        let i = 0;

        while (currentNode && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (!currentNode) return false; // Index is out of bounds
        
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    
        if (!newNode.next) {
          // If the new node is inserted at the end, update the tail
          this.tail = newNode;
        }
    
        return true;
      }
      
    // Method to remove a node at a specific index
    removeAt(index) {
        if (index < 0 || !this.head) return null; // Index is invalid or list is empty

        if (index === 0) {
            // Remove the head node
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (!this.head) {
                // If the list becomes empty, update the tail
                this.tail = null;
            }
            return removedValue;
        }

        let currentNode = this.head;
        let i = 0;

        while (currentNode.next && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (!currentNode.next) return null; // Index is out of bounds

        const removedValue = currentNode.next.value;
        currentNode.next = currentNode.next.next;

        if (!currentNode.next) {
            // If the removed node was the tail, update the tail
            this.tail = currentNode;
        }

        return removedValue;
    }
}

// Example usage:
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0);

// list.insertAt(1.5, 2);
// console.log('LinkedList:', list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> null

// list.removeAt(2);
// console.log('LinkedList after removal:', list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// list.removeAt(0);
// console.log('LinkedList after removing head:', list.toString()); // Output: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// list.removeAt(2);
// console.log('LinkedList after removing tail:', list.toString()); // Output: ( 1 ) -> ( 2 ) -> null