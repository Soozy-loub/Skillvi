/* Show light logo in light mode */
.logo-light {
  display: block;
}
.logo-dark {
  display: none;
}

/* When dark mode is enabled */
.dark-mode .logo-light {
  display: none;
}
.dark-mode .logo-dark {
  display: block;
}
const toggleThemeBtn = document.querySelector("#theme-toggle"); // Example button for switching themes
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode"); // Toggle dark mode class
});

.header.active .logo-light,
.header .logo-dark { display: none; } /* Hide light logo when header is active (scrolled) and always hide dark logo by default */

.header .logo-light,
.header.active .logo-dark { display: block; } /* Show light logo by default and show dark logo when header is active (scrolled) */


.section-subtitle {
  font-size: var(--fs-7);
  text-transform: uppercase;
  color: var(--violet-blue-crayola);
  font-weight: var(--fw-700);
  margin-block-end: 16px;
}