$(function() {
    // Owl-CArousel
    $(".carousel-brands").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            580: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
    });

    $(".is-home .carousel-eq").owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            580: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
        navText: ""
    });

    // $(".item-vertical p").equalHeights();
    function heightses() {
        $(".carousel-text").height("auto").equalHeights();
        $(".testimonials-head").height("auto").equalHeights();
        $(".testimonials-descr").height("auto").equalHeights();
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    // +++++Animate numbers++++
    $(".s-adv").waypoint(function() {
        $({ blurRadius: 5 }).animate({ blurRadius: 0 }, {
            duration: 1400,
            easing: 'swing',
            step: function() {
                $(".s-adv-item h3 span").css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
        $(".s-adv-item h3 span").each(function() {
            var tcount = $(this).data("count");
            $(this).animateNumber({
                    number: tcount,
                    easing: 'easeInQuad',
                    "font-size": "34px",
                    numberStep: comma_separator_number_step
                },
                1400);
        });
        this.destroy();
    }, {
        offset: '70%'
    });


    // +++++Scroll при нажатии++++
    $(".mouse-icon").click(function() {
        $("html,body").animate({
            scrollTop: $(".s-adv").offset().top
        }, 800)
    });


    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".main-foot .toggle-mnu").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() + 500 }, "slow");
        return false;
    });

    $("body").on("click", ".top", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // +++++MAGNIFIC POPUP++++
    $(".portfolio-item").each(function(e) {
        var th = $(this);
        th.attr("href", "#portfolio-img-" + e)
            .find(".portfolio-popup")
            .attr("id", "portfolio-img-" + e);
    });

    $(".portfolio-item, a[href='#callback']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline',
    });

    $("a[href='#callback']").click(function() {
        var dateForm = $(this).data("form");
        var dateText = $(this).data("text");
        $(".form-callback h4").text(dateText);
        $(".form-callback [name=admin-data]").val(dateForm);
    });

    $(".mfp-gallery").each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            mainClass: 'mfp-zoom-in',
            type: 'image',
            tLoading: '',
            gallery: {
                enabled: true,
            },
            removalDelay: 300,
            callbacks: {
                beforeChange: function() {
                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                },
                open: function() {
                    $.magnificPopup.instance.next = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                    }
                    $.magnificPopup.instance.prev = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                    }
                },
                imageLoadComplete: function() {
                    var self = this;
                    setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
                }
            }
        });
    });

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.img-svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    $('form select').selectize();

    $("body").append('<div class="top"><i class="fas fa-angle-double-up"></i>');

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".form-callback .success").addClass("active");
            setTimeout(function() {
                // Done Functions
                $(".form-callback .success").removeClass("active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });

});