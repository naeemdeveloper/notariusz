(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // menu active style
        $('.menu-area li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});

        // menu toggle bar
        $(".menu-toggle-bar").on('click', function(){
            $(this).toggleClass("active");
        });

        // mbolie menu active style
        $('.mobile-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
            $(".mobile-menu").toggleClass("active");
            $(".menu-toggle-bar").toggleClass("active");
		});

        // mobile menu toogle bar
        $(".menu-toggle-bar").on('click', function(){
            $(".mobile-menu").toggleClass("active");
        });

        // image slider
        $('.image-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
        });

    });

    $(window).on('scroll', function () {

        // menu fixed
        var menuHeight = $("html").scrollTop();
        var menuFixed = $(".header-area").outerHeight();

        if (menuHeight > menuFixed) {
            // $(".header-area").css({
            //     "position" : "fixed",
            //     "top" : "0",
            //     "left" : "0",
            //     "width" : "100%",
            //     "background" : "#B6BFC7",
            //     "zIndex" : "9999"
            // });
            $(".header-area").addClass("sticky-menu");
        }
        else {
            $(".header-area").removeAttr("style");
            $(".header-area").removeClass("sticky-menu");
        }



        // back to top
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
