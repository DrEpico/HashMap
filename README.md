<h1>HashMap practice project</h1>
https://www.theodinproject.com/lessons/javascript-hashmap
<h2>Limitation</h2>
Before we get started, we need to lay down some ground rules. JavaScript’s dynamic nature of array allows us to insert and retrieve indexes that are outside our array size range. Example: if we create an array of size 16 to be our buckets size, nothing stopping us from storing items at index 500. This defeats the purpose we are trying to demonstrate, so we need to put some self restriction to work around this.

Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:
```javascript 
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
```
