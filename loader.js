
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const fadeEffect = setInterval(() => {
        if (!loader.style.opacity) {
          loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
          loader.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 25);
});