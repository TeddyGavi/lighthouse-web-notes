### I went fast
- I am on week 18 work
- things to note about react is the use of useState and how to log inputs from a standard html form
> remember e.prevent default to stop the default html behavior
> remember that you can assign a value to the input tag (of a form) and then we can use that in the set state when there is a onChange event
> this is done by calling a callback and passing the event.target.value to the setState
- Other rules about using hooks, before I get into using useEffect()
> Rule 1, 
  - do not put Hooks inside loops conditions or nested functions
> Rule 2
  - only call hooks inside react components
> Rule 3
  - the effect method that we pass to useEffect must either return undefine dor a function
  - always declare your effect as a multiline function

- Major gotcha here, effects are usually dependent on something! we can pass this as a second argument as an array
``` 
useEffect(() => {
  if(results.length > 0) {
    console.log("Results Set");
  }
}, [results]); // Only re-run the effect if results changes
```

### Pattern for data fetching
  1. The component has no results when React renders it the first time.
  2. The component makes an asynchronous request to the API server.
  3. The data for the component is returned in the response.
  4. The component can now be updated with the data using an action that sets the state.


> Some more gotchas when using useEffect
- If side effects are triggered that require cleanUp, like timer, or a event listener or a socket connection. then we need to deal with that properly

