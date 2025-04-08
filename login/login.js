'use strict';

/**
 * NAVBAR
 */
    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.classList.add("navactive");
    } else {
        header.classList.remove("navactive");
    }
});

/**
 * EYE ICON
 */

    let eyeicons = document.getElementsByClassName("eyeicon");

    for (let i = 0; i < eyeicons.length; i++) {
    eyeicons[i].addEventListener("click", function () {
        let passwordInput = this.previousElementSibling;

        if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.setAttribute("name", "eye-outline");
        } else {
        passwordInput.type = "password";
        this.setAttribute("name", "eye-off-outline");
        }
    });
    }