### Lecture from Bryan
- review of the DOM
- three parts
- document, window, navigator objects
- navigator is read only
- document and window can be modified 
- the DOM is akin to a tree, created from the browsers reading the html and at each parent element a node is created all the way down to the exact content in the last element if there is one
> parent > child > grandchild >  content

### jQuery
- little introduction
- bubbling and event propagation
- as soon as event is created a capture phase is initiated, this moves all the way down to the event the listener was created on
- from this point on the even bubbles up from that point all the way to the root node
- this is not necessarily the best depending on the application, 
- we can use stopPropagation to stop this bubbling
- we can also use stopImmediatePropagation which will stop any adjacent events on the same element from propagating
- 