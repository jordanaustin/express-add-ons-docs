"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7688],{24389:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return b}});var s=t(87462),d=t(45987),n=(t(15007),t(64983)),o=t(91515);const c=["components"],i={},p={_frontmatter:i},r=o.Z;function b(e){let{components:a}=e,t=(0,d.Z)(e,c);return(0,n.mdx)(r,(0,s.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"debugging-with-visual-studio-code"},"Debugging with Visual Studio Code"),(0,n.mdx)("p",null,"If you are a Visual Studio Code user, you can easily debug your add-on by following the steps in this guide."),(0,n.mdx)("h2",{id:"steps"},"Steps"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Begin by locating the existing ",(0,n.mdx)("inlineCode",{parentName:"p"},"launch.json")," file in the ",(0,n.mdx)("inlineCode",{parentName:"p"},".vscode")," folder in the root of your project. This file will exist if you have created your add-on with the add-on CLI. Double check to ensure the URL points to ",(0,n.mdx)("inlineCode",{parentName:"p"},"https://new.express.adobe.com/new/"),"."),(0,n.mdx)("p",{parentName:"li"},"  ",(0,n.mdx)("strong",{parentName:"p"},"NOTE:")," If it's a sample add-on that you downloaded, you may need to create one first with the ",(0,n.mdx)("strong",{parentName:"p"},"create a launch.json file"),"."),(0,n.mdx)("p",{parentName:"li"},"  ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/5530d/new-launch-json.webp 320w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/0c8fb/new-launch-json.webp 640w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/94b1e/new-launch-json.webp 1280w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/0b34d/new-launch-json.webp 1920w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/54a31/new-launch-json.webp 2042w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/dd4a7/new-launch-json.png 320w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/0f09e/new-launch-json.png 640w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/bbbf7/new-launch-json.png 1280w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/ac7a9/new-launch-json.png 1920w","/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/de34d/new-launch-json.png 2042w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/41bc2a2314b268d3b0b782b49d03c243/bbbf7/new-launch-json.png",alt:"New launch.json file option",title:"New launch.json file option",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",{parentName:"li"},"Then copy in the JSON configuration included below (or copy one in from an add-on you previously generated)."),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{        \n  "version": "0.1.0",\n  "configurations": [\n      {\n          "type": "chrome",\n          "request": "launch",\n          "name": "Debug(Chrome) Add-On",\n          "webRoot": "${workspaceFolder}",\n\n          /**\n          * For add-ons which donot specify the mappings automatically,\n          * user will be required to secify the mappings under pathMapping property.\n          */\n\n          "pathMapping": {\n              "index.html": "${workspaceFolder}/src/index.html"\n          },\n\n          /**\n          * This will be the link of the document where the add-on is hosted\n          * or the url of the new document where you want to load the add-on\n          */\n          "url": "https://new.express.adobe.com/new/"\n      },\n      {\n          "type": "msedge",\n          "request": "launch",\n          "name": "Debug(MS Edge) Add-On",\n          "webRoot": "${workspaceFolder}",\n\n          /**\n          * For add-ons which donot specify the mappings automatically,\n          * user will be required to secify the mappings under pathMapping property.\n          */\n\n          "pathMapping": {\n              "index.html": "${workspaceFolder}/src/index.html"\n          },\n\n          /**\n          * This will be the link of the document where the add-on is hosted\n          * or the url of the new document where you want to load the add-on\n          */\n          "url": "https://new.express.adobe.com/new/"\n      }\n  ]\n}\n'))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Start your add-on from your terminal as normal with ",(0,n.mdx)("inlineCode",{parentName:"p"},"npm run start"),".")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Back in VS Code, click the ",(0,n.mdx)("strong",{parentName:"p"},"Run and Debug")," option from the left panel and then select the profile related to where you want to debug (note that Chrome is the first one and selected by default but you can modify your configuration in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"launch.json")," to your liking)."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/5530d/vscode-debug-option.webp 320w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/0c8fb/vscode-debug-option.webp 640w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/94b1e/vscode-debug-option.webp 1280w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/0b34d/vscode-debug-option.webp 1920w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/d5269/vscode-debug-option.webp 2560w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/78da9/vscode-debug-option.webp 2941w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/dd4a7/vscode-debug-option.png 320w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/0f09e/vscode-debug-option.png 640w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/bbbf7/vscode-debug-option.png 1280w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/ac7a9/vscode-debug-option.png 1920w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/c7a69/vscode-debug-option.png 2560w","/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/7e110/vscode-debug-option.png 2941w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/ecd5abbfb7dcd71ab7315500567f35be/bbbf7/vscode-debug-option.png",alt:"launch.json file",title:"launch.json file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"440px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/2c6679ccc317ec19cf7ad826dc332f52/5530d/launch-profiles.webp 320w","/express-add-ons-docs/static/2c6679ccc317ec19cf7ad826dc332f52/0218a/launch-profiles.webp 440w"],sizes:"(max-width: 440px) 100vw, 440px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/2c6679ccc317ec19cf7ad826dc332f52/dd4a7/launch-profiles.png 320w","/express-add-ons-docs/static/2c6679ccc317ec19cf7ad826dc332f52/7c5f7/launch-profiles.png 440w"],sizes:"(max-width: 440px) 100vw, 440px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/2c6679ccc317ec19cf7ad826dc332f52/7c5f7/launch-profiles.png",alt:"launch profiles",title:"launch profiles",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Once you have your selection set from above, simply hit the green play button outlined below to start debugging."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.06250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/5530d/start-debug.webp 320w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/0c8fb/start-debug.webp 640w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/94b1e/start-debug.webp 1280w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/0b34d/start-debug.webp 1920w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/d5269/start-debug.webp 2560w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/d07c8/start-debug.webp 2998w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/dd4a7/start-debug.png 320w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/0f09e/start-debug.png 640w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/bbbf7/start-debug.png 1280w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/ac7a9/start-debug.png 1920w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/c7a69/start-debug.png 2560w","/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/5febb/start-debug.png 2998w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/9f0b1582a463c193a94e42626cb85ac7/bbbf7/start-debug.png",alt:"start debugging",title:"start debugging",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"A new browser window will open for your debugging session directly to the Express URL you configured above. Connect to your add-on as you normally would in Express.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"You can now set breakpoints as desired, and you will see the code execution stop with the line highlighted. You can also check the ",(0,n.mdx)("strong",{parentName:"p"},"DEBUG CONSOLE")," window to see any console output directly in VS Code."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/5530d/debugging.webp 320w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/0c8fb/debugging.webp 640w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/94b1e/debugging.webp 1280w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/0b34d/debugging.webp 1920w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/d5269/debugging.webp 2560w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/d07c8/debugging.webp 2998w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/dd4a7/debugging.png 320w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/0f09e/debugging.png 640w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/bbbf7/debugging.png 1280w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/ac7a9/debugging.png 1920w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/c7a69/debugging.png 2560w","/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/5febb/debugging.png 2998w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/819172d44c520c879c1573106dcead95/bbbf7/debugging.png",alt:"debugging screenshot",title:"debugging screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Note the toolbar added to the top of your screen in VS Code when you're in debug mode which allows you to step through your code after it's been stopped on a breakpoint."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/5530d/debugger-tool.webp 320w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/0c8fb/debugger-tool.webp 640w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/94b1e/debugger-tool.webp 1280w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/0b34d/debugger-tool.webp 1920w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/d5269/debugger-tool.webp 2560w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/42ca8/debugger-tool.webp 3000w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/dd4a7/debugger-tool.png 320w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/0f09e/debugger-tool.png 640w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/bbbf7/debugger-tool.png 1280w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/ac7a9/debugger-tool.png 1920w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/c7a69/debugger-tool.png 2560w","/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/49142/debugger-tool.png 3000w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/4db7d34e518521083c663293b17cb11f/bbbf7/debugger-tool.png",alt:"debugging tools",title:"debugging tools",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-debug-vs-code-md-e3b794db3d9578fe20f0.js.map