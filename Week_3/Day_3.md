### Object orientated programming
- a paradigm shift that focus on modularity 
- Js has multiple paradigms functional versus OOP
- JS is not strictly one way

### Object review 
- variables 
 
```
const dogSound = "woof";
const dogBreed = "husky";    
```
- functions 
 ```
 function speak() {
  console.log(`${dogBreed} says ${dogSound}`);
}

```

- objects
```
const dog = {
  sound: "bark",
  dogBreed: "husky,
  speak: function() {
    console.log(`${this.DogBreed} says ${this.sound}`)
  }
}
```

- an object has a bundle of information know as a state
- when a propertie's value is function, this is called a method
- a object has state and behaviour
- in this way we can organize an a state and logic into one single bundle

### Classes
- in JS mimic the behaviour of class based OOP now, it allows things that weren't posible before to become possible, its a different syntax and it doesn't add any new features
- classes are like a blueprint of the house,and the house is the object
- they are a guide, and we can use them to create new instances of objects
- AKA templates that describe what the object will be

- constructor key word allows us to define the properties of the object
- we can add functions in regular syntax and call them just like working with objects that we are used to
- using the new keyword alllows us to assign ab objects class to a variable 


### Inheritance
- build a new class on an existing class
- this is used is two classes will share the same properties, including functions
- using the keyword ```extends``` we can give inheritance to a subclass
