!function(){"use strict";var e,n,t,d,c,r={},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=r,a.amdO={},e=[],a.O=function(n,t,d,c){if(!t){var r=1/0;for(f=0;f<e.length;f++){t=e[f][0],d=e[f][1],c=e[f][2];for(var o=!0,s=0;s<t.length;s++)(!1&c||r>=c)&&Object.keys(a.O).every((function(e){return a.O[e](t[s])}))?t.splice(s--,1):(o=!1,c<r&&(r=c));if(o){e.splice(f--,1);var i=d();void 0!==i&&(n=i)}}return n}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[t,d,c]},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,t){return a.f[t](e,n),n}),[]))},a.u=function(e){return({141:"490477d6",296:"ea88be26",305:"5e65052d",461:"e82996df",532:"styles",588:"component---src-pages-guides-distribute-index-md",887:"component---src-pages-references-addonsdk-instance-runtime-md",1206:"2dee68d8",1261:"component---src-pages-references-addonsdk-index-md",1549:"component---src-pages-references-addonsdk-app-document-md",1916:"component---src-pages-references-addonsdk-runtime-dialog-md",2227:"component---src-pages-references-addonsdk-instance-client-storage-md",2727:"component---src-pages-guides-getting-started-index-md",3072:"component---src-pages-guides-getting-started-quickstart-md",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3490:"b6f3ea4c",3708:"component---src-pages-references-apireference-copy-md",4079:"component---src-pages-references-addonsdk-instance-manifest-md",4124:"component---src-pages-references-addonsdk-app-ui-md",4257:"component---src-pages-guides-develop-frameworks-libraries-bundling-md",4285:"component---src-pages-guides-getting-started-setup-md",4723:"b19b3968",4733:"component---src-pages-guides-distribute-listing-guide-md",5641:"component---src-pages-references-index-md",5721:"component---src-pages-references-changelog-md",5722:"component---src-pages-guides-develop-cors-md",5811:"component---src-pages-guides-distribute-review-guidelines-md",6094:"component---src-pages-references-manifest-index-md",6233:"component---src-pages-guides-debug-index-md",6248:"component---src-pages-samples-md",6438:"component---src-pages-guides-distribute-monetization-md",6520:"component---src-pages-references-addonsdk-interfaces-md",6530:"f5cc1685",6809:"component---src-pages-guides-distribute-private-dist-md",6874:"component---src-pages-guides-develop-index-md",7012:"component---src-pages-guides-design-index-md",7075:"component---src-pages-references-addonsdk-app-oauth-md",7145:"component---src-pages-guides-getting-started-dev-tooling-md",7442:"component---src-pages-references-addonsdk-addonsdk-md",7602:"c9f1e04f",7688:"component---src-pages-guides-debug-vs-code-md",7714:"8b61fb39",7809:"component---src-pages-guides-design-fonts-md",8074:"component---src-pages-references-addonsdk-addonsdk-app-md",8313:"component---src-pages-guides-design-best-practices-md",8428:"component---src-pages-references-addonsdk-addonsdk-constants-md",8450:"component---src-pages-guides-index-md",8695:"component---src-pages-guides-faq-md",8780:"component---src-pages-guides-debug-known-issues-limitations-md",9251:"1e479c3f",9317:"component---src-pages-guides-distribute-public-dist-md",9327:"component---src-pages-guides-distribute-review-guidelines-backup-md",9351:"commons",9473:"component---src-pages-guides-design-spectrum-md",9965:"component---src-pages-references-addonsdk-addonsdk-instance-md"}[e]||e)+"-"+{141:"57ff9ba7b8bc4e705927",296:"85b5231843b1316c9f21",305:"fbdbaa5368d29c686127",461:"ca9656ecc6f36b01397b",532:"01cdba3dbb4fb85d8f2c",588:"e9433c5cd275af8d0388",732:"9e460655dad862c82796",887:"62c9a348ee8b94f8623a",1206:"04245f8dbc941d7473e4",1261:"6c2a931c9e090a16ddb7",1549:"0da7267b271e490b20c2",1916:"38fd8d69675712ba599c",2227:"ada1f8f6b3488d5fb04f",2727:"6401903d94ee966f4792",3072:"4212b6eb96a65d62f717",3125:"cf2c30d7d39f91be56ff",3490:"aae07414f36e9898d8a3",3708:"ad1005bbcba1445f95b7",4079:"335fa1acbd58f67f6013",4124:"1cdf5b6a8018e13d1c7b",4257:"1cd55326ee108943d170",4285:"1ccc329e72428c202fd3",4574:"3f857991a5a6cfafbe3a",4723:"1a11da7ebf8672ad52ec",4733:"f74d2dbb603c9f8a2744",5641:"c5a834309236bee5b7b2",5721:"eca9da3468a04dc54e47",5722:"f4ebde96f238fb865504",5811:"7b7a4188a4762e6364a6",6008:"31df70f8f7bc24ce9713",6094:"55eeae652fd47ae9d7d4",6233:"8e3de2714f7bd505b78e",6248:"9c43a4ad69eb85d6e779",6438:"4125bda5eb037adfb767",6520:"0f1b2d169e27118137ae",6530:"be5858d6b6992f56a4b5",6809:"24f6a79eb748d4599234",6874:"8b765039fd59b8cf1302",7012:"b55d120f933212712771",7075:"e5b2da0471ed985bde41",7145:"630248b4907843d07e51",7442:"034e4da951c069cb92e5",7602:"f4f15e89c0f479c2a98c",7688:"c8decaf2d11c2c749881",7714:"8c69937d44fb14a4dae8",7809:"9b008fdbb6807511727b",8074:"80cba6f973e0758a75b4",8313:"c6e382b45b207db80898",8428:"561e0b0815fea26351f7",8450:"5c519a32333c9d4ae3df",8695:"857bfbd27b86c3e77fdd",8780:"1d4877388e1eb171734c",9251:"62449a35c2ac11c2b2d1",9317:"5711517b41532e5fc8af",9327:"0424c2f912e20307dccf",9351:"284a2ba3020401933001",9473:"8e57027a6e2e3900cf03",9965:"bb3bce0bc45825b4e720"}[e]+".js"},a.miniCssF=function(e){return"styles.a1fb8bdd6763ae92da34.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="dev-site-documentation-template:",a.l=function(e,d,c,r){if(n[e])n[e].push(d);else{var o,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),f=0;f<i.length;f++){var u=i[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+c){o=u;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+c),o.src=e),n[e]=[d];var p=function(t,d){o.onerror=o.onload=null,clearTimeout(m);var c=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach((function(e){return e(d)})),t)return t(d)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),s&&document.head.appendChild(o)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="/express-add-ons-docs/",d=function(e){return new Promise((function(n,t){var d=a.miniCssF(e),c=a.p+d;if(function(e,n){for(var t=document.getElementsByTagName("link"),d=0;d<t.length;d++){var c=(o=t[d]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===n))return o}var r=document.getElementsByTagName("style");for(d=0;d<r.length;d++){var o;if((c=(o=r[d]).getAttribute("data-href"))===e||c===n)return o}}(d,c))return n();!function(e,n,t,d){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=function(r){if(c.onerror=c.onload=null,"load"===r.type)t();else{var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=a,c.parentNode.removeChild(c),d(s)}},c.href=n,document.head.appendChild(c)}(e,c,n,t)}))},c={6658:0},a.f.miniCss=function(e,n){c[e]?n.push(c[e]):0!==c[e]&&{532:1}[e]&&n.push(c[e]=d(e).then((function(){c[e]=0}),(function(n){throw delete c[e],n})))},function(){var e={6658:0,532:0};a.f.j=function(n,t){var d=a.o(e,n)?e[n]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(532|6658)$/.test(n))e[n]=0;else{var c=new Promise((function(t,c){d=e[n]=[t,c]}));t.push(d[2]=c);var r=a.p+a.u(n),o=new Error;a.l(r,(function(t){if(a.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",o.name="ChunkLoadError",o.type=c,o.request=r,d[1](o)}}),"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,t){var d,c,r=t[0],o=t[1],s=t[2],i=0;if(r.some((function(n){return 0!==e[n]}))){for(d in o)a.o(o,d)&&(a.m[d]=o[d]);if(s)var f=s(a)}for(n&&n(t);i<r.length;i++)c=r[i],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return a.O(f)},t=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),a.nc=void 0}();
//# sourceMappingURL=webpack-runtime-3a84673000f4642d11d3.js.map