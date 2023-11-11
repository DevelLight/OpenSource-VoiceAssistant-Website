
    (function($) { "use strict";

         //Parallax

        function scrollBanner() {
          $(document).on('scroll', function(){
          var scrollPos = $(this).scrollTop();
            $('.parallax-fade-top').css({
              'top' : (scrollPos/2)+'px',
              'opacity' : 1-(scrollPos/700)
            });
            $('.parallax-00').css({
              'top' : (scrollPos/-3.5)+'px'
            });
            $('.parallax-01').css({
              'top' : (scrollPos/-2.8)+'px'
            });
            $('.parallax-top-shadow').css({
              'top' : (scrollPos/-2)+'px'
            });
          });
          }
        scrollBanner();

        //Page cursors


    //Scroll back to top

    $(document).ready(function() {
            var offset = 300;
            var duration = 400;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.scroll-to-top').addClass('active-arrow');
                } else {
                    jQuery('.scroll-to-top').removeClass('active-arrow');
                }
            });
            jQuery('.scroll-to-top').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })

            //Navigation

            	var app = (function () {
            		var body = undefined;
            		var menu = undefined;
            		var menuItems = undefined;
            		var init = function init() {
            			body = document.querySelector('body');
            			menu = document.querySelector('.menu-icon');
            			menuItems = document.querySelectorAll('.nav__list-item');
            			applyListeners();
            		};
            		var applyListeners = function applyListeners() {
            			menu.addEventListener('click', function () {
            				return toggleClass(body, 'nav-active');
            			});
            		};
            		var toggleClass = function toggleClass(element, stringClass) {
            			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
            		};
            		init();
            	}());

            /* Hero Case study images */

            $('.case-study-name:nth-child(1)').on('mouseenter', function() {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(1)').addClass("show");
                $('.case-study-name:nth-child(1)').addClass('active');
            })
            $('.case-study-name:nth-child(2)').on('mouseenter', function() {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(2)').addClass("show");
                $('.case-study-name:nth-child(2)').addClass('active');
            })
            $('.case-study-name:nth-child(3)').on('mouseenter', function() {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(3)').addClass("show");
                $('.case-study-name:nth-child(3)').addClass('active');
            })
            $('.case-study-name:nth-child(4)').on('mouseenter', function() {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(4)').addClass("show");
                $('.case-study-name:nth-child(4)').addClass('active');
            })
            $('.case-study-name:nth-child(1)').trigger('mouseenter')

      });

    })(jQuery);