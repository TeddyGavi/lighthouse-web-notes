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
}

let pizza1 = new Pizza();
let pizza2 = new Pizza();

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
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let meMyself = new Student("Matt", "I used to juggle.")
console.log(meMyself.bio())
meMyself.addHairColor("brown")
console.log(meMyself)
meMyself.enroll("July 11th")
console.log(meMyself)
let randomDude = new Person("Bibily", "I can barely read.")
console.log(randomDude);

let misterMentor = new Mentor("Mr.Kick-butts", "I am the best at all things")
console.log(misterMentor);
misterMentor.goOnShift();
console.log(misterMentor);