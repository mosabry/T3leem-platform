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

/* Zoom on Scroll */
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 5) + "%",
        top: -(scroll / 10) + "%",

        //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
        //"-webkit-filter": "blur(" + (scroll/200) + "px)",
        //filter: "blur(" + (scroll/200) + "px)"
    });
});
