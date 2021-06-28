(function($) {
  "use strict";


  $(".button-collapse").sideNav();
   $(".button-collapse-1").sideNav();

  
  
  //Single page scroll js
	$('.hello_single_index_menu1 ul li a').on('click' , function(e){
	  $('.hello_single_index_menu1 ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt(83);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.hello_single_index_menu1 ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.hello_single_index_menu1 ul li:first').addClass('active');
	  }

	});
  
  //Single page scroll js
	$('.hello_single_index_menu2 ul li a').on('click' , function(e){
	  $('.hello_single_index_menu2 ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt(83);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.hello_single_index_menu2 ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.hello_single_index_menu2 ul li:first').addClass('active');
	  }

	});

	
	//Single page scroll js
	$('.hello_single_index_menu3 ul li a').on('click' , function(e){
	  $('.hello_single_index_menu3 ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt(83);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.hello_single_index_menu3 ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.hello_single_index_menu3 ul li:first').addClass('active');
	  }

	});


	
	// Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
	

//----------------------- MENU FIXED JS -----------------------//
		$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 50) {
			$('.responsive_menu_fixed').addClass('menu_fixed');
		} else {
			$('.responsive_menu_fixed').removeClass('menu_fixed');
		}
	});

	
	
	$(window).scroll(function(event) {
	
    {
        var scroll = $(window).scrollTop(); 
        if(scroll > 50)
        { 
            $(".hello_menu_fixed_main_wrapper").fadeIn("slow").addClass("show");
        }
        else
        {
            $(".hello_menu_fixed_main_wrapper").fadeOut("slow").removeClass("show");
        }
        
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if ($('.hello_menu_fixed_main_wrapper').is(':hover')) {
	        
    		}
            else
            {
            	$(".hello_menu_fixed_main_wrapper").fadeOut("slow");
            }
		}, 50000));
    }
    
});


	

//Video Play
	$('.popup_video').magnificPopup({
        type: 'iframe'
      });
      $.extend(true, $.magnificPopup.defaults, {
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            }
          }
        } 
      });
	  
	$('.ei-child').magnificPopup({
			delegate: '.more',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		})
	

// main-slider ==================== start
var owl = $('.main-slider');
owl.owlCarousel({
	items:1,
	loop:true,
	autoplay:true,
	animateIn: 'flipInX',
	autoplayTimeout:5000
})
// main-slider ==================== end

// testomonial-carousel ==================== start
var owl = $('#testomonial-carousel');
owl.owlCarousel({
	items:1,
	nav:true,
	loop:true,
  margin:30,
  autoplay:false,
  animateIn: 'fadeIn',
  autoplayTimeout:5000
})
// testomonial-carousel ==================== end


$('.first.circle').circleProgress({
  value: 1,
  animation: true,
  fill: {gradient: ['#2196f3', '#2196f3']}

})


  $('.second.circle').circleProgress({
    value: 0.75,
    fill: {gradient: [['#0681c4', .5], ['#26a69a', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
  });

    $('.third.circle').circleProgress({
    value: 0.4,
    fill: {gradient: [['#0681c4', .5], ['#ef5350', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
  });
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function(itemElem) {
      var weight = $(itemElem).find('.weight').text();
      return parseFloat(weight.replace(/[\(\)]/g, ''));
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match(/ium$/);
  }
};

// bind filter button click
$('#filters').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue
  });
});

// bind sort button click
$('#sorts').on('click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({
    sortBy: sortByValue
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});





// back to top button --------------------------------------------------

  $(".scroll").on('click', function() {
    $("html,body").animate({
      scrollTop: $(".thetop").offset().top
    }, "slow");
    return false
  });



//open search form
$('.cd-search-trigger').on('click', function(event){
  event.preventDefault();
  toggleSearch();
  closeNav();
});


function closeNav() {
  $('.cd-nav-trigger').removeClass('nav-is-visible');
}

function toggleSearch(type) {
  if(type=="close") {
      //close serach 
      $('.cd-search').removeClass('is-visible');
      $('.cd-search-trigger').removeClass('search-is-visible');
    } else {
      //toggle search visibility
      $('.cd-search').toggleClass('is-visible');
      $('.cd-search-trigger').toggleClass('search-is-visible');
      ($('.cd-search').hasClass('is-visible'));
    }
  }

  
 })(jQuery);