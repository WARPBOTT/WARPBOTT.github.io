!function(e,t){"use strict";var i={init:function(){var n={"elementskit-advance-accordion.default":i.Advanced_Accordion,"elementskit-advanced-toggle.default":i.Advanced_Toggle,"elementskit-tab.default":i.Advanced_Tab,"elementskit-gallery.default":i.Gallery,"elementskit-motion-text.default":i.MotionText,"elementskit-popup-modal.default":i.PopupModal,"elementskit-zoom.default":i.Zoom,"elementskit-unfold.default":i.Unfold,"elementskit-woo-product-carousel.default":i.Woo_Product_slider,"elementskit-woo-mini-cart.default":i.Mini_Cart,"elementskit-table.default":i.Table,"elementskit-timeline.default":i.TimeLine,"elementskit-creative-button.default":i.Creative_Button,"elementskit-hotspot.default":i.Hotspot,"ekit-vertical-menu.default":i.Vertical_Menu,"elementskit-video-gallery.default":i.Video_Gallery,"elementskit-facebook-feed.default":i.Facebook_Feed,"elementskit-facebook-review.default":i.Facebook_Review,"elementskit-yelp.default":i.Yelp_Review,"elementskit-blog-posts.default":i.BlogPosts,"elementskit-advanced-slider.default":i.Advanced_Slider,"elementskit-whatsapp.default":i.Whatsapp,"elementskit-fancy-animated-text.default":i.Fancy_Animated_Text,"elementskit-price-menu.default":i.Price_Menu,"elementskit-team-slider.default":i.Team_Slider,"elementskit-audio-player.default":i.Audio_Player,"elementskit-stylish-list.default":i.Stylish_List,"elementskit-flip-box.default":i.Flip_box,"elementskit-image-morphing.default":i.Image_Morphing,"elementskit-image-swap.default":i.Image_Swap};e.each(n,(function(e,i){t.hooks.addAction("frontend/element_ready/"+e,i)}))},WidgetAreaJSUpdate:function(){var t=e(this),i=["ekit-nav-menu","ekit-vertical-menu","gallery"],n=0;t.find(".elementor-widget").each((function(){i.map((t=>{e(this).hasClass("elementor-widget-"+t)||(n+=1)})),i.length===n&&elementorFrontend.elementsHandler.runReadyTrigger(e(this)),n=0})),t.find(".elementskit-image-comparison").trigger("resize.twentytwenty")},Social_Review_Slider:function(t){t.each((function(){let t=`\n\t\t\t\t\t<button type="button" class="slick-prev slick-arrow">\n\t\t\t\t\t\t<i class="${e(this).data("prevarrow")?e(this).data("prevarrow"):"icon icon-left-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,i=`\n\t\t\t\t\t<button type="button" class="slick-next slick-arrow">\n\t\t\t\t\t\t<i class="${e(this).data("nextarrow")?e(this).data("nextarrow"):"icon icon-right-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,n=!(!e(this).data("autoplay")||"yes"!==e(this).data("autoplay")),a={autoplay:n,slidesPerView:"undefined"!==e(this).data("slidestoshow")?e(this).data("slidestoshow"):1,slidesPerGroup:"undefined"!==e(this).data("slidestoscroll")?e(this).data("slidestoscroll"):1,speed:"undefined"!==e(this).data("speed")?e(this).data("speed"):1e3,arrows:"yes"===e(this).data("showarrow"),dots:"yes"===e(this).data("showdot"),pauseOnHover:"yes"==e(this).data("pauseonhover"),infinite:"undefined"===e(this).data("autoplay")||n,breakpoints:"[]"!==e(this).data("responsive")?e(this).data("responsive"):[],loop:"yes"==e(this).data("carousel_loop")};a.arrows&&(e(this).append(t+i),a.navigation={prevEl:e(this).find(".slick-prev"),nextEl:e(this).find(".slick-next")}),a.dots&&(a.pagination={el:e(this).find(".swiper-pagination"),type:"custom",clickable:!0,renderCustom:(e,t,i)=>{var n="";for(let e=1;e<=i;e++)n+='<li role="presentation" class="'+(t===e?" swiper-pagination-bullet-active slick-active":"swiper-pagination-bullet")+'"><button type="button" role="tab"  tabindex="0" aria-selected="true" class="">'+e+"</button></li>";return n}});let s=new Swiper(e(this).find(".swiper-container"),a);n&&a.pauseOnHover&&e(this).find(".swiper-container").hover((function(){s.autoplay.stop()}),(function(){s.autoplay.start()}))}))},Handle_Review_More:function(t){e(t).find(".more").each((function(){e(this).click((()=>{let t=e(e(this).parent().get(0)).find("span").first();!0===e(this).data("collapsed")?(e(t).text(e(this).data("text")),e(this).text("...Collapse")):(e(t).text(e(this).data("text").substr(0,120)),e(this).text("...More")),e(this).data("collapsed",!e(this).data("collapsed"))}))}))},ShowModal:function(t,i,n){if(n)return;e.find(".ekit-popup-modal.show").forEach((t=>e(t).removeClass("show")));let a=i.data("animation");t.addClass("show"),a&&i.addClass(a)},Advanced_Accordion:function(t){t.find(".elementskit-card > .collapse").on("shown.bs.collapse",(function(){var n=e(this);i.WidgetAreaJSUpdate.call(n),ElementsKit_Helper.ajaxLoading(t,n)})).filter(".show").trigger("shown.bs.collapse")},Advanced_Toggle:function(t){var n=t.find('[data-ekit-toggle="tab"]'),a=t.find(".ekit-custom-control-input");if(n.on("click",(function(t){t.preventDefault(),e(this).tab("show")})),t.find(".elemenetskit-toggle-indicator").length>0){let s=t.find(".elemenetskit-toggle-indicator"),o=t.find(".elementskit-toggle-nav-link.active");function l(e,t){let i="click"===e?t.outerWidth():o.outerWidth(),n="click"===e?t.outerHeight():o.outerHeight(),a="click"===e?t.position().left:o.position().left,l="click"===e?t.position().top:o.position().top;s.attr("class","elemenetskit-toggle-indicator "+t.parents("li").data("elementor_current_item")),s.css({width:i,height:n,left:a,top:l})}l(null,o),t.find(".elementkit-tab-nav > li > a").on("click",(function(t){l(t.type,e(this))}))}a.on("click",(function(){var t=this.checked?".elementskit-switch-nav-link-2":".elementskit-switch-nav-link-1";e(this).siblings(t).tab("show")})),n.on("shown.bs.tab",(function(){var n=t.find(e(this).attr("href"));a.length&&(a[0].checked=this.getAttribute("data-toggled")),i.WidgetAreaJSUpdate.call(n),ElementsKit_Helper.ajaxLoading(t,n)})).filter(".active").trigger("shown.bs.tab")},Advanced_Tab:function(t){var n=t.find('[data-ekit-toggle="tab"]'),a=n.data("ekit-toggle-trigger"),s=t.data("settings");n.on("click",(function(t){t.preventDefault(),e(this).tab("show")})),ElementsKit_Helper.triggerClickOnEvent(a,n),n.on("shown.bs.tab",(function(){let n=t.find(e(this)).data("target").substring(1),a=t.find(`#${n}`);i.WidgetAreaJSUpdate.call(a),ElementsKit_Helper.setURLHash(s,this,"ekit-handler-id"),ElementsKit_Helper.ajaxLoading(t,a)})).filter(".active").trigger("shown.bs.tab")},Gallery:function(t){var i=t.find(".ekit_gallery_grid"),n=i.data("grid-config");i.imagesLoaded((function(){i.isotope(n)})),t.find(".filter-button-wraper").find("a").on("click",(function(t){t.preventDefault();var n=e(this);n.parents(".option-set").find(".selected").removeClass("selected"),n.addClass("selected"),i.isotope({filter:n.data("option-value")})}));var a=t.find(".ekit-gallery-portfolio-tilt"),s=i.data("tilt-config");a.tilt(s)},MotionText:function(t){var i=t.find(".ekit_motion_text_title");if(i.hasClass("ekit_char_based")){var n=i.children(".ekit_motion_text"),a=n.text().split(""),s=i.data("ekit-animation-delay-s"),o=s,l="";e.each(a,(function(e,t){l+=" "===t?t:'<span class="ekit-letter" style="animation-delay: '+s+"ms; -moz-animation-delay: "+s+"ms; -webkit-animation-delay: "+s+'ms;">'+t+"</span>",s+=o})),n.html(l)}i.elementorWaypoint((function(){var e=this.adapter.$element.data("animate-class");this.adapter.$element.addClass(e).css("opacity",1),this.destroy()}),{offset:"100%"})},PopupModal:function(e){var t=e.data("id"),n=e.data("settings"),a=n&&"enable_cookie_consent"in n,s=a&&document.cookie.match("popup_cookie_"+t),o=e.find(".ekit-popup-modal"),l=e.find(".ekit-popup__content"),r=o.data("toggletype"),d=o.data("toggleafter");"time"===r&&d>0&&setTimeout((()=>{i.ShowModal(o,l,s)}),1e3*d);var c=e.find(".ekit-popup-modal__toggler-wrapper button, .ekit-popup-modal__toggler-wrapper img"),p=e.find(".ekit-popup__close, .ekit-popup-modal__close, .ekit-popup-footer__close");c.on("click",(function(e){e.preventDefault(),i.ShowModal(o,l)})),p.on("click",(function(e){e.preventDefault(),o.addClass("closing"),setTimeout((()=>{o.removeClass("show"),o.removeClass("closing")}),450),a&&(document.cookie="popup_cookie_"+t+"=1; path=/")}))},Zoom:function(e){var t=e.find(".ekit-zoom-counter"),i=e.find(".ekit-zoom-wrapper").data("settings");if(!t.length)return!1;var n=t.data("date"),a=new Date(n).getTime();a||(a=0);var s=setInterval((function(){var e=(new Date).getTime(),n=a-e,o=Math.floor(n/864e5),l=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),d=Math.floor(n%6e4/1e3),c="<ul><li><span class='number'>"+o+"</span><span class='text'>"+i.days+"</span></li><li><span class='number'>"+l+"</span><span class='text'>"+i.hours+"</span></li><li><span class='number'>"+r+"</span><span class='text'>"+i.minutes+"</span></li><li><span class='number'>"+d+"</span><span class='text'>"+i.seconds+"</span></li></ul>";t.html(c),n<0&&(clearInterval(s),t.html("EXPIRED"))}),1e3)},Unfold:function(t){var i=t.find(".ekit-unfold-btn"),n=t.find(".ekit-unfold-wrapper"),a=t.find(".ekit-unfold-data"),s=t.find(".ekit-unfold-data-inner"),o=n.data("config");o.collapse_height>=s.outerHeight()&&(i.hide(),a.addClass("active")),i.on("click",(function(){var t=this,i=e(this);t.style.display="none",a.hasClass("active")?(a.animate({height:o.collapse_height},parseInt(o.transition_duration,10)||0),i.html(o.expand_text)):(a.animate({height:s.outerHeight()},parseInt(o.transition_duration,10)||0),i.html(o.collapse_text)),a.toggleClass("active"),a.hasClass("active")||setTimeout((()=>{a[0].scrollIntoView({block:"center"})}),[300]),setTimeout((function(){t.style.display="block"}),300)}))},Woo_Product_slider:function(e){let t=e.find(".ekit-swiper-container"),i=t.data("autoplay"),n=t.data("loop"),a=t.data("speed"),s=t.data("space-between"),o=t.data("responsive-settings");new Swiper(t,{navigation:{nextEl:e.find(".ekit-navigation-next"),prevEl:e.find(".ekit-navigation-prev")},pagination:{el:e.find(".ekit-swiper-pagination"),type:"bullets",clickable:!0},autoplay:i&&i,loop:n&&Boolean(n),speed:a&&Number(a),slidesPerView:Number(o.ekit_columns_mobile),spaceBetween:s&&Number(s),breakpointsInverse:!0,breakpoints:{640:{slidesPerView:Number(o.ekit_columns_mobile),spaceBetween:s&&Number(s)},768:{slidesPerView:Number(o.ekit_columns_tablet),spaceBetween:s&&Number(s)},1024:{slidesPerView:Number(o.ekit_columns_desktop),spaceBetween:s&&Number(s)}}})},Mini_Cart:function(t){var i=t.find(".ekit-dropdown-back");i.on("click mouseenter mouseleave",(function(t){var i=e(this),n=i.hasClass("ekit-mini-cart-visibility-click"),a=i.hasClass("ekit-mini-cart-visibility-hover"),s=i.find(".ekit-mini-cart-container");"click"===t.type&&n&&!e(t.target).parents("div").hasClass("ekit-mini-cart-container")?s.fadeToggle():"mouseenter"===t.type&&a?s.fadeIn():"mouseleave"===t.type&&a&&s.fadeOut()})),t.find(".ekit-mini-cart--backdrop, .ekit-dropdown-back > i, .ekit-dropdown-back > .ekit-basket-item-count").on("click",(function(){i.toggleClass("is--active")}))},Table:function(i){var n=i.data("settings");if(t.isEditMode()&&(n=t.config.elements.data[i.data("model-cid")].attributes),i.find(".ekit_table").length>0){var a=i.find(".ekit_table").data("settings"),s="text"===a.nav_style.trim()||"both"===a.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-prev">'+a.prev_text+"</span>":"",o="text"===a.nav_style.trim()||"both"===a.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-next">'+a.next_text+"</span>":"",l="arrow"===a.nav_style.trim()||"both"===a.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-prev-icon '+a.prev_arrow+'" aria-hidden="true"></i>':"",r="arrow"===a.nav_style.trim()||"both"===a.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-next-icon '+a.next_arrow+'" aria-hidden="true"></i>':"";e(window).trigger("resize");var d={buttons:!0===a.button?["copy","excel","csv"]:[],bFilter:a.search,autoFill:!0,pageLength:a.item_per_page?a.item_per_page:1,fixedHeader:a.fixedHeader,responsive:a.responsive,paging:a.pagination,ordering:a.ordering,info:a.info,retrieve:!0,language:{search:'<span class="ekit-table-search-label"><i class="fa fa-search" aria-hidden="true"></i></span>',searchPlaceholder:n.search_placeholder,info:n.info_text,infoEmpty:n.info_text?n.info_text.replace(/_START_|_END_|_TOTAL_/gi,"0"):"",lengthMenu:n.entries_text,paginate:{next:o+r,previous:l+s}}};!1===a.entries&&(d.dom="Bfrtip"),i.find(".ekit_table table").DataTable(d)}},TimeLine:function(t){t.find(".elementskit-invisible").elementorWaypoint((function(){if(this.adapter.$element.hasClass("animated"))this.destroy();else{var e="animated "+this.adapter.$element.data("settings")._animation;this.adapter.$element.removeClass("elementskit-invisible").addClass(e)}}),{offset:"bottom-in-view"}),t.on("mouseenter",".horizantal-timeline > .single-timeline",(function(){e(this).addClass("hover").siblings().removeClass("hover")})).on("mouseleave",".horizantal-timeline > .single-timeline",(function(){e(this).removeClass("hover")}))},Creative_Button:function(t){var i=t.find(".ekit_position_aware_bg");t.on("mouseenter mouseleave",".ekit_position_aware",(function(t){var n=e(this).offset(),a=t.pageX-n.left,s=t.pageY-n.top;i.css({top:s,left:a})}))},Hotspot:function(t){var i=t.find(".ekit-location-on-click > .ekit-location_indicator, .ekit-location-on-hover.click > .ekit-location_indicator"),n=t.find(".ekit-location-on-hover:not(.click) > .ekit-location_indicator"),a=t.find(".ekit-location");function s(){let t=e(this).find(".ekit-location_outer"),i=e(this).find(".ekit-location_indicator"),n=i.width()/2+e(this).find(".ekit-hotspot-vertical-line").height(),a=i.width()+e(this).find(".ekit-hotspot-horizontal-line").height(),s=i.width()+e(this).find(".ekit-hotspot-horizontal-line").width();if(t.length)if(e(this).hasClass("ekit_hotspot_follow_line_top")?t.css({bottom:a,top:"auto"}):e(this).hasClass("ekit_hotspot_follow_line_bottom")?t.css({top:a,bottom:"auto"}):e(this).hasClass("ekit_hotspot_follow_line_right_top")||e(this).hasClass("ekit_hotspot_follow_line_left_top")?t.css("bottom",n):e(this).hasClass("ekit_hotspot_follow_line_right_bottom")||e(this).hasClass("ekit_hotspot_follow_line_left_bottom")?t.css("top",n):e(this).hasClass("ekit_hotspot_follow_line_right")?(t.css("top",-(t.height()/2-i.width()/2)),t.css("left",s)):e(this).hasClass("ekit_hotspot_follow_line_left")&&(t.css("top",-(t.height()/2-i.width()/2)),t.css("right",s)),t.offset().left<0)e(window).width()<=480&&e(this).find(".ekit-location_outer").css({"max-width":e(window).width(),"min-width":e(window).width()-40}),e(this).find(".ekit-location_outer").css("margin-left",Math.abs(t.offset().left));else if(t.offset().left>0)if(e(window).width()<=480&&t.width()>e(window).width())e(this).find(".ekit-location_outer").css({"max-width":e(window).width(),"min-width":e(window).width()-40}),e(this).find(".ekit-location_outer").css("left",-Math.abs(t.offset().left));else if(t.offset().left+t.width()>e(window).width()){let i=Math.abs(t.offset().left+t.width()-e(window).width());e(this).find(".ekit-location_outer").css("left",-i)}}e(window).load((function(){e(window).width()<=480&&a.hasClass("hotspot-following-line-style")&&e(window).width()<=480&&(a.removeClass("ekit_hotspot_follow_line_top ekit_hotspot_follow_line_bottom ekit_hotspot_follow_line_right_top ekit_hotspot_follow_line_right_bottom ekit_hotspot_follow_line_left_bottom ekit_hotspot_follow_line_right ekit_hotspot_follow_line_left ekit_hotspot_follow_line_left_top"),a.removeClass("hotspot-following-line-style").addClass("hotspot-following-line-straight ekit_hotspot_follow_line_top")),t.find(".ekit-location_outer").each((function(){e(this).offset().top<0&&e(this).parents(".ekit-location-on-hover").addClass("bottom"),e(this).parent().hasClass("auto")&&e(this).offset().top<0&&e(this).parent().removeClass("ekit_hotspot_follow_line_top").addClass("ekit_hotspot_follow_line_bottom")})),setTimeout((function(){a.each(s)}),1e3)})),i.on("click",(function(){t.find(".ekit-all-activated").length||e(this).parent().siblings().removeClass("active"),e(this).parent().toggleClass("active").removeClass("ekit-all-activated")})),n.on("mouseenter",(function(){a.removeClass("active")}))},Vertical_Menu:function(t){if(t.find(".ekit-vertical-main-menu-on-click").length>0){let i=t.find(".ekit-vertical-main-menu-on-click"),n=t.find(".ekit-vertical-menu-tigger"),a=e("body").data("elementor-device-mode");"tablet"!==a&&"mobile"!==a||i.removeClass("vertical-menu-active"),n.on("click",(function(e){e.preventDefault(),i.toggleClass("vertical-menu-active")}))}if(t.find(".elementskit-megamenu-has").length>0){let i=t.find(".elementskit-megamenu-has"),n=t.parents(".elementor-container"),a=t.find(".ekit-vertical-main-menu-wraper");Math.floor(n.width()-a.width());i.on("mouseenter",(function(){let t=e(this).data("vertical-menu"),i=e(this).children(".elementskit-megamenu-panel");t&&t!==undefined?"string"==typeof t?/^[0-9]/.test(t)?i.css({width:t}):e(window).bind("resize",(function(){e(document).width()>1024?i.css({width:Math.floor(n.width()-a.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize"):i.css({width:t+"px"}):e(window).bind("resize",(function(){e(document).width()>1024?i.css({width:Math.floor(n.width()-a.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize")})),i.trigger("mouseenter")}t.find(".megamenu-ajax-load").length>0&&t.find(".ekit-vertical-main-menu-wraper").on("mouseenter",".elementskit-megamenu-has",(function(t){ElementsKit_Helper.megaMenuAjaxLoad(e(this))})),t.find(".megamenu-ajax-load").length>0&&t.find(".ekit-vertical-main-menu-wraper").on("mouseenter",".elementskit-megamenu-has",(function(t){ElementsKit_Helper.megaMenuAjaxLoad(e(this))}))},Video_Gallery:function(t){var i=t.find(".video-link.popup"),n=t.find(".video-link.inline"),a=(t.find(".ekit-video-gallery-wrapper.ekit-masonry"),t.find(".elementskit-main-filter>li>a")),s=t.find(".ekit-video-gallery.ekit-carousel"),o=s.data("config");i.length>0&&i.magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1&rel=0"}}}}),n.on("click",(function(t){t.preventDefault();var i=e(this).data("url");e(this).addClass("video-added").append('<iframe src="'+i+'" width="643" height="360" allow="autoplay" frameborder="0"></iframe>')})),a.on("click",(function(i){i.preventDefault();var n=e(this).data("value")?"."+e(this).data("value"):"";t.find("a").removeClass("selected"),e(this).addClass("selected"),t.find(".ekit-video-item").hide(),t.find(".ekit-video-item"+n).fadeIn()})),s.length&&(o.arrows&&(o.navigation={prevEl:t.find(".slick-prev"),nextEl:t.find(".slick-next")}),o.dots&&(o.pagination={el:t.find(".swiper-pagination"),type:"custom",clickable:!0,renderCustom:(e,t,i)=>{var n="";for(let e=1;e<=i;e++)n+='<li role="presentation" class="'+(t===e?" swiper-pagination-bullet-active slick-active":"swiper-pagination-bullet")+'"><button type="button" role="tab"  tabindex="0" aria-selected="true" class="">'+e+"</button></li>";return n}}),new Swiper(t.find(".swiper-container"),o)),jQuery(".ekit-video-gallery.ekit-masonry").isotope({percentPosition:!0,itemSelector:".ekit-video-item "})},Facebook_Feed:function(e){e.find(".ekit-fb-video-play-button").on("click",(()=>{let t=e.find(".video-container"),i=`\n                    <video controls autoplay>\n                        <source src="${t.data("src")}" type="video/mp4">\n                        Your browser does not support the video tag.\n                    </video>\n                `;t.html(i)}))},Facebook_Review:function(e){i.Social_Review_Slider(e.find(".ekit-review-slider-wrapper-facebook")),i.Handle_Review_More(e)},Yelp_Review:function(e){i.Social_Review_Slider(e.find(".ekit-review-slider-wrapper-yelp")),i.Handle_Review_More(e)},BlogPosts:function(t){var i=t.find(".ekit-blog-post-pagination-container"),n=t.data("id"),a={items:"#post-items--"+n,nagivation:"#post-nagivation--"+n};t.on("click",".ekit-blog-post-pagination-container a.page-numbers",(function(n){n.preventDefault();var s=e(this).attr("href");e.ajax({url:s}).done((function(n){var s=e(n),o=s.find(a.items).html(),l=s.find(a.nagivation).html();"loadmore"==i.data("ekit-blog-post-style")?t.find(a.items).append(o):t.find(a.items).html(o),t.find(a.nagivation).html(l)}))}))},Advanced_Slider:function(t){let i=t.find(".ekit-slider-wrapper"),n=t.closest(".swiper-custom-nav"),a=t.find(".ekit-progress-bar"),s=t.find(".elementskit-advanced-slider").data("widget_settings");if("undefined"!=typeof Swiper){var o={loop:!0,speed:600,grabCursor:"yes"==s.sliderOptions.sliderGrapCursor,direction:s.sliderOptions.sliderDirectionType?s.sliderOptions.sliderDirectionType:"horizontal",autoHeight:!0,effect:s.sliderOptions.sliderEffect?s.sliderOptions.sliderEffect:"default",paginationClickable:!0,pagination:{el:i.find(".swiper-pagination.ekit-swiper-pagination"),clickable:!0},on:{init:function(){c(this),d(this)},slideChange:function(){r(this)},slideChangeTransitionEnd:function(){c(this),l(this)},activeIndexChange:function(){d(this)}},navigation:{nextEl:n.length?n.find(".ekit-double-btn-two"):t.find(".swiper-button-next"),prevEl:n.length?n.find(".ekit-double-btn-one"):t.find(".swiper-button-prev")}};function l(e){a.addClass("progress-bar-active"),e.update()}function r(e){a.removeClass("progress-bar-active"),e.update()}function d(t){let i=t.activeIndex;e(t.slides[i]).find(".elementor-widget").each((function(t,i){let n=e(i).data("settings")??[];if(n.hasOwnProperty("_animation")&&n._animation){let t=n.hasOwnProperty("_animation_delay")?n._animation_delay:1200;e(i).css({"animation-name":"unset"}),setTimeout((()=>{e(i).css({"animation-name":n._animation}),e(i).hasClass("elementor-invisible")&&(e(i).removeClass("elementor-invisible"),e(i).addClass("animated"))}),t),e(i).hasClass("elementor-invisible")||(e(i).addClass("elementor-invisible"),e(i).addClass("animated"))}})),t.update()}function c(t){i.find(".ekit-swiper-slide").css({height:"auto"});let n=t.activeIndex,a=e(t.slides[n]).height();i.find(".ekit-swiper-wrapper, .ekit-swiper-slide").css({height:a}),t.update()}if("horizontal"==s.sliderOptions.sliderDirectionType?(o.slidesPerView=s.sliderOptions.slidesPerViewItem?s.sliderOptions.slidesPerViewItem:1,o.spaceBetween=s.sliderOptions.spaceBetweenGap?s.sliderOptions.spaceBetweenGap:0):o.slidesPerView=1,"yes"!=s.sliderOptions.sliderAutoPlay&&"yes"!=s.sliderOptions.progressBar||(o.autoplay={delay:s.sliderOptions.autoPlayDelay?s.sliderOptions.autoPlayDelay:3e3,pauseOnMouseEnter:!0},t.find(".ekit-slider-wrapper").hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))),"yes"==s.sliderOptions.sliderMouseScroll&&(o.mousewheel={invert:!0,releaseOnEdges:!0,sensitivity:1,thresholdTime:10}),new Swiper(i,o),"yes"==s.sliderOptions.progressBar&&(t.find(".ekit-slider-wrapper, .ekit-swiper-progress").each((function(t,i){e(i).on("mouseenter",(function(){a.css({animationPlayState:"paused"})}))})),t.find(".ekit-slider-wrapper, .ekit-swiper-progress").each((function(t,i){e(i).on("mouseleave",(function(){a.css({animationPlayState:"running"})}))}))),"yes"==s.sliderOptions.sliderThumbsShow){function p(){let t=s.sliderOptions.sliderTabItems.map((e=>e.ekit_slider_thumbs_image.url)),n=0;i.find(".ekit-swiper-pagination > .swiper-pagination-bullet").each((function(){e(this).css({background:"url("+t[n]+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}),n++}))}e(i).each((function(){var e=i.find(".ekit-swiper-pagination > .swiper-pagination-bullet").siblings().css({width:"100%"});"horizontal"==s.sliderOptions.sliderDirectionType?(i.find(".swiper-pagination.ekit-swiper-pagination").css({width:s.sliderOptions.sliderThumbsOffset.size?s.sliderOptions.sliderThumbsOffset.size+"%":"70%",display:"grid",gridTemplateColumns:"repeat("+e.length+",1fr)",gridTemplateRows:"1fr",marginTop:"7px"}),i.addClass("slider-thumbs-yes")):(i.find(".swiper-pagination.ekit-swiper-pagination").css({display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"repeat("+e.length+",1fr)"}),i.addClass("slider-thumbs-yes"))})),p()}}},Whatsapp:function(t){const i=t.find(".elementskit-whatsapp__popup--btn"),n=t.find(".elementskit-whatsapp__input--field"),a=t.find(".elementskit-whatsapp__input--btn");function s(){let t=e(n).val(),i=e(".elementskit-whatsapp__input--btn").attr("href").replace(/text=/g,`text=${t}`);e(".elementskit-whatsapp__input--btn").attr("href",i)}"show"==e(".elementskit-whatsapp__content").data("show")&&e(".elementskit-whatsapp__content").addClass("elementskit-whatsapp__active"),e(i).click((function(){e(".elementskit-whatsapp__content").toggleClass("elementskit-whatsapp__active")})),e(a).on("click",(function(){s(),e(n).val("")})),e(n).keypress((function(t){13==t.which&&(s(),window.location=e(".elementskit-whatsapp__input--btn").attr("href"),e(n).val(""))}))},Fancy_Animated_Text:function(i){let n=i.data("settings");if(t.isEditMode()&&(n=t.config.elements.data[i.data("model-cid")].attributes),"animated"===n.ekit_fancy_animation_style){var a=n.ekit_fancy_animation_delay?n.ekit_fancy_animation_delay:2500,s=n.ekit_fancy_loading_bar?n.ekit_fancy_loading_bar:3800,o=s-3e3,l=n.ekit_fancy_letters_delay?n.ekit_fancy_letters_delay:50,r=n.ekit_fancy_type_letters_delay?n.ekit_fancy_type_letters_delay:150,d=n.ekit_fancy_selection_duration?n.ekit_fancy_selection_duration:500,c=d+800,p=n.ekit_fancy_reveal_duration?n.ekit_fancy_reveal_duration:600,f=n.ekit_fancy_reveal_animation_delay?n.ekit_fancy_reveal_animation_delay:1500;function u(){var t,n;i.find(".ekit-fancy-text.letters").find("b").each((function(){var t=e(this),i=t.text().split(""),n=t.hasClass("is-visible");for(let e in i)" "==i[e]&&(i[e]="&nbsp;"),t.parents(".rotate-2").length>0&&(i[e]="<em>"+i[e]+"</em>"),i[e]=n?'<i class="in">'+i[e]+"</i>":"<i>"+i[e]+"</i>";var a=i.join("");t.html(a)})),t=i.find(".ekit-fancy-text"),n=a,t.each((function(){var t=e(this);if(t.hasClass("bar-loading"))n=s,setTimeout((function(){t.find(".ekit-fancy-text-lists").addClass("is-loading")}),o);else if(t.hasClass("clip")){var i=t.find(".ekit-fancy-text-lists"),a=i.width()+10;i.css("width",a)}else if(t.hasClass("rotate-1")){var l=t.find(".ekit-fancy-text-lists b"),r=0,d=0;l.each((function(){(d=e(this).width())>r&&(r=d)})),t.find(".ekit-fancy-text-lists").css("min-width",r)}else if(!t.hasClass("type")){var l=t.find(".ekit-fancy-text-lists b"),r=0,d=0;l.each((function(){(d=e(this).innerWidth())>r&&(r=d)})),t.find(".ekit-fancy-text-lists").css("max-width",r)}setTimeout((function(){h(t.find(".is-visible").eq(0))}),n)}))}function h(e){var t=g(e);if(e.parents(".ekit-fancy-text").hasClass("type")){var i=e.parent(".ekit-fancy-text-lists");i.addClass("selected").removeClass("waiting"),setTimeout((function(){i.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),d),setTimeout((function(){m(t,r)}),c)}else if(e.parents(".ekit-fancy-text").hasClass("letters")){var n=e.children("i").length>=t.children("i").length;w(e,t),k(e.find("i").eq(0),e,n,l),_(t.find("i").eq(0),t,n,l)}else e.parents(".ekit-fancy-text").hasClass("clip")?e.parents(".ekit-fancy-text-lists").animate({width:"2px"},p,(function(){w(e,t),m(t)})):e.parents(".ekit-fancy-text").hasClass("bar-loading")?(e.parents(".ekit-fancy-text-lists").removeClass("is-loading"),w(e,t),setTimeout((function(){h(t)}),s),setTimeout((function(){e.parents(".ekit-fancy-text-lists").addClass("is-loading")}),o)):(w(e,t),setTimeout((function(){h(t)}),a))}function m(e,t){e.parents(".ekit-fancy-text").hasClass("type")?(_(e.find("i").eq(0),e,!1,t),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".ekit-fancy-text").hasClass("clip")&&e.parents(".ekit-fancy-text-lists").animate({width:e.outerWidth()+0},p,(function(){setTimeout((function(){h(e)}),f)}))}function k(t,i,n,s){if(t.removeClass("in").addClass("out"),t.is(":last-child")?n&&setTimeout((function(){h(g(i))}),a):setTimeout((function(){k(t.next(),i,n,s)}),s),t.is(":last-child")&&e("html").hasClass("no-csstransitions")){var o=g(i);w(i,o)}}function _(e,t,i,n){e.addClass("in").removeClass("out"),e.is(":last-child")?(t.parents(".ekit-fancy-text").hasClass("type")&&setTimeout((function(){t.parents(".ekit-fancy-text-lists").addClass("waiting")}),200),i||setTimeout((function(){h(t)}),a)):setTimeout((function(){_(e.next(),t,i,n)}),n)}function g(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function w(e,t){e.removeClass("is-visible").addClass("is-hidden"),t.removeClass("is-hidden").addClass("is-visible")}u()}},Price_Menu:function(e){var t=e.find(".swiper-container"),i=t.find(".swiper-wrapper").data("config");i!=undefined&&(i.pagination={el:e.find(".swiper-pagination"),clickable:!0},i.navigation={nextEl:e.find(".ekit-price-card-slider-button-next"),prevEl:e.find(".ekit-price-card-slider-button-prev")},i.autoplay&&i.pauseOnHover&&e.find(".swiper-container").hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))),new Swiper(t,i)},Team_Slider:function(e){var t=e.find(".ekit-team-popup"),i=e.find(".swiper-container").data("config");t.magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,prependTo:e.find(".ekit-wid-con"),showCloseBtn:!1,callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom ekit-promo-popup ekit-team-modal"}}}),e.find(".ekit-team-modal-close").on("click",(function(){t.magnificPopup("close")})),i!=undefined&&(i.pagination={el:e.find(".swiper-pagination"),clickable:!0},i.navigation={nextEl:e.find(".ekit-team-slider-button-next"),prevEl:e.find(".ekit-team-slider-button-prev")},i.autoplay&&i.pauseOnHover&&e.find(".swiper-container").hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))),new Swiper(e.find(".swiper-container"),i)},Audio_Player:function(e){let t=e.find(".ekit-audio-player").data("audio-settings");t&&e.find("audio").mediaelementplayer({pluginPath:"https://cdnjs.com/libraries/mediaelement/",shimScriptAccess:"always",audioVolume:t.audioVolume,features:t.features,startVolume:t.startVolume,success:function(e,t,i){}})},Stylish_List:function(t){t.find(".ekit-stylish-list-content-wrapper").each((function(){let t=e(this),i=t.data("ekit-delay"),n=t.parent().data("ekit-animation");i!=undefined&&setTimeout((()=>{t.addClass("animated "+n).css("opacity",1)}),i)}))},Flip_box:function(t){let i=t.find(".ekit-flip-box-front-button");e(i).on("click",(function(){t.find(".ekit-flip-box").addClass("on_active")})),t.find(".ekit-flip-box-back").on("click",(function(){t.find(".ekit-flip-box").removeClass("on_active")}));let n=t.find(".ekit-flip-box.box_click");e(n).on("click",(function(){e(this).toggleClass("active")}))},Image_Morphing:function(e){let i=e.find(".ekit-morphing-wrapper").data("paths"),n=e.find(".ekit-morphing-wrapper").find("path")[0],a=e.data("settings");t.isEditMode()&&(a=t.config.elements.data[e.data("model-cid")].attributes);const s={targets:n,d:[{value:i??[]}],easing:a.ekit_morphing_effect?a.ekit_morphing_effect:"easeOutQuad",direction:a.ekit_morphing_direction?a.ekit_morphing_direction:"alternate",loop:"yes"==a.ekit_morphing_loop||1,duration:a.ekit_morphing_duration?a.ekit_morphing_duration:2e3,delay:a.ekit_morphing_delay?a.ekit_morphing_delay:10,endDelay:a.ekit_morphing_end_delay?a.ekit_morphing_end_delay:10};anime(s)},Image_Swap:function(t){t.find(".ekit-image-swap--click").click((function(){e(this).toggleClass("click-active")}))}};e(window).on("elementor/frontend/init",i.init)}(jQuery,window.elementorFrontend)