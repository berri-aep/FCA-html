const headerNav = document.querySelector(".header__nav-all");
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
})