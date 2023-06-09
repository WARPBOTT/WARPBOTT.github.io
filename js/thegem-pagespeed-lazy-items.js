!function(t,e){if(Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert first argument to object");for(var i=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var s=Object.keys(Object(n)),r=0,a=s.length;r<a;r++){var u=s[r],l=Object.getOwnPropertyDescriptor(n,u);void 0!==l&&l.enumerable&&(i[u]=n[u])}}return i}}),"function"!=typeof t.CustomEvent){function i(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var o=e.createEvent("CustomEvent");return o.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),o}i.prototype=t.Event.prototype,t.CustomEvent=i}function o(){return t.pageYOffset||e.documentElement.scrollTop}function n(t,e){for(;null!=t&&"BODY"!==t.nodeName.toUpperCase();){if(t.classList.contains(e))return t;t=t.parentNode}return null}function s(t,e,i,o){"function"==typeof t.addEventListener?t.addEventListener(e,i,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function r(t,e){this.node=t,this.type=e||"default",this.position=null,this.showed=!1,this.items=[],this.itemLoaded=0}function a(t,e){this.node=t,this.data=e||{},this.showed=!1,this.initType()}function u(t){t=t||{},this.options=Object.assign({visibilityOffset:300,desktopEnable:!0,mobileEnable:!0},t),this.groups=[],this.scrollTop=0,this.rootHeight=0,this.checkGroupsProcess=!1,this.enabled=!1,this.isPageScroller=!1,this.visibilityOffsetFixed=!1,this.init()}r.prototype={getType:function(){return this.type},getItems:function(){return this.items},allItemsLoaded:function(){return this.items.length==this.itemLoaded},updatePosition:function(){this.position=function(t){try{var e=t.getBoundingClientRect();return{left:e.left,top:e.top+o(),width:e.width,height:e.height}}catch(t){return null}}(this.node)},getPosition:function(){return this.position},getNode:function(){return this.node},addItem:function(t){this.isShowed()&&this.showItem(t),this.items.push(t)},showItem:function(t){var e=this;t.show((function(i){e.itemLoaded++,t.loaded(e)}))},show:function(t){var e=this;this.isShowed()||(void 0===t&&(t=!1),this.showed=!0,this.items.forEach((function(t){t.isShowed()||e.showItem(t)})),this.dispatchShowedEvent())},isShowed:function(){return this.showed},hasItems:function(){return this.items.length>0},dispatchShowedEvent:function(){this.node.dispatchEvent(new t.CustomEvent("tgpliVisible",{bubbles:!0}))}},a.prototype={getNode:function(){return this.node},show:function(t){if(!this.isShowed())switch(t=t||null,this.showed=!0,this.getType()){case"image":this.showImage(t);break;case"iframe":this.showIframe(t);break;case"custom":this.showCustom(t);break;default:this.showDefault(t)}},showImage:function(t){void 0!==t&&"function"==typeof t&&s(this.node,"load",(function(e){t(e)}),!0),void 0!==this.data.sources&&null!==this.data.sources&&""!=this.data.sources&&this.node.insertAdjacentHTML("beforebegin",this.data.sources);var e=this.node.getAttribute("data-tgpli-srcset");e&&this.node.setAttribute("srcset",e);var i=this.node.getAttribute("data-tgpli-src");i&&(this.node.src=i),this.node.removeAttribute("data-tgpli-image-inited")},showDefault:function(t){this.node.classList.remove("tgpli-background-inited")},showIframe:function(t){var e=this.node.getAttribute("data-tgpli-src");e&&(this.node.src=e),this.node.removeAttribute("data-tgpli-iframe-inited")},showCustom:function(e){var i=this.node.getAttribute("data-tgpli-action");i&&void 0!==t[i]&&"function"==typeof t[i]&&t[i](),this.node.removeAttribute("data-tgpli-custom-inited")},isShowed:function(){return this.showed},initType:function(){if(null==this.data||!0!==this.data.customItem)switch(this.node.nodeName.toUpperCase()){case"IMG":this.type="image";break;case"IFRAME":this.type="iframe";break;default:this.type="default"}else this.type="custom"},getType:function(){return this.type},getGroupNodeInfo:function(){if(null!=this.data&&!0===this.data.customItem)return{node:this.node,type:"custom"};switch(this.getType()){case"image":return this.getImageGroupNode();case"iframe":return{node:this.node.parentNode,type:"iframe"};default:return{node:this.node,type:"default"}}},getImageGroupNode:function(){var t=this.node.id;if(this.node.parentNode.classList.contains("logo"))return{node:this.node.parentNode,type:"logo"};if(t&&null!==e.querySelector("div.gem-client-item #"+t)){if(null===(i=n(this.node,"gem-clients-type-carousel-grid")))var i=n(this.node,"gem_client_carousel-items");if(null!==i)return{node:i,type:"gem-clients"}}if(t&&null!==e.querySelector("#colophon .footer-widget-area #"+t)&&null!==(i=n(this.node,"footer-widget-area")))return{node:i,type:"footer-widget-area"};if((this.node.className&&-1!=this.node.className.indexOf("portfolio")||t&&null!==e.querySelector("div.portfolio #"+t))&&null!==(i=n(this.node,"portfolio")))return{node:i,type:"portfolio"};if(t&&null!==e.querySelector("div.blog #"+t)&&null!==(i=n(this.node,"blog")))return{node:i,type:"blog"};if(t&&null!==e.querySelector("div.gem-gallery-grid #"+t)&&null!==(i=n(this.node,"gem-gallery-grid")))return{node:i,type:"gallery-grid"};if(t&&null!==e.querySelector("div.gem-gallery #"+t)&&null!==(i=n(this.node,"gem-gallery")))return{node:i,type:"gallery"};if(t&&null!==e.querySelector("div.gem-simple-gallery #"+t)&&null!==(i=n(this.node,"gem-simple-gallery")))return{node:i,type:"simple-gallery"};if(t&&null!==e.querySelector("div.gem-slideshow #"+t)&&null!==(i=n(this.node,"gem-slideshow")))return{node:i,type:"gem-slideshow"};if(t&&null!==e.querySelector("div.gem-testimonials #"+t)&&null!==(i=n(this.node,"gem-testimonials")))return{node:i,type:"gem-testimonials"};if(t&&null!==e.querySelector("div.rev_slider_wrapper #"+t)&&null!==(i=n(this.node,"rev_slider_wrapper")))return{node:i,type:"rev_slider"};if(t&&null!==e.querySelector("div.wpb_images_carousel #"+t)&&null!==(i=n(this.node,"wpb_images_carousel")))return{node:i,type:"wpb_images_carousel"};return{node:this.node.parentNode,type:"default"}},imageShowed:function(){var i=this.node.id;i&&null!==e.querySelector("div.caroufredsel_wrapper #"+i)&&t.dispatchEvent(new t.CustomEvent("resize")),void 0!==t.jQuery&&null!==t.jQuery&&void 0!==t.jQuery.waypoints&&null!==t.jQuery.waypoints&&"function"==typeof t.jQuery.waypoints&&t.jQuery.waypoints("refresh")},loaded:function(e){var i=e.getItems();"default"==e.getType()&&1==i.length&&"image"==i[0].getType()&&this.imageShowed(),"wpb_images_carousel"==e.getType()&&e.allItemsLoaded()&&t.dispatchEvent(new t.CustomEvent("resize"))}},u.prototype={init:function(){this.checkEnabled(),this.updateRootScrollTop(),this.updateRootSize(),this.initEvents(),this.initQueueNodes()},checkEnabled:function(){var e,i=(e=navigator.userAgent||navigator.vendor||t.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)));this.enabled=i&&this.options.mobileEnable||!i&&this.options.desktopEnable},isEnabled:function(){return this.enabled},initQueueNodes:function(){void 0!==t.tgpQueue&&this.addNodes(t.tgpQueue.flushNodes())},initEvents:function(){var i=this;s(t,"resize",(function(){i.resizeHandle()}),!0),s(e,"scroll",(function(){i.scrollHandle()}),!0),s(e,"DOMContentLoaded",(function(){i.documentReadyHandle()}),!0)},resizeHandle:function(){var t=this;setTimeout((function(){t.updateRootScrollTop(),t.updateRootSize(),t.updateGroupsPositions(),t.checkGroups()}),0)},scrollHandle:function(){this.visibilityOffsetFixed||(this.visibilityOffsetFixed=!0,this.options.visibilityOffset*=1.5),this.updateRootScrollTop(),this.updateGroupsPositions(),this.checkGroups()},documentReadyHandle:function(){this.collectCustomItems(),this.detectPageScroller(),this.updateRootScrollTop(),this.updateRootSize(),this.updateGroupsPositions(),this.checkGroups()},detectPageScroller:function(){var t=this;this.isPageScroller=e.body.classList.contains("page-scroller"),this.isPageScroller&&s(e,"page-scroller-updated",(function(){t.scrollHandle()}))},hasGroups:function(){return this.groups.length>0},checkGroups:function(){var t=this;!this.checkGroupsProcess&&this.hasGroups()&&(this.checkGroupsProcess=!0,this.groups.forEach((function(e){!e.isShowed()&&e.hasItems()&&t.isVisibleGroup(e)&&t.showGroup(e,!1)})),this.checkGroupsProcess=!1)},isVisibleGroup:function(t){var e=this.getRootPosition(),i=t.getPosition();return null===i||(0!=i.left||0!=i.top||0!=i.width||0!=i.height)&&(i.top-this.options.visibilityOffset<=e.bottom&&i.top+i.height+this.options.visibilityOffset>=e.top)},showGroup:function(t,e){void 0===e&&(e=!1),t.show(e)},showItem:function(t){t.show()},addItem:function(t){this.isEnabled()&&!this.isIgnoreItem(t)?this.getItemGroup(t).addItem(t):this.showItem(t)},getItemGroup:function(t){var e=t.getGroupNodeInfo(),i=this.findGroup(e.node);return null===i&&((i=new r(e.node,e.type)).updatePosition(),(this.isIgnoreGroup(i)||this.isVisibleGroup(i))&&this.showGroup(i,!0),this.groups.push(i)),i},findGroup:function(t){for(var e=0;e<this.groups.length;e++)if(this.groups[e].getNode()==t)return this.groups[e];return null},isIgnoreItem:function(t){return!1},isIgnoreGroup:function(t){return"gem-slideshow"==t.getType()||"rev_slider"==t.getType()},addNodes:function(t){var e=this;t.forEach((function(t){e.addNode(t)}))},addNode:function(t){null!==t.node&&this.addItem(new a(t.node,t.data))},collectItems:function(){var t=this;e.querySelectorAll("img[data-tgpli-image-inited]").forEach((function(e){t.addNode(e)})),e.querySelectorAll(".tgpli-background-inited").forEach((function(e){t.addNode(e)}))},collectCustomItems:function(){var t=this;e.querySelectorAll(".tgpli-custom-item").forEach((function(e){t.addNode({node:e,data:{customItem:!0}})}))},updateGroupsPositions:function(){this.groups.forEach((function(t){t.updatePosition()}))},updateRootScrollTop:function(){this.scrollTop=o()},updateRootSize:function(){this.rootHeight=e.documentElement.clientHeight},getRootPosition:function(){return{top:this.scrollTop,bottom:this.scrollTop+this.rootHeight,height:this.rootHeight}},checkGroupShowed:function(t,e){return!!this.isGroupShowed(t)||(s(t,"tgpliVisible",(function(){e(t)}),!0),!1)},isGroupShowed:function(t){var e=this.findGroup(t);return null===e||e.isShowed()}},t.tgpLazyItems=new u(t.tgpLazyItemsOptions||{})}(window,document);