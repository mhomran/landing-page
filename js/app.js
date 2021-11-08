/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = [];
let navBar;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let fragment = document.createDocumentFragment();
document.querySelectorAll("section").forEach((section) => {
  let listItem = document.createElement("li");
  let anchor = document.createElement("a");

  listItem.appendChild(anchor);
  fragment.appendChild(listItem);

  anchor.classList.add("menu__link");
  anchor.textContent = section.id;
});
navBar = document.querySelector("#navbar__list");
navBar.appendChild(fragment);

// Add class 'active' to section when near top of viewport
document.querySelectorAll("section").forEach((section) => {
  sections.push(section);
});

document.addEventListener("scroll", (e) => {
  sections.forEach((section) => {
    let y = Math.abs(section.getBoundingClientRect().y);
    if (y >= 0 && y / window.innerHeight < 0.2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  let scrollUp = document.querySelector(".scroll-up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
    scrollUp.classList.add("anime-fade-in");
  } else {
    scrollUp.classList.remove("anime-fade-in");
    scrollUp.style.display = "none";
  }
});

// Scroll to section ID using scrollIntoView event
navBar.addEventListener("click", (e) => {
  if (e.target.nodeName.toLowerCase() === "a") {
    document.getElementById(e.target.textContent).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//scroll up button handler
document.querySelector(".scroll-up").addEventListener("click", () => {
  window.scroll(0, 0);
});
