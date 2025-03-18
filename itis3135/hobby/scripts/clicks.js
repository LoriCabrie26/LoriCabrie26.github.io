document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible-header");

    collapsibles.forEach((header) => {
        header.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});