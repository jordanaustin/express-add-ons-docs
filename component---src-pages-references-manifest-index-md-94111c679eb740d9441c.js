"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6094],{29414:function(l,n,d){d.r(n),d.d(n,{_frontmatter:function(){return o},default:function(){return i}});var e,t=d(87462),m=d(63366),s=(d(15007),d(64983)),u=d(91515),a=["components"],o={},x=(e="InlineAlert",function(l){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",l)}),r={_frontmatter:o},p=u.Z;function i(l){var n=l.components,d=(0,m.Z)(l,a);return(0,s.mdx)(p,(0,t.Z)({},r,d,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"overview"},"Overview"),(0,s.mdx)("p",null,"Each add-on bundle contains a ",(0,s.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file at the root level which defines the metadata for your add-on and how it should behave."),(0,s.mdx)("h2",{id:"manifest-version-2"},"Manifest Version 2"),(0,s.mdx)("p",null,"This guide outlines the latest manifest version available, which is version 2."),(0,s.mdx)(x,{slots:"text",variant:"warning",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Changes to your add-on manifest currently require a manual reload. Use the ",(0,s.mdx)("strong",{parentName:"p"},"Refresh")," button in the ",(0,s.mdx)("strong",{parentName:"p"},"Add-on Development")," panel to pick up any changes."),(0,s.mdx)("div",null,(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{className:"spectrum-Table-headCell"},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Field"))),(0,s.mdx)("td",{className:"spectrum-Table-headCell"},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",{className:"spectrum-Table-headCell"},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Description")))),(0,s.mdx)("tbody",{className:"spectrum-Table-body"},(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"testId?"))),(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",{style:{verticalAlign:"bottom"}},(0,s.mdx)("p",null,"This can be used to uniquely identify an add-on among other add-ons in app during ",(0,s.mdx)("strong",null,"development workflows only"),". This is auto generated and inserted into the manifest by the CLI when an add-on is created. This is mandatory in the development workflow and ignored in add-ons submitted to the marketplace."))),(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"version"))),(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,'Add-on version in "major.minor.patch" format (e.g., "1.2.0")'))),(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"name?"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Add-on name as it will appear in the UI ",(0,s.mdx)("strong",null,"for development workflows only"),". Localizable and specified in the following format, for example:",(0,s.mdx)("pre",null,'"label":  { "default": "Timer", "en-US": "Timer", "fr-FR": "Minuteur" }')))),(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"manifestVersion"))),(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("p",null,"number")),(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("p",null,"Version of the manifest schema, 2. "))),(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"requirements"))),(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("p",null,"object")),(0,s.mdx)("td",{style:{verticalAlign:"top"}},(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Field"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Notes")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"apps")," "),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"object[]")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Indicates the apps that the add-on is intended for.   "),(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Field"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Notes")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"name")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Supported values: 'Express'")," ")),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"apiVersion")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"number")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"API version that add-on uses. Currently supported values: 1"))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"supportedDeviceClass?")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string[]")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Supported platforms by the add-on. Possible values:"),(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Device Class"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Description")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"desktop")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Browser on desktop"))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"mobile")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Browser on mobile and tablet devices"))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"app")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Native app on mobile and tablet devices")))),(0,s.mdx)("p",null,"If not specified, default value assumed is: ",(0,s.mdx)("pre",null,'["desktop"]'),".")))))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"experimentalApis?")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"boolean")),(0,s.mdx)("td",null,(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"Add-ons can opt to use experimental apis by specifying this flag"),(0,s.mdx)("li",null,"This flag is only allowed during development and needs to be removed during submission")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"supportsTouch?")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"boolean")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Whether add-on supports touch-only devices. If not specified, default value assumed is 'false'")))),(0,s.mdx)("code",null,'"requirements": { "apps": [ { "name": "Express", "apiVersion": 1, "supportedDeviceClass": ["desktop", "mobile"] ], }, "experimentalApis": true, "supportsTouch": false }'))),(0,s.mdx)("tr",{className:"spectrum-Table-row"},(0,s.mdx)("td",{className:"spectrum-Table-cell",style:{verticalAlign:"top"}},(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"entryPoints"))),(0,s.mdx)("td",{className:"spectrum-Table-cell",style:{verticalAlign:"top"}},(0,s.mdx)("p",null,"Object array")),(0,s.mdx)("td",{className:"spectrum-Table-cell"},(0,s.mdx)("p",null,"Currently one entrypoint can be specified:  "),(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Field"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Notes")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"The type of the entrypoint. Supported types: "),(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Description")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"panel"))),(0,s.mdx)("td",null,(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"Panel type of add-ons"),(0,s.mdx)("li",null,"UI is shown in an iframe in the (left) content panel"),(0,s.mdx)("li",null,"Can be launched via add-ons launchpad panel"))))))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"id"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"Indicates the ID for the entrypoint"),(0,s.mdx)("li",null,"Must be unique within the plugin"))," ")),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"main"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Main file for this entrypoint"))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"permissions?"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string")),(0,s.mdx)("td",null,(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Field"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Type"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Notes")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"sandbox?")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string[]")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"List of iframe sandbox permissions. Supported values are:"),(0,s.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM"},(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Permission"))),(0,s.mdx)("td",null,(0,s.mdx)("strong",null,"Notes"))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"allow-presentation"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Allows the add-on to start a ",(0,s.mdx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest",target:"_blank"},"presentation session"),"."))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"allow-popups"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Allows popups - such as ",(0,s.mdx)("pre",null,'window.open(), target="_blank" or showModalDialog()')," to work. ",(0,s.mdx)("strong",{style:{color:"red"}},"If this keyword is not used, the popup will silently fail to open.")))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"allow-downloads"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Allows downloading files through an <a> or <area> element with the download attribute, as well as through the navigation that leads to a download of a file."))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"allow-popups-to-escape-sandbox"))),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them.")))),(0,s.mdx)("p",null,(0,s.mdx)("strong",null,"Note:")," The ",(0,s.mdx)("strong",null,"allow-scripts")," sandbox permission is supported by default."))),(0,s.mdx)("tr",null,(0,s.mdx)("td",null,(0,s.mdx)("p",null,"oauth?")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"string[]")),(0,s.mdx)("td",null,(0,s.mdx)("p",null,"List of 3P auth server domains for which OAuth workflow may be requested.")))),(0,s.mdx)("code",null,'"permissions" : { "sandbox": [" allow-popups ", "allow-same-origin ", "allow-downloads"], "oauth" : [“...”, “...”], }')))),(0,s.mdx)("p",{style:{color:"red"}},(0,s.mdx)("strong",null,"Note:")," At least one entrypoint needs to be specified.")))))),(0,s.mdx)(x,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The ",(0,s.mdx)("strong",{parentName:"p"},"?")," implies the field is optional."),(0,s.mdx)(x,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Files within the add-on bundle can refer to each other via relative paths."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-manifest-index-md-94111c679eb740d9441c.js.map