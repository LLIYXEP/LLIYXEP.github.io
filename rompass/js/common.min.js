$(function() {
	$('.last-info__item').equalHeights();
	$('.select-us__item__icon img').equalHeights();
	$('.select-us__item__header').equalHeights();
	$('.select-us__item').equalHeights();
	$('.vzaimod__item').equalHeights();
	$('.uslugi__item').equalHeights();
	$('.wp-item').equalHeights();
	$('.podgotovka__item p').equalHeights();
	$('.podgotovka__item').equalHeights();
	$('.img-block img').equalHeights();
	

	var windowWidth = $(window).width();
		if(windowWidth < 992){
    	$('.docs .accordion .card .card-header p').text('Полный список документов');
		}

	$('.top-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).parent().addClass('active');
        }
    });

	// Mobilemnu

	$(".gl-menu").after("<div id='my-menu'>");
	$(".gl-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("gl-menu");
	$("#my-menu").mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: "Меню"
		}
	});


	var api = $("#my-menu").data("mmenu");
	api.bind("cloned", function(){
		$(".toggle-mnu").removeClass("on");
	});


	//Knopka Mobile Menu
	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
	  thiss.removeClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});



	$('.top-menu.gl-menu').superfish({
		delay: 300,
	});
	// Mobile mnu

	// Accordion Icon Change
	var header = $('.accordion .card .mb-0 button');

	function accordion() {
		$(this).toggleClass('active');
		$(this).next().slideToggle('normal');
	}

	header.click(accordion);
	// Accordion Icon Change


	//E-mail Ajax Send
	$(".right-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
