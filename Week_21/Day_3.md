# CLASS Base Components

- we already went over these concpets

- Never modify state directly
- state updates are async
  - need to use setState(prev => ...prev, new)
- Lifecycle
  - lifecycles give us a reference point, so we know which components are mounted or unmounted from the DOM

This is specially speaking to class components

- Lifecycles are:
- mount
- update
- unmout

Mount

- happens once when we create a component instance
- constructor, render and component did mount

Update

- a component that is mounted can be updated
- we can update by passing props, or we can update internal state
- each time a component is updated React updates the lifecycle
- render and component did update

Unmount

- only happens once
- component will unmount
