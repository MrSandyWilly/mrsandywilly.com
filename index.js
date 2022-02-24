import "./_snowpack/pkg/modern-css-reset.min.css.proxy.js";
import "./styles.css.proxy.js";
import Typewriter from './_snowpack/pkg/typewriter-effect/dist/core.js';

let header = document.getElementById("site-header");

document.addEventListener('scroll', function(e) {
    if (window.scrollY == 0) {
        header.classList.remove("scrolled");
    } else {
        header.classList.add("scrolled");
    }
});

new Typewriter('#hero-typed', {
    cursor: "",
    strings: ['hitting my head against my desk', 'writing secret code', 'watching a movie', 'reading documentation', 'writing secret code'],
    autoStart: true,
    loop: true,
  });