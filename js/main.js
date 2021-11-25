const btnBurger = document.getElementById("menubutton");
const menuBar = document.querySelector(".headermenu-bar");
const html = document.querySelector(".html");

btnBurger.addEventListener("click", () => {
  menuBar.classList.toggle("_active");
  btnBurger.classList.toggle("_active");
  document.body.classList.toggle("_block");
  html.classList.toggle("_block");
});