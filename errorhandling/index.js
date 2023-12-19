const error = document.getElementById("error");
const errorBtn = document.getElementById("errorBtn");

errorBtn.addEventListener("click", (e) => {
  error.innerText = "Something went wrong, please try again";
});
