import { LinkedList, Node } from "./linkedList";

export class HashMap {
    constructor(initialCapacity = 8) {
        this.buckets = new Array(initialCapacity).fill(null).map(() => new LinkedList()); 
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

    }
}