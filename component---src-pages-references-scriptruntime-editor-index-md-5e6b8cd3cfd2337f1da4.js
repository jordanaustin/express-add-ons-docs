"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8725],{21463:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var n=a(87462),r=a(63366),o=(a(15007),a(64983)),s=a(91515),d=["components"],i={},m={_frontmatter:i},p=s.Z;function c(e){var t=e.components,a=(0,r.Z)(e,d);return(0,o.mdx)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"editor-apis"},"Editor APIs"),(0,o.mdx)("p",null,"The editor APIs provide access to the user's document, allowing you to read the document structure and properties and make changes to the document via authoring methods."),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"Some examples of what you can do with the editor APIs are creating shapes, adding pages to the document, clearing the artboard and more. For example, the following code illustrates how to use the editor APIs to access the document, create a rectangle with a fill, and add it to the current document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import { editor } from "express";\n\nartboardNode = editor.documentRoot.currentContext;\n\nconst rectangle = editor.createRectangle();\nrectangle.width = 200;\nrectangle.height = 150;\nrectangle.translateX = 10;\nrectangle.translateY = 20;\n\nconst rectFill = editor.createColorFill({ red: Math.random(), green: Math.random(), blue: Math.random(), alpha: Math.random() });            \nrectangle.fills.append(rectFill);\n\nartboardNode.children.append(rectangle);\n')),(0,o.mdx)("p",null,"Check out the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer-stage.adobe.com/express-add-on-apis/docs/api/classes/Editor"},"full set of API documentation")," as well as the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/script-runtime-samples/editor-apis"},"editor-apis")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/script-runtime-samples/image-and-page"},"image-and-page")," code samples provided in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/script-runtime-samples"},"script runtime samples")," for more details on using the editor APIs."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-scriptruntime-editor-index-md-5e6b8cd3cfd2337f1da4.js.map