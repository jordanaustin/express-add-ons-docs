"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1631],{85847:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return u}});var o=t(87462),a=t(45987),r=(t(15007),t(64983)),s=t(91515);const i=["components"],c={},l=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var d;const p={_frontmatter:c},m=s.Z;function u(e){let{components:n}=e,t=(0,a.Z)(e,i);return(0,r.mdx)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"lesson-2-use-spectrum-web-components-in-a-react-based-add-on"},"Lesson 2: Use Spectrum Web Components in a React-based add-on"),(0,r.mdx)("p",null,"Learn how to configure and use Spectrum Web Components in a ReactJS add-on."),(0,r.mdx)("h2",{id:"introduction"},"Introduction"),(0,r.mdx)("p",null,"In this lesson, you will implement the bingo card generator add-on in a React-based project with a library called ",(0,r.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/using-swc-react/"},(0,r.mdx)("strong",{parentName:"a"},"swc-react")),", a collection of wrapper components designed to make Spectrum Web Components (SWC) work like native React components in a React application. They serve as a bridge between React and Spectrum Web Components, and their properties and event names are directly derived from their corresponding SWC components. As such, the corresponding ",(0,r.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/"},"Spectrum Web Components documentation")," can be used as the documentation reference."),(0,r.mdx)(l,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"We recommend using ",(0,r.mdx)("strong",{parentName:"p"},"swc-react")," over ",(0,r.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-spectrum/index.html"},(0,r.mdx)("strong",{parentName:"a"},"React Spectrum"))," currently since the Spectrum Web Components library provides a more extensive set of components with an explicit Express theme that is continuously updated. React Spectrum’s Express theme is in alpha, doesn't have full component coverage, and is currently not being updated. Please note, however, that ",(0,r.mdx)("a",{parentName:"p",href:"https://s2.spectrum.adobe.com/"},"a new version of Spectrum")," will be released sometime this year, and an update to the React Spectrum libraries will follow. In the meantime we recommend using the swc-react wrappersx."),(0,r.mdx)("h2",{id:"steps"},"Steps"),(0,r.mdx)("h3",{id:"create-project"},"Create project"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create a new project with the CLI based on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-javascript")," template:"),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"npx @adobe/create-ccweb-add-on bingo-card-generator-react --template react-javascript"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Open the project in your favorite code editor and navigate to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/App.jsx")," file. Notice that it's preconfigured with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react/theme")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react/button")," packages and their associated imports, with a basic usage. If you run the project at this point, you should see the button show up in your add-on:"),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.93750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/5530d/react-starter.webp 320w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/0c8fb/react-starter.webp 640w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/94b1e/react-starter.webp 1280w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/0b34d/react-starter.webp 1920w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/d5269/react-starter.webp 2560w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/fa9c2/react-starter.webp 2736w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/dd4a7/react-starter.png 320w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/0f09e/react-starter.png 640w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/bbbf7/react-starter.png 1280w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/ac7a9/react-starter.png 1920w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/c7a69/react-starter.png 2560w","/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/9cf20/react-starter.png 2736w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/5d52eeae67802ea89387232766566ee8/bbbf7/react-starter.png",alt:"Basic react add-on screenshot",title:"Basic react add-on screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",{parentName:"li"},"Take a moment to get familiar with what's included in the generated project before moving on. Notice it's pre-configured for webpack, so you don't have to do those configuration steps you had to do in lesson 1 for the basic JavaScript project."))),(0,r.mdx)("h3",{id:"install-swc-react-components"},"Install swc-react components"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Next, start installing the UI components to your new add-on project for use. These components are installed in a similar fashion to how you installed the Spectrum Web Components to lesson 1, via ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm install")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn add"),", with just a change to the package prefix, from ",(0,r.mdx)("inlineCode",{parentName:"p"},"@spectrum-web-components")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react"),". Remember, the ",(0,r.mdx)("strong",{parentName:"p"},"@swc-react/button")," and ",(0,r.mdx)("strong",{parentName:"p"},"@swc-react/theme")," components were already included in the project generated by the template, so you can skip those."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @swc-react/button-group@0.39.4 @swc-react/field-label@0.39.4 @swc-react/menu@0.39.4 @swc-react/picker@0.39.4 @swc-react/slider@0.39.4 @swc-react/swatch@0.39.4 @swc-react/switch@0.39.4\n")),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"NOTE:")," The above command specifies the ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.39.4")," version specifically, due to an issue found with compatibility using the latest default version ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.40.3")," as of this writing."),(0,r.mdx)("p",{parentName:"li"},"Alternatively, replace the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dependencies")," block in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file with the following, and then run ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm install")," to install them all at once:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n        "@swc-react/button": "0.39.4",\n        "@swc-react/button-group": "0.39.4",        \n        "@swc-react/field-label": "0.39.4",\n        "@swc-react/menu": "0.39.4",\n        "@swc-react/picker": "0.39.4",\n        "@swc-react/slider": "0.39.4",\n        "@swc-react/swatch": "0.39.4",\n        "@swc-react/switch": "0.39.4",        \n        "@swc-react/theme": "0.39.4",\n        "react": "18.2.0",\n        "react-dom": "18.2.0"\n},    \n')))),(0,r.mdx)(l,{slots:"text",variant:"warning",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"IMPORTANT:")," You must ensure ",(0,r.mdx)("strong",{parentName:"p"},"the versions of all of the @swc-react component packages installed are the same,")," or you will see errors upon build or while running. You can open your ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file to double check to ensure they all match before moving on."),(0,r.mdx)("h3",{id:"import-swc-react-components"},"Import swc-react components"),(0,r.mdx)("p",null,"In this step you will add the UI component imports for the bingo card generator add-on. The pattern of the imports will follow in a similar manner to what was included in the generated project for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Button")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Theme"),". "),(0,r.mdx)("p",null,"As a tip, you can use the ",(0,r.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/"},"Spectrum Web Components Reference")," for the corresponding component, and in the ",(0,r.mdx)("strong",{parentName:"p"},"Usage")," section you will see that the third import uses the class name for the component, which is what you will need, as well as the specific package to use, it will just be prefixed with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react")," instead. "),(0,r.mdx)("p",null,"So, for example, the first import is for the ",(0,r.mdx)("strong",{parentName:"p"},"Button Group")," component. If you look at the ",(0,r.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/components/button-group/#usage"},"Spectrum Web Components - Button Group Usage"),", the last import definition shows ",(0,r.mdx)("inlineCode",{parentName:"p"},"import { ButtonGroup } from '@spectrum-web-components/button-group';"),". It's outlined in the image below for visual reference:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/5530d/swc-button-group-import.webp 320w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/0c8fb/swc-button-group-import.webp 640w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/94b1e/swc-button-group-import.webp 1280w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/0b34d/swc-button-group-import.webp 1920w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/d5269/swc-button-group-import.webp 2560w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/65424/swc-button-group-import.webp 2726w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/dd4a7/swc-button-group-import.png 320w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/0f09e/swc-button-group-import.png 640w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/bbbf7/swc-button-group-import.png 1280w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/ac7a9/swc-button-group-import.png 1920w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/c7a69/swc-button-group-import.png 2560w","/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/64865/swc-button-group-import.png 2726w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/8519e3900e5aa49319d0fb54390664c1/bbbf7/swc-button-group-import.png",alt:"ButtonGroup import from SWC reference",title:"ButtonGroup import from SWC reference",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"        "),(0,r.mdx)("p",null,"You can simply copy that import from the reference for any given component you want to use in your add-on, and just change the prefix from ",(0,r.mdx)("inlineCode",{parentName:"p"},"@spectrum-web-components")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react"),". (Notice the existing imports for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Button")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Theme"),"). The resulting import to use in your add-on would be:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"import { ButtonGroup } from '@swc-react/button-group';"),". "),(0,r.mdx)("p",null,"You can then use this same pattern for all of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@swc-react")," wrapper components you want to use."),(0,r.mdx)("p",null,"The imports needed for the bingo card generator add-on sample are listed below for you to copy into your ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/App.jsx")," file, along with the existing ",(0,r.mdx)("inlineCode",{parentName:"p"},"Button")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Theme")," imports:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"```js\nimport { ButtonGroup } from '@swc-react/button-group';\nimport { FieldLabel } from '@swc-react/field-label';\nimport { MenuItem } from '@swc-react/menu';\nimport { Picker } from '@swc-react/picker';\nimport { Slider } from '@swc-react/slider';\nimport { Swatch } from '@swc-react/swatch';\nimport { Switch } from \"@swc-react/switch\";\n```\n")),(0,r.mdx)("h3",{id:"create-event-helper-class"},"Create event helper class"),(0,r.mdx)("p",null,"Next you'll need to create a new class to handle a known issue where React events and web components don't always work well together.  See ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/19846"},"this issue for more details"),". The issue is most often seen in the case of the React ",(0,r.mdx)("inlineCode",{parentName:"p"},"onChange")," event, and the events won't properly fire. An option to work around this is to create a helper class that will automatically register the native browser version of the events for the components to ensure they are properly fired. "),(0,r.mdx)("p",null,"Create a new helper class in a file named ",(0,r.mdx)("inlineCode",{parentName:"p"},"WC.jsx")," in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components")," folder, then copy in the block of code below and save it. "),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," this class is also included in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/hollyschinsky/bingo-card-generator-js-react"},"lesson 2 final project")," if you want to copy it in from there instead."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nexport class WC extends React.Component {\n    constructor(props) {\n        super(props);\n        this.el = React.createRef();\n        this.handleEvent = this.handleEvent.bind(this);\n    }\n\n    handleEvent(evt) {\n        const propName = `on${evt.type[0].toUpperCase()}${evt.type.substr(1)}`;\n        if (this.props[propName]) {\n            this.props[propName].call(evt.target, evt);\n        }\n    }\n\n    componentDidMount() {\n        const el = this.el.current;\n        const eventProps = Object.entries(this.props).filter(([k,v]) => k.startsWith("on"));\n        eventProps.forEach(([k,v]) => el.addEventListener(k.substr(2).toLowerCase(), this.handleEvent));\n    }\n\n    componentWillUnmount() {\n        const el = this.el.current;\n        const eventProps = Object.entries(this.props).filter(([k,v]) => k.startsWith("on"));\n        eventProps.forEach(([k,v]) => el.removeEventListener(k.substr(2).toLowerCase(), this.handleEvent));\n    }\n\n    render() {\n        const filteredProps = Object.fromEntries(Object.entries(this.props).filter(([k,v]) => !k.startsWith("on")));\n        return <div ref={this.el} {...filteredProps}>{this.props.children}</div>\n    }\n}\n')),(0,r.mdx)("p",null,"Now, go back into your ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/App.jsx")," and import your new ",(0,r.mdx)("inlineCode",{parentName:"p"},"WC")," helper class under the ",(0,r.mdx)("inlineCode",{parentName:"p"},"React")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"App.css")," imports, for instance:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'```js\nimport React, { useState, useRef } from "react";\nimport "./App.css";\nimport { WC } from "./WC.jsx";\n```\n')),(0,r.mdx)("h3",{id:"build-ui-with-swc-react-components"},"Build UI with swc-react components"),(0,r.mdx)("p",null,"At this point you are ready to start using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"swc-react")," components. You'll also wrap some with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<WC>")," helper class as needed to handle events appropriately. Open your ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/App.jsx")," file and replace the current ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Theme>")," block in the UI section with the following block:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'```html\n<Theme theme="express" scale="medium" color="light">\n    <div className="container">\n        <div className="row gap-20">             \n            <div className="column">\n                <FieldLabel size="l">Background color</FieldLabel>\n                <WC onChange={onBgColorClick}>\n                    <Swatch className="color-well" color={bgColorSwatch}></Swatch>\n                </WC>\n                <input ref={bgColorInput} type="color" style={{display: "none"}}\n                    value={bgColor} onChange={onBgColorChange}\n                />\n            </div>\n            <div className="column">\n                <FieldLabel size="l">Number color</FieldLabel>\n                <WC onChange={onFgColorClick}>\n                    <Swatch className="color-well" color={fgColorSwatch}></Swatch>\n                </WC>\n                <input ref={fgColorInput} type="color" style={{display: "none"}}\n                    value={fgColor} onChange={onFgColorChange}\n                />                        \n            </div>                                                       \n            <div className="column">\n                <FieldLabel size="l">Title color</FieldLabel>\n                <WC onChange={onTitleColorClick}>\n                    <Swatch className="color-well" color={titleColorSwatch}></Swatch>\n                </WC>\n                <input ref={titleColorInput} type="color" style={{display: "none"}}\n                    value ={titleColor} onChange={onTitleColorChange}\n                />                    \n            </div>                                \n        </div>\n        <div className="row gap-20">\n            <div className="column margin-top-10">\n                <FieldLabel size="l">Font Weight</FieldLabel>\n                <Picker size="m" value={fontWeightPicker} \n                    change={event => setFontWeightPicker(event.target.value)}>\n                    <MenuItem value="normal">Normal</MenuItem>                        \n                    <MenuItem value="bold">Bold</MenuItem>                            \n                    <MenuItem value="lighter">Lighter</MenuItem>                \n                </Picker>\n            </div>  \n            <div className="column">\n                <WC onChange={event => setFreeSpaceToggle(event.target.checked)}>\n                    <Switch emphasized checked={freeSpaceToggle} size="l">Free space</Switch>\n                </WC>\n            </div>         \n        </div>\n        <div className="row gap-20">                                \n            <WC onChange={event => setGridlineSize(event.target.value)}>\n                <Slider label="Gridlines size" variant="filled" editable value={gridlineSize}\n                    hide-stepper min="1" max="10"\n                    format-options=\'{"style": "unit", "unit": "px"}\' step="1">\n                </Slider>\n            </WC>                                 \n            <div className="column">\n                <FieldLabel size="l">Color</FieldLabel>\n                <WC onChange={onGridColorClick}>\n                    <Swatch className="color-well" color={gridColorSwatch}></Swatch>\n                </WC>\n                <input ref={gridColorInput} type="color" style={{display: "none"}}\n                    value={gridColor} onChange={onGridColorChange}\n                />\n            </div>                    \n        </div>                 \n        <div>\n            <ButtonGroup horizontal>\n                <Button onClick={generateBingoCard}>Generate card</Button>\n                <Button onClick={handleAddToPage} disabled={!addToPageEnabled} variant="secondary">Add to page</Button>\n            </ButtonGroup>              \n        </div>                \n        <div className="margin-top-10">                        \n            <canvas ref={bingoCanvas}/>            \n        </div> \n    </div>                                        \n</Theme>\n```\n\nNote the use of the `<WC>..</WC>` component created in the previous step to wrap the `swc-react` components to ensure the events are are properly fired.\n')),(0,r.mdx)("h3",{id:"wire-ui-code-and-add-canvas-drawing-logic"},"Wire UI code and add canvas drawing logic"),(0,r.mdx)("p",null,"If you tried to run your add-on at this point, you would get a blank UI, and a check of the devtools console would reveal errors, since the UI components added above call functions that don't exist yet. So next you will add the logic to enable the UI components to work in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/App.jsx"),". (In a typical project you would probably have more of a separation of concerns with your code rather that everything in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"App.jsx"),", but for the purposes of this lesson, it will suffice)."),(0,r.mdx)("p",null,"Replace the current logic for the original button component in the top of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"App")," class before the ",(0,r.mdx)("inlineCode",{parentName:"p"},"return (...)")," with the code below. You can also reference the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/hollyschinsky/bingo-card-generator-react-js/blob/master/src/components/App.jsx"},(0,r.mdx)("inlineCode",{parentName:"a"},"App.jsx")," file of the final project")," for reference if you have any trouble:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'```js\n// State variables to hold component values\nconst [bgColor, setBgColor] = useState("#f2f2f2");\nconst [bgColorSwatch, setBgColorSwatch] = useState("#f2f2f2");\n\nconst [fgColor, setFgColor] = useState("#5258e5");\nconst [fgColorSwatch, setFgColorSwatch] = useState("#5258e5");\n\nconst [titleColor, setTitleColor] = useState("#000000");\nconst [titleColorSwatch, setTitleColorSwatch] = useState("#000000");\n\nconst [gridColor, setGridColor] = useState("#5258e5");\nconst [gridColorSwatch, setGridColorSwatch] = useState("#5258e5");\n\nconst [fontWeightPicker, setFontWeightPicker] = useState("normal");\nconst [freeSpaceToggle, setFreeSpaceToggle] = useState(true);\nconst [gridlineSize, setGridlineSize] = useState(5);\nconst [addToPageEnabled, setAddToPageEnabled] = useState(false);\n\n// Refs to the UI elements for colors, add button and HTML canvas\nconst fgColorInput = useRef(null);\nconst bgColorInput = useRef(null);\nconst gridColorInput = useRef(null);\nconst titleColorInput = useRef(null);\nconst bingoCanvas = useRef(null);\n\n// Function to generate the bingo card using an HTML canvas and drawing context \nfunction generateBingoCard() {              \n    const ctx = bingoCanvas.current.getContext("2d");\n\n    // Set canvas width and height\n    bingoCanvas.current.width = 300;\n    bingoCanvas.current.height = 360;\n    \n    // Set grid properties            \n    const numRows = 6;\n    const numCols = 5;\n    const cellWidth = 60;\n    const cellHeight = 60;\n                    \n    // Fill background boxes with selected bg color\n    ctx.fillStyle = bgColor; \n    for (let x = gridlineSize/2; x <= bingoCanvas.current.width; x += cellWidth-gridlineSize) {            \n        for (let y = gridlineSize/2; y <= bingoCanvas.current.height; y += cellHeight-gridlineSize) {\n            ctx.fillRect(x, y, cellWidth, cellHeight);\n        }\n    }                        \n            \n    // Draw gridlines\n    ctx.lineWidth = gridlineSize; \n    let x=0;\n    let y=0;\n    for (let i = 0; i <= numCols; i++) {        \n        // Need to adjust for left/right gridlines size\n        if (i===0) {\n            ctx.moveTo(gridlineSize/2, 0);\n            ctx.lineTo(gridlineSize/2, bingoCanvas.current.height);\n        }\n        else {\n            ctx.moveTo(i * cellWidth-gridlineSize/2, 0);\n            ctx.lineTo(i * cellWidth-gridlineSize/2, bingoCanvas.current.height);\n            \n        }\n    }\n    \n    for (let i = 0; i <= numRows; i++) { \n        // Need to adjust for top/bottom gridlines size               \n        if (i===0) {\n            ctx.moveTo(0, gridlineSize/2);\n            ctx.lineTo(bingoCanvas.current.height, gridlineSize/2,);\n        }\n        else {\n            ctx.moveTo(0, i * cellWidth-gridlineSize/2);\n            ctx.lineTo(bingoCanvas.current.height, i * cellWidth-gridlineSize/2);                    \n        }                    \n    }\n\n    ctx.strokeStyle = gridColor; // Gridlines color\n    ctx.stroke();                        \n                        \n    // Draw bingo title\n    ctx.font = fontWeightPicker +\' 28px adobe clean\';    \n    ctx.textAlign = "center";\n    ctx.textBaseline = \'middle\'; \n            \n    ctx.fillStyle = titleColor; // title font color                       \n    let bingoTitle = [\'B\',\'I\',\'N\',\'G\',\'O\'];\n    for (let charCnt = 0; charCnt < bingoTitle.length; charCnt++) {\n        let letter = bingoTitle[charCnt];\n        ctx.fillText(letter, charCnt * cellWidth + cellWidth / 2, cellHeight / 2 + 6);                \n    }       \n    \n    // Fill in the card with random numbers and a free space if checked\n    const freeSpace = [3, 2]; // Coordinates of the FREE space\n    const numbers = [];\n    const usedNumbers = new Set(); // Track used numbers\n    ctx.font = fontWeightPicker +\' 22px adobe clean\';\n    ctx.fillStyle = fgColor; // color of the foreground (numbers)                 \n            \n    for (let i = 1; i < numRows; i++) {\n        numbers[i] = [];\n        for (let j = 0; j < numCols; j++) {\n            if (freeSpaceToggle) {\n                if (i === freeSpace[0] && j === freeSpace[1]) {\n                    numbers[i][j] = "FREE";\n                    continue; // Skip the FREE space\n                }\n            }\n\n            let num;\n            do {\n                num = Math.floor(Math.random() * 15) + 1 + (j * 15);\n            } while (usedNumbers.has(num)); // Generate unique numbers\n\n            usedNumbers.add(num);\n            numbers[i][j] = num;        \n            ctx.fillText(num, j * cellWidth + cellWidth / 2 - 3, i * cellHeight + cellHeight / 2 + 3);                \n        }\n    }\n            \n    // Draw "FREE" if the toggle is checked\n    if (freeSpaceToggle) {\n        ctx.font = fontWeightPicker +\' 20px adobe clean\';     \n        ctx.fillText("FREE", freeSpace[1] * cellWidth + cellWidth / 2 - 3, freeSpace[0] * cellHeight + cellHeight / 2 + 3);            \n    }    \n        \n    // Enable drag and drop for the card\n    addOnUISdk.app.enableDragToDocument(bingoCanvas.current, {\n        previewCallback: el => new URL(bingoCanvas.current.toDataURL()),\n        completionCallback: async el => {\n            const r = await fetch(bingoCanvas.current.toDataURL());\n            const blob = await r.blob();\n            return [{blob}];\n        }\n    })        \n\n    // Enable add card button\n    setAddToPageEnabled(true);        \n}\n\n// Trigger click on the native color picker input for each\nfunction onBgColorClick(e) {\n    bgColorInput.current.click();\n}\n\nfunction onFgColorClick(e) {        \n    fgColorInput.current.click();\n}\n\nfunction onTitleColorClick(e) {        \n    titleColorInput.current.click();\n}\n\nfunction onGridColorClick(e) {        \n    gridColorInput.current.click();\n}\n\n// Update the state values with the color selected from the native color picker for each\nfunction onFgColorChange(e) {        \n    setFgColorSwatch(e.target.value);\n    setFgColor(e.target.value);        \n}    \n\nfunction onBgColorChange(e) {        \n    setBgColorSwatch(e.target.value);\n    setBgColor(e.target.value);        \n}\n\nfunction onTitleColorChange(e) {        \n    setTitleColorSwatch(e.target.value);\n    setTitleColor(e.target.value);        \n}        \n\nfunction onGridColorChange(e) {        \n    setGridColorSwatch(e.target.value);\n    setGridColor(e.target.value);        \n}\n\nasync function handleAddToPage() {        \n    const blob = await new Promise((resolve, reject) => {\n        bingoCanvas.current.toBlob(blob => { resolve(blob); })\n    })\n    addOnUISdk.app.document.addImage(blob);            \n}\n```\n\n**IMPORTANT!:**\n\nSince you\'re using the React `useRef` to get references to some of the components, you\'ll need to add it to the import at the top of your `App.jsx`, along with the `useState` that\'s currently included. So the result of the import section would look like:\n\n```js\nimport React, { useState, useRef } from "react"; /* add useRef here */\nimport "./App.css";                              /* already existed */\nimport { WC } from "./WC.jsx";                   /* you added in prior step */\n```\n')),(0,r.mdx)("h3",{id:"style-your-ui"},"Style your UI"),(0,r.mdx)("p",null,"If you run your add-on project now with ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm run build; npm run start")," (or if it was already running and automatically refreshed), you should see something like the following:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/5530d/lesson2-prestyle.webp 320w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/0c8fb/lesson2-prestyle.webp 640w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/94b1e/lesson2-prestyle.webp 1280w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/0b34d/lesson2-prestyle.webp 1920w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/d5269/lesson2-prestyle.webp 2560w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/65424/lesson2-prestyle.webp 2726w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/dd4a7/lesson2-prestyle.png 320w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/0f09e/lesson2-prestyle.png 640w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/bbbf7/lesson2-prestyle.png 1280w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/ac7a9/lesson2-prestyle.png 1920w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/c7a69/lesson2-prestyle.png 2560w","/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/64865/lesson2-prestyle.png 2726w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/184a326d17d7cab8f3c5fe498cb05b78/bbbf7/lesson2-prestyle.png",alt:"Basic react add-on screenshot",title:"Basic react add-on screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Similar to lesson 1, you'll see that the layout of the UI is not great. In this step you'll add the styling to present the UI as you did in lesson 1. "),(0,r.mdx)("p",null,"Open the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/src/components/App.css")," file and replace the current contents with the following custom type, class and id selectors for your UI, then check to see the updates reflected in your add-on before moving to the final part of the tutorial."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-css"},"sp-theme {\n    display: grid;\n}\n\nh2 {\n    font-weight: var(--spectrum-global-font-weight-black);\n}\n\nsp-swatch {\n    width: var(--spectrum-swatch-size-medium);                \n}\n\nsp-button {\n    flex: 1;\n    max-width: calc(\n        (100% - var(--spectrum-global-dimension-static-size-250)) / 2\n    );\n}\n\nsp-textfield,\nsp-picker {\n    width: var(--spectrum-global-dimension-static-size-1700);\n    display: flex;\n}\n\nsp-number-field {            \n    width: 100%;\n}\n\nsp-button-group {\n    margin-top: var(--spectrum-global-dimension-static-size-300);\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\nsp-slider {\n    width: 250px;\n    --spectrum-slider-font-size: var(--spectrum-font-size-100);    \n} \n\nsp-field-label {\n    font-size: var(--spectrum-global-dimension-font-size-100);   \n}\n\n.color-well {\n    cursor: pointer;\n    --mod-swatch-border-thickness: var(--spectrum-divider-thickness-small);\n    --mod-swatch-border-color: var(--spectrum-transparent-black-500);\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    align-items: flex-end;\n}\n\n.column {\n    display: flex;\n    flex-direction: column;    \n}\n\n.gap-20 {\n    gap: var(--spectrum-global-dimension-static-size-250); \n}\n\n.margin-top-10 {\n    margin-top: var(--spectrum-global-dimension-static-size-125); \n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-tutorials-spectrum-workshop-part-2-md-778d58294a8c512a0fce.js.map