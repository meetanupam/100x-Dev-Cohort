// Arrays & Objects
// const personArray = ["hari", "anu", "am"];
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// const prAge = [2, 4, 5, 23, 34, 33, 36];
// numberOfAge = prAge.length;

// for (let i = 0; i < numberOfAge; i++) {
//   if (prAge[i] % 2 == 0) {
//     console.log(prAge[i]);
//   }
// }

// Print biggest number in an array

// Objects

const info = {
  name: "anupam",
  age: 22,
  address: " ",
};

// Array of objects

const moreInfo = [
  {
    firstname: "raman",
    age: 23,
    gender: "male",
  },
  {
    firstname: "lal",
    age: 31,
    gender: "male",
  },
  {
    firstname: "my",
    age: 21,
    gender: "female",
  },
];

for (let i = 0; i < moreInfo.length; i++) {
  if (moreInfo[i]["gender"] == "male") {
    console.log(moreInfo[i]["firstname"]);
  }
}
