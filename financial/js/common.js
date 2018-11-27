$(function() {
 
  $(".toggle_mnu").click(function(){
  	$(this).toggleClass("on");
  	$(".main-mnu").slideToggle();
  	return false;
  });

  $(".main-footer .toggle_mnu").click(function(){
  		$("html, body").animate({ scrollTop: $(document).height()},"slow");
  });

  $(".top").click(function(){
  		$("html, body").animate({ scrollTop: 0},"slow");
  });

  $(".arrow-bottom").click(function(){
  		$("html, body").animate({ scrollTop: $(".main-head").height()+120},"slow");
  });

  $(".section-head p,.section-head h2").animated("fadeInRight");

  $(".info-item-wrap").animated("zoomIn");


  $(".section_2").waypoint(function(){

  $(".s2-item-wrap").each(function(index){
  		var ths = $(this);
  		setInterval(function(){
  			ths.addClass("on");
  		}, 200*index);
  	});
  }, {
  	offset: "30%"
  });

 

 //Подгонка высоты блоков
  $(".section_1 .section-content .info-item").equalHeights();
  $(".section_3 .section-content .info-item").equalHeights();
  $(".s1-bottom .info-item").equalHeights();
  $(".s2-item").equalHeights();
  $(".s2-item .img-wrap").equalHeights();

  $(".section_4").waypoint(function(){

  	$(".section_4 .card").each(function(index){
  		var ths = $(this);
  		setInterval(function(){
  			ths.removeClass("card-off").addClass("card-on");
  		}, 300*index);
  	});

  }, {
  	offset: "35%"
  });

  $(".section_6").waypoint(function(){

  	$(".team").each(function(index){
  		var ths = $(this);
  		setInterval(function(){
  			ths.removeClass("team-off").addClass("team-on");
  		}, 300*index);
  	});

  }, {
  	offset: "35%"
  });


	//обводка svg фото
  $(".section_5").waypoint(function(dir){
  	if (dir === "down") {
  	$(".section_5 .tc-item").each(function(index){
  		var ths = $(this);
  		setTimeout(function(){
  			var myAnimation= new DrawFillSVG({
			  	elementId: "tc-svg"+ index
			  });

  			ths.removeClass("").addClass("");
  		}, 700*index);
  	});
  };
  	this.destroy();
  }, {
  	offset: "20%"
  });



	//slider

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : '',
		loop : true,
		smartSpeed : 600,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//POPUP
	$('.homesect .section-bottom .buttons').click(function(){
		$("#callback h4").html($(this).text());
		$("#callback input[name=forname]").val($(this).text());
	}).magnificPopup({
   type:'inline',
   mainClass: 'mfp-forms'
  });

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
