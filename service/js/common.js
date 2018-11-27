$(function() {


	$('.h-item').equalHeights();

	$(".mc-item-wrap ul").each(function(){
		$(this).after("<div class='mc-item-wrap-af'></div>");
	});

	$(".top-mnu a").each(function() {
    //console.log($(this).attr('href'));
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
    		$(".top-mnu li").removeClass('active');
        $(this).parent().addClass('active');
    }
	});


	$(".mc-toggle").click(function(){
		if($(this).parent().parent().children("ul").is(":visible")) {
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".mc-item-wrap-af").hide();
		} else {
			$("body .mc-wrap .mc-item-wrap>ul, .mc-item-wrap-af").hide();
			$(".mc-item-wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideDown();
			$(this).parent().parent().children(".mc-item-wrap-af").show();
		}
	});

	$(".fancybox").fancybox({
		padding: 0
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
