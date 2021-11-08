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
    if (y > 0 && y / window.innerHeight < 0.3) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
