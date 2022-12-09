### Imposter syndrome breakout

- important to ask for help
- remember that you are not alone
- set up SMART goals
- set manageable chunks of time and try to stick to goals
- don't be afraid to fail
- use a mentor to maintain accountability

### More oop in ruby

- inheritance and the super keyword works similar to what we already know

- we can pass arguments to the super keyword in the init to allow the current class to inherit from the parent
- remember we need to pass the correct number of arguments
- another way to modularize the code is to use modules
- we can mixin different properties into different classes
- some key things here about inheritance

> - You can only subclass (class inheritance) from one class. You can mix in as many modules (interface inheritance) as you'd like.

> - If there's an "is-a" relationship, class inheritance is usually the correct choice. If there's a "has-a" relationship, interface inheritance is generally a better choice. For example, a dog "is an" animal and it "has an" ability to swim.
> - You cannot instantiate modules. In other words, objects cannot be created from modules.

- Private public and protected methods
- private can only be called from within the class
- public methods are available to anyone who knows the class name
- protected methods allow access between class instances private do not
