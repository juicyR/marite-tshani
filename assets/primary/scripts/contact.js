let bods = document.body;
let nav = document.getElementById("nav");

// Splash
let splash = document.querySelector('.splash');
function displaySplash() {
    document.addEventListener('DOMContentLoaded', (e)=>{
        setTimeout(()=>{
            splash.style.opacity = '0';
            splash.style.zIndex = '-100';
            bods.style.overflowY = 'scroll';
        }, 5000);
    });
    
    document.onclick = function disappear() {
        splash.style.opacity = '0';
        splash.style.zIndex = '-100';
        bods.style.overflowY = 'scroll';
    }
}

displaySplash();

/* !Body Logic! */

// Splash Doesn't look good when you scroll back up, So I removed it
/*function displaySplashOnScroll() {
    splash.style.opacity = '.9';
    splash.style.zIndex = '100';
}*/

/*Nav*/document.addEventListener("scroll", function() {
    if (window.scrollY > 30) {
        nav.style.opacity = '0';
        nav.style.zIndex = '-100';
        //Splash code that follows the scroll function
        // splash.style.opacity = '0';
        // splash.style.zIndex = '-100';
    } else {
        nav.style.opacity = '1';
        nav.style.zIndex = '100';
        // Calling Splash Function
        // displaySplashOnScroll();
    }
});


// Message text box
"use strict";

const setActive = (el, active) => {
  const formField = el.parentNode.parentNode;

  if (active) {
    formField.classList.add('form-field--is-active');
  } else {
    formField.classList.remove('form-field--is-active');
    el.value === '' ? formField.classList.remove('form-field--is-filled') : formField.classList.add('form-field--is-filled');
  }
};

[].forEach.call(document.querySelectorAll('.form-field__input, .form-field__textarea'), el => {
  el.onblur = () => {
    setActive(el, false);
  };

  el.onfocus = () => {
    setActive(el, true);
  };
});

// footer
let footer = document.querySelector('.footer');
let ig = document.querySelector('.ig-div');
let mail = document.querySelector('.mail-div');
let pinterest = document.querySelector('.pin-div');

function hover() {
    console.log("hi boo");
}

// ig.style.opacity = '0';

function reduceOpacity() {
    ig.style.opacity = '.6';
    mail.style.opacity = '.6';
    pinterest.style.opacity = '.6';
}
function increaseOpacity() {
    ig.style.opacity = '1';
    mail.style.opacity = '1';
    pinterest.style.opacity = '1';
}

footer.onmouseover = function() {reduceOpacity()};
footer.onmouseout = function() {increaseOpacity()};

// Remove embed pop up
let feed = document.querySelector(".eapps-link");
// Failed to work, Gave up
// -----------------------------------------------------------------