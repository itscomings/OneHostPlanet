$(document).ready(function () {

    // $('.best__cards').owlCarousel({
    //         slideTransition: "linear" ,
    //         margin: 20,
    //         response: false,
    //         dots: false,
    //         autoWidth: true,
    //         navElement: "arrow",
    //     }
    // );

    $('.stock__cards').owlCarousel({
            slideTransition: "linear",
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoWidth: true,
            navElement: "arrow",
        }
    );

    // $('.news__cards').owlCarousel({
    //         slideTransition: "linear",
    //         margin: 20,
    //         response: false,
    //         dots: false,
    //         autoWidth: true,
    //         navElement: "arrow",
    //     }
    // );

})
    /* Open nav-menu */
    function openNav() {
        document.getElementById("myNav").style.height = "100vh";
    }
    /* Close nav-menu*/
    function closeNav() {
        document.getElementById("myNav").style.height = "0";
    }

