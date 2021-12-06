'use strict';(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){function v(a,b,d){function e(a){if(!c.parentNode)return f.off(document,"mousemove",e);c.style.top=Math.max(0,a.clientY-c.offsetHeight-5)+"px";c.style.left=a.clientX+5+"px"}var c=document.createElement("div");c.className="CodeMirror-lint-tooltip cm-s-"+a.options.theme;c.appendChild(d.cloneNode(!0));
a.state.lint.options.selfContain?a.getWrapperElement().appendChild(c):document.body.appendChild(c);f.on(document,"mousemove",e);e(b);null!=c.style.opacity&&(c.style.opacity=1);return c}function w(a){a.parentNode&&(null==a.style.opacity&&a.parentNode&&a.parentNode.removeChild(a),a.style.opacity=0,setTimeout(function(){a.parentNode&&a.parentNode.removeChild(a)},600))}function q(a,b,d,e){function c(){f.off(e,"mouseout",c);g&&(w(g),g=null)}var g=v(a,b,d),m=setInterval(function(){if(g)for(var a=e;;a=a.parentNode){a&&
11==a.nodeType&&(a=a.host);if(a==document.body)return;if(!a){c();break}}if(!g)return clearInterval(m)},400);f.on(e,"mouseout",c)}function x(a,b,d){this.marked=[];this.options=b;this.timeout=null;this.hasGutter=d;this.onMouseOver=function(b){var c=b.target||b.srcElement;if(/\bCodeMirror-lint-mark-/.test(c.className)){c=c.getBoundingClientRect();var d=a.findMarksAt(a.coordsChar({left:(c.left+c.right)/2,top:(c.top+c.bottom)/2},"client"));c=[];for(var e=0;e<d.length;++e){var h=d[e].__annotation;h&&c.push(h)}if(c.length){d=
b.target||b.srcElement;e=document.createDocumentFragment();for(h=0;h<c.length;h++)e.appendChild(r(c[h]));q(a,b,e,d)}}};this.waitingFor=0}function t(a){var b=a.state.lint;b.hasGutter&&a.clearGutter("CodeMirror-lint-markers");for(a=0;a<b.marked.length;++a)b.marked[a].clear();b.marked.length=0}function y(a,b,d,e,c){var g=document.createElement("div"),m=g;g.className="CodeMirror-lint-marker-"+d;e&&(m=g.appendChild(document.createElement("div")),m.className="CodeMirror-lint-marker-multiple");if(0!=c)f.on(m,
"mouseover",function(c){q(a,c,b,m)});return g}function r(a){var b=a.severity;b||(b="error");var d=document.createElement("div");d.className="CodeMirror-lint-message-"+b;"undefined"!=typeof a.messageHTML?d.innerHTML=a.messageHTML:d.appendChild(document.createTextNode(a.message));return d}function z(a,b,d){function e(){g=-1;a.off("change",e)}var c=a.state.lint,g=++c.waitingFor;a.on("change",e);b(a.getValue(),function(b,d){a.off("change",e);c.waitingFor==g&&(d&&b instanceof f&&(b=d),a.operation(function(){n(a,
b)}))},d,a)}function l(a){var b=a.state.lint.options,d=b.options||b,e=b.getAnnotations||a.getHelper(f.Pos(0,0),"lint");if(e)if(b.async||e.async)z(a,e,d);else{var c=e(a.getValue(),d,a);c&&(c.then?c.then(function(b){a.operation(function(){n(a,b)})}):a.operation(function(){n(a,c)}))}}function n(a,b){t(a);for(var d=a.state.lint,e=d.options,c=[],g=0;g<b.length;++g){var f=b[g],h=f.from.line;(c[h]||(c[h]=[])).push(f)}for(g=0;g<c.length;++g)if(f=c[g]){h=null;for(var n=d.hasGutter&&document.createDocumentFragment(),
l=0;l<f.length;++l){var k=f[l],p=k.severity;p||(p="error");"error"!=h&&(h=p);e.formatAnnotation&&(k=e.formatAnnotation(k));d.hasGutter&&n.appendChild(r(k));k.to&&d.marked.push(a.markText(k.from,k.to,{className:"CodeMirror-lint-mark-"+p,__annotation:k}))}d.hasGutter&&a.setGutterMarker(g,"CodeMirror-lint-markers",y(a,n,h,1<f.length,d.options.tooltips))}if(e.onUpdateLinting)e.onUpdateLinting(b,c,a)}function u(a){var b=a.state.lint;b&&(clearTimeout(b.timeout),b.timeout=setTimeout(function(){l(a)},b.options.delay||
500))}f.defineOption("lint",!1,function(a,b,d){d&&d!=f.Init&&(t(a),!1!==a.state.lint.options.lintOnChange&&a.off("change",u),f.off(a.getWrapperElement(),"mouseover",a.state.lint.onMouseOver),clearTimeout(a.state.lint.timeout),delete a.state.lint);if(b){var e=a.getOption("gutters");d=!1;for(var c=0;c<e.length;++c)"CodeMirror-lint-markers"==e[c]&&(d=!0);e=a.state;b instanceof Function?b={getAnnotations:b}:b&&!0!==b||(b={});d=e.lint=new x(a,b,d);if(!1!==d.options.lintOnChange)a.on("change",u);if(0!=
d.options.tooltips&&"gutter"!=d.options.tooltips)f.on(a.getWrapperElement(),"mouseover",d.onMouseOver);l(a)}});f.defineExtension("performLint",function(){this.state.lint&&l(this)})});
