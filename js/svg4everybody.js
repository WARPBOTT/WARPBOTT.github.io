!function(e,n,t,o){o&&e.addEventListener("DOMContentLoaded",(function(){[].forEach.call(e.querySelectorAll("use"),(function(n){var o=n.parentNode,r=n.getAttribute("xlink:href").split("#"),a=r[0],l=r[1],s=t[a]=t[a]||new XMLHttpRequest;s.s||(s.s=[],s.open("GET",a),s.onload=function(){var n=e.createElement("x"),t=s.s;n.innerHTML=s.responseText,s.onload=function(){t.splice(0).map((function(e){var t=n.querySelector("#"+e[2]);t&&e[0].replaceChild(t.cloneNode(!0),e[1])}))},s.onload()},s.send()),s.s.push([o,n,l]),s.responseText&&s.onload()}))}))}(document,navigator,{},/Trident\/[567]\b/.test(navigator.userAgent));