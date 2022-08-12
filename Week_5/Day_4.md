### Lecture about Promises

- We now have to think about how errors are handled
- ```try...catch``` can be used for simple errors
- important things to consider are:
  - if the one part of the program fails do we want the whole operation to fail?
  - do we want each function to be dependent or independent of each other?

- promises are one wat to help deal with errors, they contain 3 states

- pending
- resolved
- rejected

- you can use the ```.then()``` method and chain promises together
- you can also use the ```promise.all()```
 - which takes in an array of promises and then returns a resolve at the end. 