const button = document.getElementById("fact-btn");
const para = document.querySelector(".fact");
const theme = document.querySelector(".theme");
const body = document.body;

let dark = false;

async function getFact() {
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    para.innerText = data.data[0];
  } catch (error) {
    para.innerText = "Oops! Couldn't fetch a cat fact right now.";
  } finally {
    button.disabled = false;
  }
}

button.addEventListener("click", () => {
  para.innerText = "Please wait...";
  button.disabled = true;
  getFact();
});

theme.addEventListener("click", () => {
  dark = !dark;
  body.classList.toggle("dark-mode", dark);
  body.classList.toggle("light-mode", !dark);
});