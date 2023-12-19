// document.getElementById("count-el").innerText = 2;

// let myAge = 40;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// let bonusPoints = 50;

// bonusPoints = bonusPoints + 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;

// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
let count = 0;
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");

// const welcomeEl = document.getElementById("welcome-el");
incrementBtn.addEventListener("click", (e) => {
  count += 1;
  countEl.innerText = count;
  console.log(count);
});
decrementBtn.addEventListener("click", (e) => {
  count -= 1;
  countEl.textContent = count;
  console.log(count);
});
saveBtn.addEventListener("click", (e) => {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});

// let name = "Remy";
// let greeting = `Hi, my name is ${name} AI. How can I assist you today?`;
// welcomeEl.innerText = greeting + welcomeEl.innerText;
// let myGreeting = greeting + name;
// console.log(myGreeting);
const increment = () => {
  console.log("increment button clicked");
};
const decrement = () => {
  console.log("decrement button clicked");
};
// let lapsCompleted = 0;

// const totalLapTime = () => {
//   lapsCompleted += 1;
//   console.log(lapsCompleted);
// };
