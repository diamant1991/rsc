$('.hamburger-box').click(function(event) {
	var menu = $('#mobile-panel');
	if(menu.is(':hidden')){
		$(this).addClass('is-active')
		menu.show()
	}
	else{
		$(this).removeClass('is-active')
		menu.hide()
	}
});

if(window.matchMedia('(max-width: 991px)').matches){
	$('.sidebar__btn').click(function(event) {
		var menu = $(this).next()
		if(menu.is(':hidden')){
			menu.slideDown(250)
		}
		else{
			menu.slideUp(250)
		}
	});
}

$('.slider').slick({
  dots: false
});