var container = document.getElementById("container");
let hairStyles = document.getElementById("hair-styles");
let nav = document.getElementById("nav");

var cornrows = document.getElementById("cornrows"), boxBraids = document.getElementById("box-braids"), knotlessBraids = document.getElementById("knotless-braids"), fauxLocs = document.getElementById("faux-locs"), crochet = document.getElementById("crochet"), twists = document.getElementById("twists"), microCurlyBraids = document.getElementById("micro-curly-braids");

hairStyles.addEventListener("scroll", function() {
    if (document.body.scrollTop > 10 || hairStyles.scrollTop > 10) {
        nav.style.backgroundColor = "#E8C7C8";
        nav.style.padding = ".5vh 3vw";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "2vh 3vw";
    }
});

// Cornrows
cornrows.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url(../assets/primary/images/cornrows.jpeg)";
}, false);
cornrows.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url(../assets/primary/images/cornrows.jpeg)";
}, false);

// Box Braids
boxBraids.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/box-braids.jpg')";
}, false);
boxBraids.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);

// Knotless Braids
knotlessBraids.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/knotless-braids.jpeg')";
}, false);
knotlessBraids.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);

// Faux Locs
fauxLocs.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/faux-locs.jpg')";
}, false);
fauxLocs.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);

// Crochet
crochet.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/crochet.jpeg')";
}, false);
crochet.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);

// Twists
twists.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/twists.jpeg')";
}, false);
twists.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);

// Micro Curly Braids
microCurlyBraids.addEventListener("mouseover", function() {
    container.style.backgroundImage = "url('../assets/primary/images/micro-curly-braids.jpg')";
}, false);
microCurlyBraids.addEventListener("mouseout", function() {
    container.style.backgroundImage = "url('../assets/primary/images/cornrows.jpeg')";
}, false);