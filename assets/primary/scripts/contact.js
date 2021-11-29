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
    })
    
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
    if (window.scrollY > 20) {
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