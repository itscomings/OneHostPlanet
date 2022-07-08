$(document).ready(function () {


    $('.stock__cards').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoWidth: true,
            navElement: "arrow",

        }
    );

    $('.news__cards').owlCarousel({
            margin: 20,
            response: false,
            dots: false,
            autoWidth: true,
            navElement: "arrow",
        }
    );

    $('.best__cards').owlCarousel({

            margin: 20,
            response: false,
            dots: false,
            autoWidth: true,
            navElement: "arrow",
        }
    );


})

