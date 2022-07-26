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

### Libraries versus Packages
- Libraries are a collection of pre written code
- packages are self contained code libraries that we can install and use in our projects
- modules are JS code that is a separate file that can be required by other js programs
- node_modules should never be commited
- package.json should be commited to the repo

### Unit testing
- what is it?
> breaking up code into smaller units and testing individual functions and in an isolated environment
- we dont have to perform manual test over and over

### Integration testing
- testing how parts of a system work together

### Functional testing
- this is AKA E2E testing or browser testing
- testing of complete functionality of some application

### TDD is test-driven development
- five step process when writing tests

    1. What are the inputs to our function and what is the output (behavior) we want from calling the function?
    2. Decide how calling the function from code works
    3. Choose the smallest possible piece of behavior for some inputs that you can think of
    4. Write a test which uses those inputs to call the function, and verify the behavior
    5. Implement enough code to make the test pass 
- reapet step 3-5 working one tiny step ahead
- [codeutopia source](https://codeutopia.net/blog/2016/10/10/5-step-method-to-make-test-driven-development-and-unit-testing-easy/)