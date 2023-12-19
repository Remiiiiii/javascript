import dataFile from "./objects";

let pokeList = document.getElementById("pokeList");
pokeList.textContent = "hello";
async function fetchData() {
  const list = {
    method: "GET",
  };

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokeApi = await response.json();

  console.log(dataFile);
}

fetchData();
