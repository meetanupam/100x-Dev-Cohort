// classes in javascript

const dog = {
  name: "doggie",
  leg: 2,
  speaks: "bhow bhow",
};

const cat = {
  name: "catt",
  leg: 4,
  speaks: "meow meow",
};

function printStr(animal) {
  console.log(
    "animal is " + animal["name"] + " " + "speaks " + animal["speaks"]
  );
}

printStr(dog);
printStr(cat);
