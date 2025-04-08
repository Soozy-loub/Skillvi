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


   

/**
 * SLIDER
//  */


    let client = document.querySelector(".client");
    let freelancer = document.querySelector(".freelancer");

    client.addEventListener("click", function () {
    client.classList.add("active");
    freelancer.classList.add("active");
    client.classList.remove("hide");
    client.style.transform = "translateY(-370px)";
    client.querySelector("label").style.transform = "scale(1)";
    freelancer.querySelector("label").style.transform = "scale(0.6)";
    });

    freelancer.addEventListener("click", function () {
        client.classList.remove("active");
        freelancer.classList.remove("active");
        client.classList.add("hide");
        client.style.transform = "";
        client.querySelector("label").style.transform = "scale(0.6)";
        freelancer.querySelector("label").style.transform = "scale(1)";
        });
