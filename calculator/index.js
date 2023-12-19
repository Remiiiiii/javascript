let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
const sumEl = document.getElementById("sum-el");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const divideBtn = document.getElementById("divideBtn");
const multiplyBtn = document.getElementById("multiplyBtn");

addBtn.addEventListener("click", (e) => {
  let sum = num1 + num2;
  sumEl.textContent = sumEl.innerText + " " + sum;
});

subtractBtn.addEventListener("click", (e) => {
  window.location.reload();
  let sum = num1 - num2;
  sumEl.textContent = sumEl.innerText + " " + sum;
});
divideBtn.addEventListener("click", (e) => {
  window.location.reload();
  let sum = num1 / num2;
  sumEl.textContent = sumEl.innerText + " " + sum;
});
multiplyBtn.addEventListener("click", (e) => {
  window.location.reload();
  let sum = num1 * num2;
  sumEl.textContent = sumEl.innerText + " " + sum;
});

{
  /* <span id="num1-el"></span>
    <span id="num2-el"></span>
    <br />
     <button id="addBtn">Add</button>
    <button id="subtractBtn">Subtract</button>
    <button id="divideBtn">Divide</button>
    <button id="multiplyBtn">Multiply</button>
    <br />
    <span id="sum-el">Sum: </span> */
}
