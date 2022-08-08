### Asynchronous control flow
- What is it!
- when a unit of work is run seperately from the main thread of the program and notifies the program of its completion


### review of higher order functions and callbacks
- callbacks are when a function is passed into another function as an argument
- higher order functions are anything that takes as a function as a parameter

### setTimeout
- in its simplified form it can be said to take a callback and a delay
- something is set to happened after a certain delay (in ms) has elapsed 

### Sync v. Async
- sync is prioritized over over aSync
- essentially Async sends a call out to a web Api which waits until the timer is done and sends the callback to the call stack cue
- when the callstack cue is empty it sends the callback into the call stack to be executed
- can be used with Nodejs filesystem