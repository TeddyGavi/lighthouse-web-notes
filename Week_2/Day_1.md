### Objects

```
const myObject = { key: value,} 
```

- Objects consist of key values pairs
- when using bracket notation the key must be quoted, as the key is always a string
- not needed with dot notation
- Object.keys(...) returns an array of keys
- need to use a ```for...in()``` loop to iterate over an object
- sometimes we need to use ```hasOwnProperty()``` if an object has a property that it inheirts from its prototype chain
- 