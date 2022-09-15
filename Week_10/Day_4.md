### Lecture Test review
- I asked about recursion and when and how it would be implemented
- recursion involves figuring out the base case, or also the stopping condition and going from there back into the function
- some things are easier with recursion like dealing with nested arrays but certain things I believe its best not to put everything into the call stack and have it computed then pulled back out
- Its like piling dishes up, in order to get the first one int he pile you have to take all the other dishes off first

### Algs
- this is a big topic and one that is definitely confusing me I am slowly getting the hang of it but I want to practice more 
- I need to find a good resource that will allow me to test running time, just like the compass test did but with a lot more examples
- Log, versus linear, quadratic all but linear are good.
- A binary search on ordered data takes at most Log2 (n) + 1
- linear time scales with the data set
- quadratic comes from nesting loops 

#### examine algs 
- running time
 > this is based on the number of elementary operations
- Big O notation is about how the als scales as a whole relative to its data
> we are expected to know this notation and be able to analyze problems with it
  - We only care about arbitrarily large input. 
  - We drop constant terms. 
  - We drop the non-dominant terms. 

> JavaScript is a high level language. It has a Virtual Machine (VM) that sometimes optimizes JS code to run fewer operations. At other times, it may inefficiently run even more operations than we expected. So as long as we're programming in a high level language like JavaScript, it's going to be hard to get an accurate number for these constant values. Therefore it's easier to just talk about how the complexity grows, not the absolute running time.

- we have :
  - constant O(1)
    - no matter what the input is, the execution takes a constant time 
    - an example would be accessing an element of an array
  - linear O(n)
    - the number of operations grow relative to the input.
      > ie summing every number in an array
  - quadratic O(n^2)
    - if the number of operations that an algorithm has to perform is directly proportional to the square of the size of the input then it runs in quadratic time
      > ie nested loops!
  - Log O(log n)
    - doubling the size of the input only increases the runtime by 1!
      > ie binary search!


![complexity](https://imgur.com/WmFTz0a)



When we describe an algorithm using Big O notation, we:

  - Only care about arbitrarily large input.
  - Drop the Non-Dominant Terms.
  - Drop Constants.

Some of the more common Big O running times are:

  - Logarithmic O(log n)
  - Quadratic O(n^2)
  - Linear O(n)
  - Constant O(1)
