(function($) {
  "use strict";

	$('.toggle_search a').on("click", function(){
		$(this).toggleClass( "active" );
		if ($(this).hasClass( "active" )) {
			$('.searchbar').stop(true, true).slideDown();
		}else{
			$('.searchbar').stop(true, true).slideUp();
		}
    });

    $('.return-customer a').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.checkout-login-form').stop(true, true).slideDown();
        }else{
            $('.checkout-login-form').stop(true, true).slideUp();
        }
    });
    
    $('.have-coupon a').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });

	$('.mobile-menu li:has(ul)').prepend('<span class="arrow"><i class="fa fa-plus"></i></span>');
	$( "#mmenu_toggle" ).on('click', function() {
		$(this).toggleClass( "active" );

		if ($(this).hasClass( "active" )) {
			$('.mobile-nav').stop(true, true).slideDown();
		}else{
			$('.mobile-nav').stop(true, true).slideUp();
		}		
	});

	$(".mobile-menu li span.arrow").on('click', function() {
        $(this).parent().find("> ul").stop(true, true).slideToggle()
        $(this).toggleClass( "active" ); 
    });


    //Project Filter
    $(window).on("load", function(){
        var $container = $('#projects');
        if ($container.length > 0 ) {
        $container.isotope({
            itemSelector: '.project-item',
            filter: '*',
            masonry: {
                columnWidth: 1
            }
        });
        }
        $('#filters a').on("click", function() {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents();
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            var selector = $(this).attr('data-filter');
            if ($container.length > 0 ) {
            $container.isotope({
                filter: selector
            });
            }
            return false;
        });
    });


    //Counter
    var v_count = '0';
    $(window).on("scroll", function(){
        $('.counter-box .number, .icon-box .number').each(function(){
            var imagePos = $(this).offset().top;           
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+800 && v_count=='0') {       
                $(function ($) {
                    // start all the timers
                    $('.counter-box .number, .icon-box .number').each(count);                                         
                    function count(options) {
                        v_count = '1';
                        var $this = $(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    }
                });             
            }
        });
    });
    
    /* Scroll **/

    if ($('.scroll-btn').length) {

        $('.scroll-btn')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };


            });

    }

    // Sticky
    $(document).on('ready', function() {
        "use strict";
        if ($(window).width() >= "768") {
            $(".navigation-2").sticky({ topSpacing: 0 });
        }

    });


    // Slider

    $('.slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });
    });    

    //Slider 2
    if ($('.slider-2, .slider-2-nav').length) {

        $('.slider-2').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            asNavFor: '.slider-2-nav',
            autoplay: true
        });

        $('.slider-2-nav').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-2',
            dots: false,
            arrows: false,
            fade: true,


        });

    }

    //Services Slider

    $('.services-slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    

    //Testimonial Slider

    $('.testi-slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = $(this).data('dots');
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            dots: $dots,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    


    $('.testi-slider-2').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = $(this).data('dots');
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            dots: $dots,
            autoplay: false,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    


    //Images Carousel
    $('.image-carousel').each( function () {
        var $s1, $s2, $s3;
        var $show   = $s1 = $s2 = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        if($(this).hasClass('partner-slider')){
            $dots    = false;
        }
        if( 4 > $show > 2 ) { $s1 = $s2 = $show - 1; }
        if( $show > 3 ) { $s1 = $show - 1; $s2 = $show - 2; $s3 = $show - 3; }

        $(this).slick({
            infinite: true,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: $s1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $s2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: $s2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });
    });


    //Project Feature Slider

    $('.project-feature-slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    

    //Slick feature project
    if ($('.slick-feature-project, .slick-feature-project-nav').length) {

        $('.slick-feature-project').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            asNavFor: '.slick-feature-project-nav',
            autoplay: true
        });

        $('.slick-feature-project-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.slick-feature-project',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            useTransform: false


        });

    }

    //Project Slider

    $('.project-slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-dropleft"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-dropright"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    

    //Slider product
    if ($('.slider-product, .slider-product-nav').length) {

        $('.slider-product').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-product-nav',
            autoplay: false
        });

        $('.slider-product-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            asNavFor: '.slider-product',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            useTransform: false


        });

    }


    if ($('#back-to-top').length) {
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });	
    }


    //Popup Video
    var $video_play = $('.video-player a');
    if ($video_play.length > 0 ) {
        $video_play.magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
            callbacks: {
            beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
    }

// Initialize popup as usual
if ($('.image-link').length) {
    $('.image-link').magnificPopup({ 
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below

      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function 

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
        
      },
       image: {
        // options for image content type
        titleSrc: 'title'
      },
      gallery: {
        // options for gallery
        enabled: true
      },
      

    });// JavaScript Document
}
} )( jQuery );
