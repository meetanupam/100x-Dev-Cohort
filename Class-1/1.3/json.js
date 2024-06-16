// JSON.parse //

// const users = '{ "name": "anupam", "age": "23", "gender": "male" }';
// for json.parse method you have to add the quote to the key also with the value
// console.log(users["name"]);
// console.log(users["gender"]);

// const user = JSON.parse(users);
// console.log(user["gender"]);

// JSON.stringify //
// converting a string to an object

const user = {
  name: "anupam",
  gender: "male",
};

const finalString = JSON.stringify(user);
console.log(finalString);
