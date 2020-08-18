/* Activate wow.js */
new WOW().init();

/* Initialize Gliderjs */
window.addEventListener("load", function () {
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 4.5,
        draggable: true,
        dots: '.dots',
        duration: 0.25,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 440,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '1.5',
                    slidesToScroll: '1',
                    itemWidth: 150,
                    duration: 0.25
                }
            },
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '2.5',
                    slidesToScroll: '1',
                    itemWidth: 150,
                    duration: 0.25
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ],
        // arrows: {
        //     prev: '.glider-prev',
        //     next: '.glider-next'
        // }
    });
});

/* Zoom on Scroll */
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: 100 + scroll / 5 + "%",
        top: -(scroll / 10) + "%",

        //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
        //"-webkit-filter": "blur(" + (scroll/200) + "px)",
        //filter: "blur(" + (scroll/200) + "px)"
    });
});

if ($(window).width() < 768) {
    $('header').removeClass('zoom')
}