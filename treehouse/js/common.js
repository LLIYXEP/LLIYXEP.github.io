$(function() {

	$(document).ready(function(){
	$("#setCookie").click(function () {
	$.cookie("popup", "24house", {expires: 0} );
	$("#bg_popup").hide();
	});
	 
	if ( $.cookie("popup") == null )
	{
	setTimeout(function(){
	$("#bg_popup").show();
	}, 4000)
	}
	else { $("#bg_popup").hide();
	}
	});








	$(document).ready(function(){
	$("#cn-accept-cookie").click(function () {
	$.cookie("cookie-notice-container", "24hours", {expires: 0} );
	$("#cookie-notice").hide();
	});
	 
	if ( $.cookie("cookie-notice-container") == null )
	{
	setTimeout(function(){
	$("#cookie-noticep").show();
	}, 4000)
	}
	else { $("#cookie-notice").hide();
	}
	});

	var $button = $('#nav-toggle'),
			$nav = $('#navigation'),
			$navToggleClassName = 'navigation-holder--mobile-open',
			$textOpen = 'Open navigation',
			$textClose = 'Close navigation'

	$button.click(function(e){
		e.preventDefault();

		if ($nav.hasClass($navToggleClassName)) {
			$nav.fadeOut();

			setTimeout( function(){
				$nav.removeClass($navToggleClassName);
			}, 500)
			$(this).text($textOpen);
		}else{
			$nav.hide().addClass($navToggleClassName).fadeIn();
			$(this).text($textClose);
		}
		
	});
});
