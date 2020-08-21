/* Activate wow.js */
new WOW().init();

/* Initialize Gliderjs */
window.addEventListener("load", function () {
    new Glider(document.querySelector(".glider"), {
        slidesToScroll: 1,
        slidesToShow: 4.5,
        draggable: true,
        dots: ".dots",
        duration: 0.25,
        responsive: [
            {
                // screens greater than >= 120px
                breakpoint: 120,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: "1",
                    slidesToScroll: "1",
                    itemWidth: 50,
                    duration: 0.25,
                },
            },
            {
                // screens greater than >= 440px
                breakpoint: 440,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: "1.5",
                    slidesToScroll: "1",
                    itemWidth: 50,
                    duration: 0.25,
                },
            },
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: "2.5",
                    slidesToScroll: "1",
                    itemWidth: 150,
                    duration: 0.25,
                },
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25,
                },
            },
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

/* Config Zoom on small device */
if ($(window).width() < 1000) {
    $("header").removeClass("zoom");
}

/* Open Modal */
$(document).ready(function () {
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
            "src",
            $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
        );
    });

    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function (e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
    });

    // document ready
});
