$(function () {
    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.circleG');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Modal window
    $('.nav-btn, .footer-btn, .consultation__btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    // Burger menu
    $('.burger-menu').click(function () {
        $('.menu-collapse').toggleClass('d-none order');
        $('.menu').toggleClass('burger-opened');
        $('.menu li').removeClass('hvr-float-shadow');
    });

    // Slider
    $('.slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>'
    });

    // Lightbox - endless scrolling
    lightbox.option({
        'wrapAround': true,
        'showImageNumberLabel': false,
        imageFadeDuration: 700,
        positionFromTop: 70,
    });

    //   Fixed Navigation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 195) {
            $('.navigation').addClass("sticky");
        }
        else {
            $('.navigation').removeClass("sticky");
        }
    });

    // Smooth scrolling to block
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 1200);
    });

    // Animated
    $(window).scroll(function () {
        $('.deserved-title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass("zoomIn");
            }
        });
        $('.merits-left').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 450) {
                $(this).addClass("fadeInLeft");
            }
        });
        $('.merits-center').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 490) {
                $(this).addClass("fadeInDown");
            }
        });
        $('.merits-right').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 450) {
                $(this).addClass("fadeInRight");
            }
        });
        $('.more-btn').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("zoomInDown");
            }
        });
        $('.feature-left').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass("fadeInLeftDown");
            }
        });
        $('.feature-center').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass("fadeInUp");
            }
        });
        $('.feature-right').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass("fadeInRightDown");
            }
        });

    });

    // Scroll to Top
    $(window).scroll(function () {
        // if ($(document).scrollTop() > $(window).height()) {
        if ($(document).scrollTop() > 550) {
            $('.scrolltotop').show();
        } else {
            $('.scrolltotop').hide();
        }
    });
    $('.scrolltotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

});



