$(document).ready(function () {

    $('.stock__cards').owlCarousel({
            slideTransition: "linear",
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoWidth: true,

            navText: ['<img src="img/svg/news-arrow-left.svg">', '<img src="img/svg/news-arrow-right.svg">'],
        }
    );

})
    /* Open nav-menu */
    function openNav() {
        document.getElementById("myNav").style.height = "100vh";
    }
    /* Close nav-menu*/
    function closeNav() {
        document.getElementById("myNav").style.height = "0";
    }

