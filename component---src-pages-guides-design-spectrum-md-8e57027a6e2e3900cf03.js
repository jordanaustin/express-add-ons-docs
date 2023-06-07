"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9473],{40385:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return h}});var s,n=a(87462),o=a(63366),p=(a(15007),a(64983)),r=a(91515),m=["components"],d={},i=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),c={_frontmatter:d},l=r.Z;function h(e){var t=e.components,a=(0,o.Z)(e,m);return(0,p.mdx)(l,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"introduction-to-spectrum"},"Introduction to Spectrum"),(0,p.mdx)("p",null,"Adobe provides the ",(0,p.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/"},"Spectrum Design System")," which contains a comprehensive set of design guidelines, components and tools to help designers create a consistent user experience across products. It's also available in the following open-source implementations to cover a variety of needs. There are a few different implementations of Spectrum that are listed here for reference and in order of preferred use. Leveraging Spectrum in your add-on allows you to take advantage of all of the built-in benefits it provides while saving front-end development time."),(0,p.mdx)(i,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Check out our ",(0,p.mdx)("a",{parentName:"p",href:"../../samples.md"},"code samples")," for examples of how to use the libraries described here. Refer to the ",(0,p.mdx)("strong",{parentName:"p"},"export-sample")," and ",(0,p.mdx)("strong",{parentName:"p"},"Pix")," sample for a reference on using ",(0,p.mdx)("strong",{parentName:"p"},"Spectrum Web Components"),", and the ",(0,p.mdx)("strong",{parentName:"p"},"Dropbox")," and ",(0,p.mdx)("strong",{parentName:"p"},"import-images-using-oauth")," for specific examples using ",(0,p.mdx)("strong",{parentName:"p"},"React Spectrum"),". "),(0,p.mdx)("h2",{id:"spectrum-web-components"},"Spectrum Web Components"),(0,p.mdx)("p",null,"The ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/"},"Spectrum Web Components")," project is an implementation of Spectrum designed to work with any web framework with a number of benefits, including:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},"Framework agnostic"),(0,p.mdx)("li",{parentName:"ul"},"Lightweight    "),(0,p.mdx)("li",{parentName:"ul"},"Accessible by default "),(0,p.mdx)("li",{parentName:"ul"},"Standards based")),(0,p.mdx)("h3",{id:"spectrum-web-components-with-react"},"Spectrum Web Components with React"),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/using-swc-react/"},(0,p.mdx)("strong",{parentName:"a"},"swc-react"))," is a collection of React wrapper components for the Spectrum Web Components (SWC) library, enabling you to use SWC in your React applications with ease.     "),(0,p.mdx)(i,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"We ",(0,p.mdx)("strong",{parentName:"p"},"highly")," recommend choosing to use Spectrum Web Components (or swc-react) for your add-ons since it currently offers the most comprehensive set of components and built-in benefits. "),(0,p.mdx)("h2",{id:"react-spectrum"},"React Spectrum"),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-spectrum/index.html"},"React Spectrum")," is a project that implements the Adobe's Spectrum design language into React UI components."),(0,p.mdx)("p",null,"  React Spectrum is composed of three parts:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"react-spectrum"),": a component library implementing the Adobe Spectrum design system"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"react-aria"),": a library of React hooks implementing the patterns defined in the ARIA practices spec, including mouse, touch, and keyboard behavior, accessibility, and internationalization support"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"react-stately"),": a library of React hooks implementing cross platform (e.g. web/native) state management for components that need it.")),(0,p.mdx)("h2",{id:"spectrum-css"},"Spectrum CSS"),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-css/"},"Spectrum CSS")," is an open-source implementation of Spectrum and includes components and resources to make applications more cohesive. Spectrum CSS is designed to be used in partnership with ",(0,p.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/"},"Spectrum’s detailed usage guidelines"),"."),(0,p.mdx)(i,{slots:"text",variant:"warning",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"You should only rely on using the base ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-css/"},"Spectrum CSS")," library for simple applications that need basic things like typography, checkboxes, text fields, etc. Otherwise you should try using one of the other implementations provided like ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/"},"Spectrum Web Components")," and ",(0,p.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-spectrum/index.html"},"React Spectrum")," since they include interactivity, event handling etc built-in over what's possible with pure CSS. The best place to start with each of these libraries is to go to the ",(0,p.mdx)("strong",{parentName:"p"},"Getting Started")," page in the top of the docs for each. "),(0,p.mdx)("h3",{id:"spectrum-express-theme"},"Spectrum Express Theme"),(0,p.mdx)("p",null,"If you want your add-on UI to match the ",(0,p.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/page/theming/#Resources-for-Spectrum-for-Adobe-Express"},"Express look-and-feel"),", you can find Express-themed components available within the ",(0,p.mdx)("a",{parentName:"p",href:"https://github.com/adobe/spectrum-css"},"Spectrum CSS"),", ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/tools/theme/"},"Spectrum Web Components")," and ",(0,p.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@react-spectrum/theme-express"},"React Spectrum")," libraries. "),(0,p.mdx)(i,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"The ",(0,p.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@react-spectrum/theme-express"},"React Spectrum Express theme")," is still in an alpha state, but you can use ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/tools/theme/"},"Spectrum Web Components")," with React as well. See the ",(0,p.mdx)("strong",{parentName:"p"},"Pix")," code sample in the provided samples for an example of how to mix Spectrum Web Components with React. Specifically, you should note that there are some intricacies when using this combination of Spectrum Web Components and React in terms of event handling, but they can be handled by using a component that wraps the Spectrum Web Components for providing the event handling instead. In the ",(0,p.mdx)("strong",{parentName:"p"},"Pix")," sample, take a look at the wrapper component called ",(0,p.mdx)("inlineCode",{parentName:"p"},"WC.jsx")," for a reference of how to do this."),(0,p.mdx)("h4",{id:"spectrum-web-components-with-express-theme-steps"},"Spectrum Web Components with Express Theme Steps"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"Install the ",(0,p.mdx)("inlineCode",{parentName:"p"},"spectrum-web-components")," packages you would like to use. The ",(0,p.mdx)("inlineCode",{parentName:"p"},"theme")," package is one you will always want to specify, but the others are being shown for illustration purposes. You can choose which components you will be using in your add-on and install them as needed. See the ",(0,p.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/getting-started/"},"Spectrum Web Components site")," for all of the components available."),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"  npm install @spectrum-web-components/theme\n  npm install @spectrum-web-components/field-label        \n  npm install @spectrum-web-components/textfield\n  npm install @spectrum-web-components/button\n"))),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"Next, start adding your imports. All add-ons should have this base set of imports, which provide support for Spectrum typography, the Express themes, including colors (lightest, light, dark, and darkest) and scale (medium, large). "),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"  import '@spectrum-web-components/styles/typography.css';\n  import '@spectrum-web-components/theme/sp-theme.js';\n  import '@spectrum-web-components/theme/src/express/themes.js';\n  \n")))),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre"},"And then import the specific components you need to use in your code, such as: \n\n\n    import '@spectrum-web-components/button/sp-button.js';\n    import '@spectrum-web-components/field-label/sp-field-label.js';\n    import '@spectrum-web-components/textfield/sp-textfield.js';\n\n\n<InlineAlert slots=\"text\" variant=\"success\"/>\n\nThe `import '@spectrum-web-components/theme/src/express/themes.js';` includes all of the definitions for Express, but you can also only include the specific parts you need. For instance, if you only want to support the light theme and the medium scale, you could specifically include those with:\n    ```import '@spectrum-web-components/theme/express/theme-light.js'; import '@spectrum-web-components/theme/express/scale-medium.js';\n    ``` For more details on themes and all of the color and scale options, see [this link](https://opensource.adobe.com/spectrum-web-components/tools/theme/). \n")),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},"Use a ",(0,p.mdx)("inlineCode",{parentName:"li"},"webpack.config.js")," for bundling the Spectrum Web Components and your JavaScript into a bundle. If you used the basic javascript template for your add-on, you can copy it in from a sample add-on, such as the SWC one in the contributed samples folder. Also be sure to include the webpack specific dependencies and script options in your ",(0,p.mdx)("inlineCode",{parentName:"li"},"package.json"),", which you can also copy from a sample like SWC. If you find that some files aren't being moved to ",(0,p.mdx)("inlineCode",{parentName:"li"},"dist")," after you build, you'll want to edit the file (line 31,32) to add more file types to copy. ")),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"Now you can use the ",(0,p.mdx)("inlineCode",{parentName:"p"},"scale"),", ",(0,p.mdx)("inlineCode",{parentName:"p"},"color")," and ",(0,p.mdx)("inlineCode",{parentName:"p"},"theme")," selections you desire with the ",(0,p.mdx)("inlineCode",{parentName:"p"},"<sp-theme>")," component. Within those tags is where you should place all of your content that you want styled with those settings. For example:"),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},'  <body>\n          <sp-theme scale="medium" color="light" theme="express">   \n              /* Everything you want styled with those settings goes in here */\n              <sp-field-label required for="txtName">Enter your full name in the field below</sp-field-label>\n              <sp-textfield multiline grows id="txtName" placeholder="Full Name"></sp-textfield>\n              <sp-button>Submit</sp-button>\n          </sp-theme>                    \n  </body>\n')))),(0,p.mdx)(i,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Check out the ",(0,p.mdx)("a",{parentName:"p",href:"../../samples.md"},"code samples")," in the contributed folder for ",(0,p.mdx)("strong",{parentName:"p"},"SWC")," and ",(0,p.mdx)("strong",{parentName:"p"},"Pix")," for examples of using Spectrum Web Components with plain JavaScript and React accordingly. "),(0,p.mdx)("h4",{id:"react-spectrum-with-express-theme-steps"},"React Spectrum with Express Theme Steps"),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@react-spectrum/theme-express"},"The React Spectrum Express theme")," is still in alpha stage currently, but can be used with the following steps:"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Install it in your project with:"),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("inlineCode",{parentName:"p"},"npm install @react-spectrum/theme-express"))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Install the express themed icons (optional - if needed):"),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("inlineCode",{parentName:"p"},"npm install @spectrum-icons/express"))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Import the theme and icons into your code to use them. For example, notice the following code snippet which imports and sets the Express ",(0,p.mdx)("inlineCode",{parentName:"p"},"theme"),", light ",(0,p.mdx)("inlineCode",{parentName:"p"},"colorScheme")," option and medium ",(0,p.mdx)("inlineCode",{parentName:"p"},"scale")," option on the ",(0,p.mdx)("inlineCode",{parentName:"p"},"<Provider>")," object. It also illustrates how to use the Express version of the ",(0,p.mdx)("inlineCode",{parentName:"p"},"Delete")," icon.  "),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},'import { theme as expressTheme } from \'@react-spectrum/theme-express\';\nimport Delete from \'@spectrum-icons/express/Delete\';\n\nconst App = ({ addOnSdk }) => {\n    return (\n        <Provider theme={expressTheme} colorScheme="light" scale="medium">\n            <Button variant="accent"><Delete/></Button>  \n        </Provider>       \n    )\n}\n')))),(0,p.mdx)("p",null,"These screenshots are from a React Spectrum app with the theme and icons changed from the default theme, (first screenshot), to the Express theme (second screenshot), to illustrate some differences for reference. Remember the React Spectrum + Express theme is still in alpha, so not all of the components have been completely ported over yet."),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/5530d/default-theme.webp 320w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/0c8fb/default-theme.webp 640w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/94b1e/default-theme.webp 1280w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/0b34d/default-theme.webp 1920w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/d5269/default-theme.webp 2560w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/e1119/default-theme.webp 2918w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/dd4a7/default-theme.png 320w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/0f09e/default-theme.png 640w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/bbbf7/default-theme.png 1280w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/ac7a9/default-theme.png 1920w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/c7a69/default-theme.png 2560w","/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/92fa7/default-theme.png 2918w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/d4eddb595079edb98eacded49e40695c/bbbf7/default-theme.png",alt:"Default theme",title:"Default theme",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/5530d/express-theme.webp 320w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/0c8fb/express-theme.webp 640w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/94b1e/express-theme.webp 1280w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/0b34d/express-theme.webp 1920w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/d5269/express-theme.webp 2560w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/1d76d/express-theme.webp 2912w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/dd4a7/express-theme.png 320w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/0f09e/express-theme.png 640w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/bbbf7/express-theme.png 1280w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/ac7a9/express-theme.png 1920w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/c7a69/express-theme.png 2560w","/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/db055/express-theme.png 2912w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/49d3380d810a05f1dcb5192a6a7d346a/bbbf7/express-theme.png",alt:"Express theme",title:"Express theme",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)(i,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Check out the variety of icons available for use in your add-ons as well from ",(0,p.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/page/icons/"},"Spectrum here"),". There's also a set of icons for the Express theme in an alpha stage currently available. To use those, install the package with ",(0,p.mdx)("inlineCode",{parentName:"p"},"npm i @spectrum-icons/express"),". Then you can use them by importing them. See the above steps for an example of how to import and use an icon. "))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-design-spectrum-md-8e57027a6e2e3900cf03.js.map