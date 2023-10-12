"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1916],{3933:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=n(87462),d=n(45987),o=(n(15007),n(64983)),l=n(91515);const s=["components"],r={},m={_frontmatter:r},i=l.Z;function u(e){let{components:t}=e,n=(0,d.Z)(e,s);return(0,o.mdx)(i,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"addonsdkinstanceruntimedialog"},"AddOnSdk.instance.runtime.dialog"),(0,o.mdx)("p",null,"Represents the modal dialog presented to the user. This object can be used to manage the dialog, like closing it and sending results to the caller. Check out the ",(0,o.mdx)("a",{parentName:"p",href:"../../guides/develop/use_cases.md#modal-dialogs"},"modal dialogs use case examples")," for more details on using dialogs, as well as the related ",(0,o.mdx)("a",{parentName:"p",href:"../addonsdk/addonsdk-app.md#showmodaldialog"},(0,o.mdx)("inlineCode",{parentName:"a"},"showModalDialog")," method"),"."),(0,o.mdx)("h2",{id:"methods"},"Methods"),(0,o.mdx)("h3",{id:"close"},"close()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"close(result?: unknown): void")),(0,o.mdx)("br",null),"\nCloses the modal dialog and posts the result back to the dialog invoker."),(0,o.mdx)("h4",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"result?")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"unknown<any>")),(0,o.mdx)("td",{parentName:"tr",align:"right"},"An optional result to return to the dialog invoker.")))),(0,o.mdx)("h4",{id:"returns"},"Returns"),(0,o.mdx)("p",null,"An optional result of a user-defined type."),(0,o.mdx)("h4",{id:"example-usage"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n \n// Wait for the SDK to be ready\nawait AddOnSdk.ready;\n\ncloseButton.onsubmit = () => {\n  // User cancelled the operation, close the dialog with no result\n  AddOnSdk.instance.runtime.dialog.close();\n}\n\ncreateButton.onsubmit = () => {\n  // user has selected a design - close the dialog & report the selection details as the result back to the caller.\n  AddOnSdk.instance.runtime.dialog.close({\n    selectedDesign: "grid-layout"\n  });\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-addonsdk-runtime-dialog-md-4917ffc9971eafafdbd8.js.map