function testimonialHeight(){jQuery(".testimonial-section .parallax-window").css("height",jQuery(".testimonial-section .parallax-window .container").outerHeight()+150),jQuery(window).trigger("resize").trigger("scroll")}!function(e){function i(){var i=e(window).scrollTop(),t=jQuery(window).width();992>t||(i>o&&n.addClass("outOfSight"),e(window).scrollTop()>o+65&&n.addClass("fixed scrolled"),0==e(window).scrollTop()&&n.removeClass("fixed scrolled outOfSight"))}function t(){var e=jQuery(".masonryFlyIn .masonry-item"),i=0;e.each(function(){var e=jQuery(this);setTimeout(function(){e.addClass("fadeIn")},i),i+=170})}var n,o;jQuery(document).ready(function(e){jQuery(".inner-link").each(function(){var e=jQuery(this).attr("href");"#"!==e.charAt(0)&&jQuery(this).removeClass("inner-link")}),jQuery(".inner-link").click(function(){return jQuery("html, body").animate({scrollTop:0},1e3),!1}),jQuery(".background-image-holder").each(function(){var e=jQuery(this).children("img").attr("src");jQuery(this).css("background",'url("'+e+'")'),jQuery(this).children("img").hide(),jQuery(this).css("background-position","initial")}),setTimeout(function(){jQuery(".background-image-holder").each(function(){jQuery(this).addClass("fadeIn")})},200),n=e("body .nav-container nav:first"),o=e("body .nav-container nav:first").outerHeight();var t=jQuery(window).width();t>991&&(window.addEventListener("scroll",i,!1),i()),e(window).resize(function(){t=e(window).width(),992>t?n.removeClass("fixed scrolled outOfSight"):(window.addEventListener("scroll",i,!1),i())}),e(".menu > li > ul").each(function(){var i=e(this).offset(),t=i.left+e(this).outerWidth(!0);if(t>e(window).width()&&!e(this).hasClass("mega-menu"))e(this).addClass("make-right");else if(t>e(window).width()&&e(this).hasClass("mega-menu")){var n=e(window).width()-i.left,o=e(this).outerWidth(!0)-n;e(this).css("margin-left",-o)}}),e(".mobile-toggle").click(function(){e(".nav-bar").toggleClass("nav-open"),e(this).toggleClass("active"),e(".search-widget-handle").toggleClass("hidden-xs hidden-sm")}),e(".menu li").click(function(i){i||(i=window.event),i.stopPropagation(),e(this).find("ul").length?e(this).toggleClass("toggle-sub"):e(this).parents(".toggle-sub").removeClass("toggle-sub")}),e(".menu li a").click(function(){e(this).hasClass("inner-link")&&e(this).closest(".nav-bar").removeClass("nav-open")}),e(".module.widget-handle").click(function(){e(this).toggleClass("toggle-search")}),e(".search-widget-handle .search-form input").click(function(e){e||(e=window.event),e.stopPropagation()}),e(".slider-all-controls").flexslider({start:function(e){e.find(".slides li:first-child").find(".fs-vid-background video").length&&e.find(".slides li:first-child").find(".fs-vid-background video").get(0).play()},after:function(e){e.find(".fs-vid-background video").length&&(e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").length&&e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").get(0).pause(),e.find(".flex-active-slide").find(".fs-vid-background video").length&&e.find(".flex-active-slide").find(".fs-vid-background video").get(0).play())}}),e(".slider-paging-controls").flexslider({animation:"slide",directionNav:!1}),e(".slider-arrow-controls").flexslider({controlNav:!1}),e(".slider-thumb-controls .slides li").each(function(){var i=e(this).find("img").attr("src");e(this).attr("data-thumb",i)}),e(".slider-thumb-controls").flexslider({animation:"slide",controlNav:"thumbnails",directionNav:!0}),e(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1}),e(".lightbox-grid li a").each(function(){var i=e(this).closest(".lightbox-grid").attr("data-gallery-title");e(this).attr("data-lightbox",i)});var a=e(".video-widget");a.length&&e.each(a,function(){var i=e(this).find(".play-button"),t=e(this).find(".pause-button"),n=e(this).hasClass("youtube");if(n){var o=e(this).attr("data-video-id"),a=parseInt(e(this).attr("data-autoplay")),s=(e(this).YTPlayer({fitToBackground:!0,videoId:o,playerVars:{modestbranding:0,autoplay:a,controls:0,showinfo:0,branding:0,rel:0,autohide:0}}),e(this));e(document).on("YTBGREADY",function(){var e=s.find("iframe");e.height();0==s.height()}),e(i).on("click",function(i){i.preventDefault();var t=e(this).parents(".video-widget"),n=e(t).data("ytPlayer").player;n.playVideo()}),e(t).on("click",function(i){i.preventDefault();var t=e(this).parents(".video-widget"),n=e(t).data("ytPlayer").player;n.pauseVideo()})}else e(i).on("click",function(i){i.preventDefault();var t=e(this).parents(".video-widget"),n=e(t).data("vide"),o=n.getVideoObject();o.play()}),e(t).on("click",function(i){i.preventDefault();var t=e(this).parents(".video-widget"),n=e(t).data("vide"),o=n.getVideoObject();o.pause()})});var s=e(".widget_recent_entries").find("li");e.each(s,function(){e(this).find("a").insertAfter(e(this).find(".post-date"))}),e(".comment-form").find("textarea").insertAfter(e(".comment-form > #url")),"undefined"!=typeof e.fn.owlCarousel&&e(".owlCarousel").each(function(i){var t="#owlCarousel-"+e(this).data("slider-id"),n=e(this).data("slider-items"),o=e(this).data("slider-speed"),a=e(this).data("slider-auto-play");e(this).data("slider-single-item");a=!(0==a||"false"==a),e(".shapely-owl-next").on("click",function(i){i.preventDefault(),e(t).trigger("next.owl.carousel")}),e(".shapely-owl-prev").on("click",function(i){i.preventDefault(),e(t).trigger("prev.owl.carousel")}),e(t).owlCarousel({items:n,loop:!1,margin:2,autoplay:a,dots:!1,autoplayTimeout:10*o,responsive:{0:{items:1},768:{items:n}}})})}),jQuery(window).load(function(e){if(0!=jQuery(".testimonial-section").length&&(testimonialHeight(),setTimeout(function(){testimonialHeight()},3e3)),jQuery(".masonry").length&&"undefined"!=typeof Masonry){var i=document.querySelector(".masonry"),n=new Masonry(i,{itemSelector:".masonry-item"});n.on("layoutComplete",function(e){cl_firstSectionHeight=jQuery(".main-container section:nth-of-type(1)").outerHeight(!0),jQuery(".filters.floating").length&&(setupFloatingProjectFilters(),updateFloatingFilters(),window.addEventListener("scroll",updateFloatingFilters,!1)),jQuery(".masonry").addClass("fadeIn"),jQuery(".masonry-loader").addClass("fadeOut"),jQuery(".masonryFlyIn").length&&t()}),n.layout()}cl_firstSectionHeight=jQuery(".main-container section:nth-of-type(1)").outerHeight(!0)})}(jQuery);