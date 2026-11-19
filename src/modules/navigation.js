import { createHomePage } from "./home.js";
import { createMenuPage, setupMenuInteraction } from "./menu.js";
import { createContactPage } from "./contact.js";


const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

const contentContainer = document.getElementById("content");

homeButton.addEventListener("click", () => {
    contentContainer.innerHTML = createHomePage();
    navLinks.classList.remove("show");
    toggleMenuButton.setAttribute("aria-expanded", "false");
});

menuButton.addEventListener("click", () => {
    contentContainer.innerHTML = createMenuPage();
    setupMenuInteraction();
    navLinks.classList.remove("show");
    toggleMenuButton.setAttribute("aria-expanded", "false");
});

contactButton.addEventListener("click", () => {
    contentContainer.innerHTML = createContactPage();
    navLinks.classList.remove("show");
    toggleMenuButton.setAttribute("aria-expanded", "false");
});


const toggleMenuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links")

toggleMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    toggleMenuButton.setAttribute("aria-expanded", navLinks.classList.contains("show"));
});


contentContainer.addEventListener("click", (e) => {
    if (e.target.closest("#explore-button")) {
        menuButton.click();
    }
});