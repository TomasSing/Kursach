const btnBurger = document.getElementById("menubutton");
const menuBar = document.querySelector(".headermenu-bar");
const html = document.querySelector(".html");

btnBurger.addEventListener("click", () => {
  menuBar.classList.toggle("_active");
  btnBurger.classList.toggle("_active");
  document.body.classList.toggle("_block");
  html.classList.toggle("_block");
});

const menuLinks = document.querySelectorAll(".menu-links[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", OnMenuLinkClick);

    function OnMenuLinkClick(e) {
      const menuLink = e.target;
      console.log(menuLink)
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        console.log("rabotai")
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;

        if (btnBurger.classList.contains("_active")) {
          menuBar.classList.remove("_active");
          btnBurger.classList.remove("_active");
          html.classList.remove("_block");
          document.body.classList.remove("_block");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  });
}