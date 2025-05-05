document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('header, main, footer');

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 1s ease-in-out';
    });

    requestAnimationFrame(() => {
    // Fade in header first
    document.querySelector('header').style.opacity = 1;

    // Fade in the rest slightly delayed
    setTimeout(() => {
        document.querySelector('main').style.opacity = 1;
        document.querySelector('footer').style.opacity = 1;
    }, 300);
});
});



