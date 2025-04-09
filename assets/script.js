'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); // an array of all togglers.
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active"); //prevents scrolling when the mobile menu is open.
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});




/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () { //fct to close an accordion if another is clicked and expand the clicked one.
    if (lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion); 

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); } //adding the listener to all accordions.


/**
 * backtopbtn
 */

// Get the button
const backTopBtn = document.querySelector('[data-back-top-btn]');

// Show the button when scrolled down 100px
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    backTopBtn.style.display = 'block'; // Show the button
  } else {
    backTopBtn.style.display = 'none'; // Hide the button
  }
});

// Smooth scroll to the top when the button is clicked
backTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
});


// popular services js 
$(document).ready(function() {
	var $galleryContainer = $('.gallery').isotope({
		itemSelector: '.cat-item',
  		layoutMode: 'fitRows'
	});

	$('.cat-button-group .cat-button').on('click', function(){
		$('.cat-button-group .cat-button').removeClass('cat-active');
		$(this).addClass('cat-active');

		var value = $(this).attr('data-filter');
		$galleryContainer.isotope({
			filter: value 
		});
	});
});

