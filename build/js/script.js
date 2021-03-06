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

$('.product-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.slickslide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    customPaging: function (slider, i) {
        return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
    }
});

$('.view-btn').click(function(e) {
  e.preventDefault()
  var id = $(this).attr('data-target')
  $('.view-btn').removeClass('active')
  $(this).addClass('active')
  $('.tab-pane').removeClass('active')
  $('' + id).addClass('active')
});
