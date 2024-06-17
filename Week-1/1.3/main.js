// const dog = {
//   name: "doggie",
//   leg: 2,
//   speaks: "bhow bhow",
// };

// const cat = {
//   name: "catt",
//   leg: 4,
//   speaks: "meow meow",
// };

// function printStr(animal) {
//   console.log(
//     "animal is " + animal["name"] + " " + "speaks " + animal["speaks"]
//   );
// }

// printStr(dog);
// printStr(cat);

// CLASSES //

// every name has name, leg count, speak
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static // not associated with a object, these are associated with the class itself
  speak() {
    console.log(" hi there " + this.speaks);
  }
}

// let dog1 = {
//   name: "dog",
//   legCount: 4,
//   speaks: "bhow bhow",
// };

// let cat1 = {
//   name: "cat",
//   legCount: 2,
//   speaks: "mew",
// };

let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat1 = new Animal("cat", 2, "mew");
dog.speak();
cat1.speak(); // call function on object
// class, object, this is creating an object of class
