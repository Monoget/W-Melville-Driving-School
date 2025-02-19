/***************************************************
==================== JS INDEX ======================
****************************************************
01. ScrollToTop Js
02. Smooth Scroll
03. WOW Js
04. NiceSelect
05. Number Input
06. Mean-menu Navbar
07. OwlCarousel for Hero Slider 
08. Sticky Menu 
09. CounterUp
10. Isotope Js
11. Fancy Box
12. Search Box
13. Info bar
14. OwlCarousel for Team
15. OwlCarousel for Service
16. OwlCarousel for Testimonial
17. OwlCarousel for Blog
18. Progress-skill
19. Preloader Js
****************************************************/


(function ($) {
    "use strict";


    ////////////////////////////////////////////////////
    // 01. ScrollToTop Js
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 250);
        return false;
    });


    ////////////////////////////////////////////////////
    // 02. Smooth Scroll
    $('a.smooth-scroll').on('click', function (event) {
        event.preventDefault();
        var section_smooth = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section_smooth).offset().top
        }, 1250, 'easeInOutExpo');
    });


    ////////////////////////////////////////////////////
    // 03. WOW Js
    new WOW().init();


    ////////////////////////////////////////////////////
    // 04. NiceSelect
    $('select').niceSelect();


    ////////////////////////////////////////////////////
    // 05. Number Input
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-plus"></i></div><div class="quantity-button quantity-down"><i class="fas fa-minus"></i></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });


    //////////////////////////////////////////////////////
    // 06. Mean-menu Navbar
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991"
    });


    ////////////////////////////////////////////////////
    // 07. OwlCarousel for Hero Slider 
    function homeSlider() {
        var slider = $('.slider1__active');
        slider.owlCarousel({
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplay: true,
            nav: false,
            dots: true,
            navText: ['<i class="ti-angle-double-left"></i>', '<i class="ti-angle-double-right"></i>'],
            smartSpeed: 450,
            margin: 0,
            stagePadding: 0,
            autoplayTimeout: 8000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        slider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var animation_delay = $(this).data('delay');
            $(this).css('animation-delay', animation_delay);
        });
        $("[data-duration]").each(function () {
            var animation_dutation = $(this).data('duration');
            $(this).css('animation-duration', animation_dutation);
        });
        slider.on('translated.owl.carousel', function () {
            var layer = slider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).addClass('animated ' + slider_animation).css('opacity', '1');
            });
        });
    }
    homeSlider();


    ////////////////////////////////////////////////////
    // 08. Sticky Menu 
    if (screen.width >= 992) {
        $(document).on('scroll', function (e) {
            var scrollPos = $(this).scrollTop();
            if (scrollPos > 400) {
                $('.header__menu-wrapper').addClass('menu_sticky');
                $('.header__menu-wrapper').addClass('animated');
                $('.header__menu-wrapper').addClass('slideInDown');
            } else {
                $('.header__menu-wrapper').removeClass('menu_sticky');
                $('.header__menu-wrapper').removeClass('animated');
                $('.header__menu-wrapper').removeClass('slideInDown');
            }
        });
    };


    ////////////////////////////////////////////////////
    // 09. CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    ////////////////////////////////////////////////////
    // 10. Isotope Js
    $('.portfolioPageRs1__active button').on('click', function () {
        $(".portfolioPageRs1__active button").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: selector
        });
    });
    $(window).on("load", function () {
        $("#isotope-container").isotope();
    });


    //////////////////////////////////////////////////
    // 11. Fancy Box
    $('[data-fancybox="gallery_1"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "circular"
    });


    ////////////////////////////////////////////////////
    // 12. Search Box
    if ($(".search_box_container").length) {
        var searchToggleBtn = $(".search_btn");
        var searchContent = $(".search_form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("search_form_toggle");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("search_form_toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    };


    ////////////////////////////////////////////////////
    // 13. Info bar
    $(".extra_info_btn").on("click", function () {
        $(".extra_info").addClass("extra_info_open");
    });

    $(".extra_info_close").on("click", function () {
        $(".extra_info").removeClass("extra_info_open");
    });


    ////////////////////////////////////////////////////
    // 14. OwlCarousel for Team
    $('.team1__Carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 400,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>PREV', 'NEXT<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            991: {
                items: 2
            },
            1199: {
                items: 3
            },
            1200: {
                items: 4,
                margin: 20
            }
        }
    });


    ////////////////////////////////////////////////////
    // Team
    $('.team2__Carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 400,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>PREV', 'NEXT<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            991: {
                items: 2
            },
            1199: {
                items: 3
            },
            1200: {
                items: 4,
                margin: 20
            }
        }
    });


    ////////////////////////////////////////////////////
    // 15. OwlCarousel for Service
    $('.service2__Carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 400,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


    ////////////////////////////////////////////////////
    // 16. OwlCarousel for Testimonial
    $('.testimonial2__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        margin: 30,
        autoplayTimeout: 10000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    ////////////////////////////////////////////////////
    // Testimonial
    $('.testimonial1__text--carousel').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial1__img--carousel'
    });
    $('.testimonial1__img--carousel').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial1__text--carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        centerPadding: 0,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: false,
            }
        }]
    });


    ////////////////////////////////////////////////////
    // 17. OwlCarousel for Blog
    $('.blog2__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        margin: 50,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    ////////////////////////////////////////////////////
    // 18. Progress-skill
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


    //////////////////////////////////////////////////////
    // window load function
    $(window).on("load", function () {

        //////////////////////////////////////////////////////
        // 19. Preloader Js
        $(".preloader").delay(100).fadeOut('slow');

    });

})(jQuery);