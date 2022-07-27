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