// let person = {
//   name: "Remy",
//   age: 41,
//   country: "United States",
// };

// function logData() {
//   console.log(
//     `${person.name} is ${person.age} years old and lives in the ${person.country}`
//   );
// }

// logData();

// let age = 25;
// let message = "";

// function discount() {
//   if (age < 6) {
//     message = "free";
//     return message;
//   } else if (age > 5 && age < 18) {
//     message = "child discount";
//     return message;
//   } else if (age > 17 && age < 27) {
//     message = "student discount";
//     return message;
//   } else if (age > 26 && age < 66) {
//     message = "full price";
//     return message;
//   } else {
//     message = "senior citizen discount";
//     return message;
//   }
// }

// console.log(discount());

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// console.log("The 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i]);
// }

// let editlargeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// editlargeCountries.pop();
// editlargeCountries.push("Pakistan");
// editlargeCountries.shift();
// editlargeCountries.unshift("China");

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   return console.log("😱");
// }

let hands = ["rock", "paper", "scissors"];

function getHand() {
  let randomItem = Math.floor(Math.random() * hands.length);
  return hands[randomItem];
}

console.log(getHand());
