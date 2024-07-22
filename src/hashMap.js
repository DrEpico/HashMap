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
        if(bucket.head){
            bucket.append({ key, value });
        }

        this.size++;
        // Resize if load factor is exceeded
        if (this.size / this.buckets.length > this.loadFactor) {
            this.resize();
        }
    }
}