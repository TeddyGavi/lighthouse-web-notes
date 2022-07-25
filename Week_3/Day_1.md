### objects and the ```this``` keyword
- we are given limited information about how ```this``` functions it is important to realize that is isn't critical at this point
- the basic idea is that when a function is assigned as a value to a objects key, we can refer to other key/values in the object by using the ```this``` keyword inside the function body
- i.e
```
 const test = {
    name: "Billy",
    age: 42
    nameAndAge: function() {
      return this.name + ' ' + this.age;
    }
} 
console.log("Hello, " + test.nameAndAge());

```

- what is lexical scope?
 > ability of functions to access the variables in the parent scope

 ### Recursion
- a function that calls itself is the basic definition 
- made up of a recursive case, and a base case
- the base case if true, the function will not call itself
- the recursive case if true the function will continue to call itself
- the input must gradually resolve toward the base case