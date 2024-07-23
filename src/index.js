import { LinkedList, Node } from "./linkedList";
import { HashMap } from "./hashMap"

const hashmap = new HashMap();

console.log(hashmap.hash("Yorkshire"));
console.log(hashmap.hash("Yorkshire"));
console.log(hashmap.hash("Center"));
console.log(hashmap.hash("center"));
console.log(hashmap.hash("CENTER"));

hashmap.set("Joe24235", "@mogus");
console.log(hashmap.get("Joe24235"));


//if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

// class Node {
//     constructor(key, value, next = null) {
//         this.key = key;
//         this.value = value;
//         this.next = next;
//     }
// }

//I could probably just reuse the linked list I made in https://github.com/DrEpico/LinkedList/blob/main/src/index.js on a separate script file 
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
  
    // Insert a new node or update an existing node
    // insert(key, value) {
    //     let node = this.head;
    //     while (node !== null) {
    //         if (node.key === key) {
    //             node.value = value; // Update existing key
    //             return;
    //         }
    //         node = node.next;
    //     }
    //     const newNode = new Node(key, value, this.head);
    //     this.head = newNode; // Insert new node at the head
    // }
  
    // // Find a node by key
    // find(key) {
    //     let node = this.head;
    //     while (node !== null) {
    //         if (node.key === key) {
    //             return node.value;
    //         }
    //         node = node.next;
    //     }
    //     return null;
    // }
  
    // // Check if a key exists
    // has(key) {
    //     let node = this.head;
    //     while (node !== null) {
    //         if (node.key === key) {
    //             return true;
    //         }
    //         node = node.next;
    //     }
    //     return false;
    // }
  
    // // Remove a node by key
    // remove(key) {
    //     let node = this.head;
    //     let prev = null;
    //     while (node !== null) {
    //         if (node.key === key) {
    //             if (prev === null) {
    //                 this.head = node.next;
    //             } else {
    //                 prev.next = node.next;
    //             }
    //             return true;
    //         }
    //         prev = node;
    //         node = node.next;
    //     }
    //     return false;
    // }
// }

