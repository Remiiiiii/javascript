let myPoints = 3;

const add3Points = () => {
  myPoints += 3;
};

const remove1Points = () => {
  myPoints -= 1;
};

remove1Points();
add3Points();
add3Points();
add3Points();
remove1Points();
// console.log(myPoints);

// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//   console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// function getArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("-" + arr[i]);
//   }
// }

// getArray(myCourses);

// let myCourse = localStorage.setItem("myCredits", "100");

// console.log("myCourse");

// let data = [
//   {
//     player: "Jane",
//     score: 52,
//   },
//   {
//     player: "Mark",
//     score: 41,
//   },
// ];

// const scoreBtn = document.getElementById("score-btn");

// scoreBtn.addEventListener("click", function (e) {
//   console.log(data[0].score);
// });

function generateSentences(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const sentence1 = generateSentences("highest mountains", [
  "Mount Everest",
  "K2",
]);
console.log(sentence1);

const sentence2 = generateSentences("best fruits", ["Apples", "Bananas"]);
console.log(sentence2);
