/* Activate wow.js */
new WOW().init();

/* Initialize Gliderjs */
window.addEventListener("load", function () {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
    });
});
