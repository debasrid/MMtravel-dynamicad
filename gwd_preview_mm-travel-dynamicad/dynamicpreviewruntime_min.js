(function(){var e=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var f=function(a){var b=e(a);if("object"==b||"array"==b){if("function"==e(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=f(a[c]);return b}return a};var g={google_template_data:{adData:[{}]}},h=function(){var a;if(a=(a=/[?&]feed=([^&]*)/.exec(window.location.search))?decodeURIComponent(a[1].replace(/\+/g," ")):""){var b=window.frameElement&&window.frameElement.ownerDocument&&window.frameElement.ownerDocument.defaultView;b?(b=b.gwdPreview&&b.gwdPreview.config)?(b=b.feeds||{},a=b[a]?f(b[a]):null):a=null:a=null}else a=null;return a};var k=function(a,b,c){var d=void 0===d?!1:d;a.addEventListener(b,function l(m){c(m);a.removeEventListener(b,l,d)},d)};k(document,"DOMContentLoaded",function(){if(document.querySelector("gwd-studio-enabler-data-provider")){var a=h();a&&(a=encodeURIComponent(JSON.stringify(a.feed)),Enabler.setAdParameters("layoutsConfig="+a))}});
k(window,"WebComponentsReady",function(){if(document.querySelector("gwd-gpa-data-provider")&&"function"==typeof window.onAdData){var a=h();if(a)window.onAdData(a.feed);else if((a=document.querySelector("gwd-gpa-data-provider"))&&a.hasAttribute("is-custom-schema"))window.onAdData(g)}});}).call(this);
