"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8035],{18107:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return b}});var d=t(87462),s=t(63366),n=(t(15007),t(64983)),o=t(91515),i=["components"],r={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",a)}},p=l("Hero"),m=l("InlineAlert"),c=l("Resources"),x=l("DiscoverBlock"),u=l("TitleBlock"),f=l("TextBlock"),g={_frontmatter:r},h=o.Z;function b(e){var a=e.components,t=(0,s.Z)(e,i);return(0,n.mdx)(h,(0,d.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(p,{slots:"heading, text",background:"rgb(64, 34, 138)",mdxType:"Hero"}),(0,n.mdx)("h1",{id:"adobe-express-add-on-documentation"},"Adobe Express Add-on Documentation"),(0,n.mdx)("p",null,"Adobe Express add-ons allow developers to extend the Adobe Express core functionality, unlocking new capabilities and creative features, all while leveraging familiar web technologies like JavaScript, HTML and CSS."),(0,n.mdx)(m,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"These docs are for Adobe Express add-on APIs which are still in private beta. ",(0,n.mdx)("a",{parentName:"p",href:"https://airtable.com/shr3IK38z2MCNHJEm"},"Join the waitlist")),(0,n.mdx)(c,{slots:"heading, links",mdxType:"Resources"}),(0,n.mdx)("h4",{id:"quick-links"},"Quick Links"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"getting_started/"},"Getting Started")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"references/"},"References")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/express-add-on-samples"},"Samples"))),(0,n.mdx)(x,{width:"100%",slots:"heading, text",mdxType:"DiscoverBlock"}),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This guide covers everything you need to know to get started building add-ons for the beta version of Adobe Express. At a high level, add-ons refer to any feature distributed independently from the core product that a user can enable or install to extend the capabilities of the core product. Typically, add-ons will be created by 3rd party developers, however, there will also be scenarios where Adobe will be creating and distributing our own add-ons. These docs are available to provide you with all of the information you need to get set up and well on your way to developing your own add-ons for Adobe Express. Please see the ",(0,n.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/express/using/express-overview.html"},"main help guides")," for more information and frequently asked questions about Adobe Express."),(0,n.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,n.mdx)("p",null,"The new beta version of Adobe Express enables a new add-ons feature, which extends Adobe Express to provide maximum flexibility for using Web technologies to create and share assets. These add-ons are  self-contained and available in a new add-ons panel to enhance the end user's projects. Some examples of features which an add-on may contain include:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Importing images and video"),(0,n.mdx)("li",{parentName:"ul"},"Exporting renditions of images in different formats"),(0,n.mdx)("li",{parentName:"ul"},"Connecting to external sources via OAuth 2.0"),(0,n.mdx)("li",{parentName:"ul"},"Storing and retrieving data"),(0,n.mdx)("li",{parentName:"ul"},"Dragging and dropping of content"),(0,n.mdx)("li",{parentName:"ul"},"Retrieving manifest data"),(0,n.mdx)("li",{parentName:"ul"},"Managing language and locale"),(0,n.mdx)("li",{parentName:"ul"},"Retrieving the current theme and detecting theme changes")),(0,n.mdx)(u,{slots:"heading, text",mdxType:"TitleBlock"}),(0,n.mdx)("h3",{id:"featured-topics"},"Featured Topics"),(0,n.mdx)("p",null,"Check out these featured topics below and learn something new today!"),(0,n.mdx)(f,{slots:"image, heading, text, buttons",width:"33%",mdxType:"TextBlock"}),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"826px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.12500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/5530d/hello.webp 320w","/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/0c8fb/hello.webp 640w","/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/ed12e/hello.webp 826w"],sizes:"(max-width: 826px) 100vw, 826px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/dd4a7/hello.png 320w","/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/0f09e/hello.png 640w","/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/e5adc/hello.png 826w"],sizes:"(max-width: 826px) 100vw, 826px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/d76323779d6ba7577b56952dfdd310e5/e5adc/hello.png",alt:"Get started",title:"Get started",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h3",{id:"getting-started"},"Getting Started"),(0,n.mdx)("p",null,"Start building your first app now by heading over to our Getting Started section."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"getting_started/"},"Getting Started"))),(0,n.mdx)(f,{slots:"image, heading, text, buttons",width:"33%",mdxType:"TextBlock"}),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/express-add-ons-docs/assets/b904dfb566abddf13d788457d6c89e8f/collage.svg",alt:"Collage"})),(0,n.mdx)("h3",{id:"api-reference"},"API Reference"),(0,n.mdx)("p",null,"Gain inspiration and learn what capabilities are possible by checking out our API References and Code Samples."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"references/"},"API References")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"guides/develop/samples.md"},"Code Samples"))),(0,n.mdx)(f,{slots:"image, heading, text, buttons",width:"33%",mdxType:"TextBlock"}),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/5530d/hello-world.webp 320w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/0c8fb/hello-world.webp 640w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/94b1e/hello-world.webp 1280w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/0b34d/hello-world.webp 1920w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/d5269/hello-world.webp 2560w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/09bcd/hello-world.webp 2952w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/dd4a7/hello-world.png 320w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/0f09e/hello-world.png 640w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/bbbf7/hello-world.png 1280w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/ac7a9/hello-world.png 1920w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/c7a69/hello-world.png 2560w","/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/e3e42/hello-world.png 2952w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/fcefad9198ea747a51d3015af9aa65fd/bbbf7/hello-world.png",alt:"Hello World",title:"Hello World",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h3",{id:"developer-guides"},"Developer Guides"),(0,n.mdx)("p",null,"Head on over to our developer guides where you will find specific content to help you with each stage of your development journey, including designing, debugging and distributing your add-ons."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"guides/"},"Developer Guides"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-md-aada125eff6291b792b1.js.map