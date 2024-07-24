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
        let bucket;
        if (hashCode < 0 || hashCode >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else {
            bucket = this.buckets[hashCode];
        }

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
        let bucket;
        if (hashCode < 0 || hashCode >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else {
            bucket = this.buckets[hashCode];
        }

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
        let bucket;
        if (hashCode < 0 || hashCode >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else {
            bucket = this.buckets[hashCode];
        }

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
        let bucket;
        if (hashCode < 0 || hashCode >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else {
            bucket = this.buckets[hashCode];
        }

        let currentNode = bucket.head;
        let previousNode = null;

        while(currentNode) {
            if(currentNode.value.key === key){
                if(previousNode){
                    //deletes current node by bypassing it
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

    //Returns the number of stored keys in the hash map
    length(){
        return this.size();
    }

    clear(){
        this.buckets = new Array(this.buckets.length).fill(null).map(() => new LinkedList());
        this.size = 0;
    }

    keys(){
        const keysArray = [];
        for (let bucket of this.buckets){
            let currentNode = bucket.head;
            while(currentNode){
                keysArray.push(currentNode.value.key);
                currentNode = currentNode.next;
            }
        }
        return keysArray;
    }

    values(){
        const valuesArray = [];
        for (let bucket of this.buckets){
            let currentNode = bucket.head;
            while(currentNode){
                valuesArray.push(currentNode.value.value);
                currentNode = currentNode.next;
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (let bucket of this.buckets) {
            let currentNode = bucket.head;
            while (currentNode) {
                const nodeArray = [currentNode.value.key, currentNode.value.value];
                entriesArray.push(nodeArray);
                currentNode = currentNode.next;
            }
        }
        return entriesArray;
    }
}