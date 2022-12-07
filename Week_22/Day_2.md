## Object and classes

- when we create an object we want to think of two things
- state and behavior
- instance variables are scoped to the object at initialization time
- instance variables are named with @
- these variables exist as long as the object exists
- getter and setter methods can be defined by setting the attr\_\*

  > this can be accessor (which is getter and setter), or reader and writer to allow for only getter or a setter

- reducing an array or summing it is easy!

  > array.reduce(:+)

- can take in multiple args with \*args
- setting accessors allows access to the get and set methods by calling self.variable
- best now to use the @variable outside of the instance creation as we want to protect the direct instances of the variables
