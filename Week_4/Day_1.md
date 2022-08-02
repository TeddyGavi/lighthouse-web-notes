### More on Method overridding, involving the super keyword
- what if we want all extended class to have a different function then the parents class?
> use ```super``` to reference a method in the parent class.
- getter and setter
- can be used to validate data before assigning it
- OR computing a value on the fly instead of simply pulling it out

- setter is used for valididation
- getter is used to compute a value when needed rather than always keeping track of that value
- this relates to the 4 principles of OOP

> notes from my conversation with Maui
 1. Abstraction
 2. Ecapsulation
 3. inheritance 
 4. polymorphism

> abstraction
- anything in our world can be translated into an object
- objects have properties 
- attributes and actions

> encapsulation
- keep evertything inside one class
- get and set follow here
- the get and set methods allow you to specify a particular property that you want to modify
- the set allows you to access that property directly and validate it against certain rules
- the get method restricts access to a certain portion of the code
- getters and setters are always there, without being specifed you have access to all properties 

> inheritance 
- the idea that each class recieves it properties from the parent class or super class
- use the extend keyword to extend the properties of the class into the child
- the super method executes the constructor parent as well as any other methods in the child

> polymorphism
- the idea of reusable code
- desribes situations in which something occurs several times. 
- access objects of different types through the same interface