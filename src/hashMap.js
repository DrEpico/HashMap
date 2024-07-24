import { LinkedList, Node } from "./linkedList";

//https://www.youtube.com/watch?v=H62Jfv1DJlU
export class HashMap {
    constructor(capacity = 8) {
        this.buckets = new Array(capacity).fill(null).map(() => new LinkedList()); 
        //map(() => new LinkedList() Transforms each null value into an empty linked list.
        this.size = 0;
        this.loadFactor = 0.75;
    }
  
    // Hash function
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value){
        let hashCode = this.hash(key);
        let bucket = this.buckets[hashCode];

        // Check if the key already exists in the bucket
        let currentNode = bucket.head;
        while (currentNode) {
            if (currentNode.value.key === key) {
                currentNode.value.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        
        bucket.append({ key, value });
        this.size++;

        // Resize if load factor is exceeded
        if (this.size / this.buckets.length > this.loadFactor) {
            this.resize();
        }
    }

    get(key){
        let hashCode = this.hash(key);
        let bucket = this.buckets[hashCode];

        let currentNode = bucket.head;
        while (currentNode) {
            if (currentNode.value.key === key) {
                return currentNode.value.value;
            }
            currentNode = currentNode.next;
        }

        return "Not found";
    }

    has(key){
        let hashCode = this.hash(key);
        let bucket = this.buckets[hashCode];

        let currentNode = bucket.head;
        while (currentNode) {
            if (currentNode.value.key === key) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    remove(key) {
        let hashCode = this.hash(key);
        let bucket = this.buckets[hashCode];

        let currentNode = bucket.head;
        let previousNode = null;

        while(currentNode) {
            if(currentNode.value.key === key){
                if(previousNode){
                    previousNode.next = currentNode.next;
                } else {
                    bucket.head = currentNode.next;
                }
                // If the current node is the tail, update the tail reference
                if(currentNode === bucket.tail){
                    bucket.tail = previousNode;
                }
                
                this.size--;
                return currentNode.value.value;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
}