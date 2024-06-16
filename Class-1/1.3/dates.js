// const currentDate = new Date();

// console.log(currentDate.getDate()); // for current date
// console.log(currentDate.getMonth() + 1); // for current month + 1, because the month index starts from '0'
// console.log(currentDate.getFullYear()); // for full year i.e. 2024

// objects

const users = '{ "name": "anupam", "age": "23", "gender": "male" }';
// for json.parse method you have to add the quote to the key also with the value
// console.log(users["name"]);
// console.log(users["gender"]);

// JSON.parse
// JSON.stringify

const user = JSON.parse(users);
console.log(user["gender"]);
