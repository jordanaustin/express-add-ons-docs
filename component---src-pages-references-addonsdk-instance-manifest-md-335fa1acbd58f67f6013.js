"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4079],{69623:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return f}});var o,a=t(87462),s=t(63366),i=(t(15007),t(64983)),d=t(91515),p=["components"],m={},r=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),l={_frontmatter:m},c=d.Z;function f(e){var n=e.components,t=(0,s.Z)(e,p);return(0,i.mdx)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"addonsdkinstancemanifest"},"AddOnSdk.instance.manifest"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest")," object provides access to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file entries of the add-on. "),(0,i.mdx)("h2",{id:"type"},"Type"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"object")," (specific type ",(0,i.mdx)("inlineCode",{parentName:"p"},"Record"),")"),(0,i.mdx)("p",null,"Please see the ",(0,i.mdx)("a",{parentName:"p",href:"../manifest/"},"Manifest Schema Reference")," for the whole list of properties and types that can be specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," for your add-on."),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Below is an example of using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest")," object, along with the expected output."),(0,i.mdx)(r,{slots:"heading, code",repeat:"2",languages:"JavaScript",mdxType:"CodeBlock"}),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nAddOnSdk.ready.then(() => {  \n  console.log(JSON.stringify(AddOnSdk.instance.manifest));  \n\n  console.log("Name: " + manifest["name"]);\n  console.log("Test ID " + manifest["testId"]);                \n  console.log("Version " + manifest["version"]);\n  console.log("Manifest Version " + manifest["manifestVersion"]);\n  for (const app of manifest["requirements"]["apps"]) {\n      console.log("Requirements -> Apps " + JSON.stringify(app));\n  }\n  for (const entryPoint of manifest["entryPoints"]) {\n      console.log("Entry Point Type " + entryPoint["type"]);\n      console.log("Entry Point ID " + entryPoint["id"]);\n      console.log("Entry Point main " + entryPoint["main"]);    \n}\n});\n')),(0,i.mdx)("h3",{id:"output"},"Output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'{"testId":"08f4469f-7999-458b-9ef9-b1bd043cbdca","name":"Add On Api Sampler","version":"1.0.0","manifestVersion":2,"requirements":{"apps":[{"name":"Express","apiVersion":1}]},"entryPoints":[{"type":"panel","id":"panel1","main":"https://localhost:5241/08f4469f-7999-458b-9ef9-b1bd043cbdca/index.html"}]}\n\nName: Add On Api Sampler\nTest ID 08f4469f-7999-458b-9ef9-b1bd043cbdca\nVersion 1.0.0\nManifest Version 2\nRequirements -> Apps {"name":"Express","apiVersion":1}\nEntry Point Type panel\nEntry Point ID panel1\nEntry Point main https://localhost:5241/08f4469f-7999-458b-9ef9-b1bd043cbdca/index.html\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-addonsdk-instance-manifest-md-335fa1acbd58f67f6013.js.map