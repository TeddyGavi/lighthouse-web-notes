class Pizza {


    constructor(crust, size) {
      this.toppings = ["cheese"];
      this.sauce = "";
      this.crust = crust;
      this.size = size;
    }

    addTopping(topping) {
      this.toppings.push(topping);
    }
    addSauce(sauce) {
      this.sauce += `${sauce}, `
    }
/*     setSize(size) {
      if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
      }
    }

    getSize() {
      return this.size;
    } */

    get price() {
      const basePrice = 10;
      const toppingPrice = 2;
      return basePrice + this.toppings.length * toppingPrice;
    }

    set size(size){
      if (size === 's' || size === 'm' || size === 'l'){
        this._size = size;
      } 
    }
}

let pizza1 = new Pizza('thin', 'large');
let pizza2 = new Pizza('thin', 'large');

console.log(pizza1 === pizza2);
console.log(pizza1, pizza2)
console.log(pizza1, pizza2);
pizza1.addTopping("lol")
pizza2.addTopping("peppers");
console.log(pizza1, pizza2)
pizza1.addSauce("pesto")
pizza2.addSauce("BBQ")
console.log(pizza1, pizza2)
pizza1.addSauce("rad sauce")
pizza2.addSauce("purple sauce")
console.log(pizza1, pizza2)

const pizza = new Pizza('stuffed', 'm');
// pizza.setSize('m');
// console.log(pizza.getSize());

console.log(pizza.price);
console.log(pizza.size = 'l');
pizza.addTopping("red hot sauce, extra cheese")
console.log(pizza.price, pizza._size, pizza)




//inheritance technique
//

class Person {
  constructor(name, quirkyFact){
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = `${name}@gmail.com`
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  addHairColor(color) {
    return this.hairColor = color
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort
  }
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// let meMyself = new Student("Matt", "I used to juggle.")
// console.log(meMyself.bio())
// meMyself.addHairColor("brown")
// console.log(meMyself)
// meMyself.enroll("July 11th")
// console.log(meMyself)
// let randomDude = new Person("Bibily", "I can barely read.")
// console.log(randomDude);

// let misterMentor = new Mentor("Mr.Kick-butts", "I am the best at all things")
// console.log(misterMentor.bio());
// misterMentor.goOnShift();
// console.log(misterMentor);