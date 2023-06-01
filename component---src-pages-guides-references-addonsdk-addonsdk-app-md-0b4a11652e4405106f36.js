"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2570],{7715:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return u}});var l=t(87462),n=t(63366),d=(t(15007),t(64983)),m=t(91515),r=["components"],p={},s={_frontmatter:p},o=m.Z;function u(e){var a=e.components,t=(0,n.Z)(e,r);return(0,d.mdx)(o,(0,l.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"addonsdkapp"},"AddOnSdk.app"),(0,d.mdx)("p",null,"Provides access to the host application (Adobe Express). This object is used to access the current document to allow you to ",(0,d.mdx)("a",{parentName:"p",href:"../../develop/#importing-content"},"import")," or ",(0,d.mdx)("a",{parentName:"p",href:"../../develop/#exporting-content"},"export")," content, the ",(0,d.mdx)("a",{parentName:"p",href:"../../develop/#authenticating-with-oauth-20"},"OAuth APIs")," used for OAuth 2.0 workflows, and the UI object for detecting the ",(0,d.mdx)("a",{parentName:"p",href:"../../develop/#detecting-locale"},"current locale")," and ",(0,d.mdx)("a",{parentName:"p",href:"../../develop/#detecting-theme"},"theme")," in use."),(0,d.mdx)("h2",{id:"methods"},"Methods"),(0,d.mdx)("h3",{id:"showmodaldialog"},"showModalDialog()"),(0,d.mdx)("p",null,"Shows a modal dialog based on specific options passed in. "),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"dialogOptions"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"object")),(0,d.mdx)("td",{parentName:"tr",align:"right"},"Dialog options such as title, description, ",(0,d.mdx)("a",{parentName:"td",href:"./addonsdk-constants.md"},"Variant")," etc.")))),(0,d.mdx)("p",null,"The input dialog variant accepts an additional ",(0,d.mdx)("inlineCode",{parentName:"p"},"field")," object. See the example below for details."),(0,d.mdx)("h4",{id:"returns"},"Returns"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"Promise")," with the ",(0,d.mdx)("a",{parentName:"p",href:"../addonsdk/addonsdk-constants.md"},"button type")," that was clicked, otherwise an error. The input dialog variant returns the value of the field the user input text to in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fieldValue")," property."),(0,d.mdx)("h4",{id:"example-usage"},"Example Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'// Confirmation Dialog Example\nlet dialogOptions = {\n    title: titleValue,\n    description: [descValue],\n    buttonLabels: {\n        primary:\n        primaryButtonTextValue != "" ? primaryButtonTextValue : undefined,\n        secondary:\n        secondaryButtonTextValue != ""\n            ? secondaryButtonTextValue\n            : undefined,\n        cancel:\n        cancelButtonTextValue != "" ? cancelButtonTextValue : undefined,\n    },\n    variant: "confirmation",\n};\nconst response = await addOnSdk.app.showModalDialog(dialogOptions);\nconsole.log("Button type clicked " + response.buttonType)\n\n// Input Dialog Example \nlet inputDialogOptions = {\n    title: titleValue,\n    description: [descValue],\n    buttonLabels: {\n        primary:\n        primaryButtonTextValue != "" ? primaryButtonTextValue : undefined,\n        secondary:\n        secondaryButtonTextValue != ""\n            ? secondaryButtonTextValue\n            : undefined,\n        cancel:\n        cancelButtonTextValue != "" ? cancelButtonTextValue : undefined,\n    },\n    variant: "input",\n    field: {\n          label: labelValue,\n          placeholder: placeholderValue,\n          fieldType: "text",\n    },\n\n    const response = await addOnSdk.app.showModalDialog(inputDialogOptions);\n    console.log("Field value " + response.fieldValue); // returns the input the user entered\n}\n};\n')),(0,d.mdx)("h3",{id:"on"},"on()"),(0,d.mdx)("p",null,"Subscribe to an event (ie: listen for an event)."),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Valid Values"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"name"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Event to subscribe to."),(0,d.mdx)("td",{parentName:"tr",align:null},"See ",(0,d.mdx)("a",{parentName:"td",href:"#addonsdkapp-events"},"Events"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"handler"),(0,d.mdx)("td",{parentName:"tr",align:null},"callback function"),(0,d.mdx)("td",{parentName:"tr",align:null},"Handler that gets invoked when the event is triggered."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"(data) => {}"))))),(0,d.mdx)("h4",{id:"return-value"},"Return Value"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"void")),(0,d.mdx)("h4",{id:"example-usage-1"},"Example Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'AddOnSdk.app.on("themechange", (data) => {\n  applyTheme(data.theme);\n});\n')),(0,d.mdx)("h3",{id:"off"},"off()"),(0,d.mdx)("p",null,"Unsubscribe from an event (ie: stop listening for an event)."),(0,d.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Valid Values"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"name"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Event to unsubscribe to."),(0,d.mdx)("td",{parentName:"tr",align:null},"See ",(0,d.mdx)("a",{parentName:"td",href:"#addonsdkapp-events"},"Events"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"handler"),(0,d.mdx)("td",{parentName:"tr",align:null},"callback function"),(0,d.mdx)("td",{parentName:"tr",align:null},"Handler that was used during event subscription."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"(data) => {}"))))),(0,d.mdx)("h4",{id:"return-value-1"},"Return Value"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"void")),(0,d.mdx)("h4",{id:"example-usage-2"},"Example Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'AddOnSdk.app.on("themechange", (data) => {\n  applyTheme(data.theme);\n});\n')),(0,d.mdx)("h3",{id:"enabledragtodocument"},"enableDragToDocument()"),(0,d.mdx)("p",null,"Allows for drag to document functionality to be enabled on an element such as an image or video."),(0,d.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"element"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"HTMLElement")),(0,d.mdx)("td",{parentName:"tr",align:"right"},"The element to enable for drag and drop.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"dragCallbacks"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#dragcallbacks-syntax"},"dragcallbacks")),(0,d.mdx)("td",{parentName:"tr",align:"right"},"An object containing a preview and completion callback")))),(0,d.mdx)("h5",{id:"dragcallbacks-object-syntax"},(0,d.mdx)("inlineCode",{parentName:"h5"},"dragCallbacks")," object syntax:"),(0,d.mdx)("h6",null,"Preview callback function"),(0,d.mdx)("p",null,"Callback used to get the preview image for the drag & drop action. "),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-ts"},"(element: HTMLElement) => URL;\n")),(0,d.mdx)("h6",null,"Preview callback return value"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},"URL")),(0,d.mdx)("h6",null,"Completion callback"),(0,d.mdx)("p",null,"Callback used to get the final data to be added to the document post drag & drop action."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-ts"},"(element: HTMLElement) => Promise<DragCompletionData[]>;\n")),(0,d.mdx)("h5",{id:"completion-callback-return-value"},"Completion callback return value"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"Promise")," array with the data to be added to the document on drag completion."),(0,d.mdx)("h4",{id:"return-value-2"},"Return Value"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"void")),(0,d.mdx)("h4",{id:"example-usage-3"},"Example Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"AddOnSdk.app.enableDragToDocument(image, {\n    previewCallback: element => {\n        return new URL(element.src);\n    },\n    completionCallback: async (element) => {\n        return [{ blob: await getBlob(element.src) }];\n    }\n});\n")),(0,d.mdx)("h2",{id:"addonsdkapp-objects"},"AddOnSdk.app Objects"),(0,d.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM",style:{backgroundColor:"lightblue"}},(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Attribute"))),(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Name"))),(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Type"))),(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Description")))),(0,d.mdx)("tbody",{className:"spectrum-Table-body"},(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"readonly"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"AddOnSdk.app.document"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"object"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,"Represents the active document of the host application."))),(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"readonly"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"AddOnSdk.app.oauth"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"object"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,"Provides access to the OAuth methods needed to implement OAuth 2.0 for user authorization."))),(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"readonly"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"AddOnSdk.app.ui"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"object"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,"Represents the host UI (Adobe Express UI)."))))),(0,d.mdx)("h2",{id:"addonsdkapp-events"},"AddOnSdk.app Events"),(0,d.mdx)("p",null,"The table below describes the events triggered from the add-on SDK. Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"AddOnSdk.app.on()")," method to listen to events, and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"AddOnSdk.app.off()")," method to stop listening:"),(0,d.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM",style:{backgroundColor:"lightblue"}},(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Object"))),(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Type"))),(0,d.mdx)("td",{className:"spectrum-Table-headCell"},(0,d.mdx)("p",null,(0,d.mdx)("strong",null,"Description")))),(0,d.mdx)("tbody",{className:"spectrum-Table-body"},(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"localechange"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"string"))),(0,d.mdx)("td",{style:{verticalAlign:"bottom"}},(0,d.mdx)("p",null,"Triggered when there is a locale change at the host side."))),(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"themechange"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"string"))),(0,d.mdx)("td",{style:{verticalAlign:"bottom"}},(0,d.mdx)("p",null,"Triggered when there is a theme change at the host side."))),(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"dragstart"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"string"))),(0,d.mdx)("td",{style:{verticalAlign:"bottom"}},(0,d.mdx)("p",null,"Triggered when the user starts dragging an item for which drag behavior is enabled."))),(0,d.mdx)("tr",{className:"spectrum-Table-row"},(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"dragend"))),(0,d.mdx)("td",{className:"spectrum-Table-cell"},(0,d.mdx)("p",null,(0,d.mdx)("pre",null,"string"))),(0,d.mdx)("td",{style:{verticalAlign:"bottom"}},(0,d.mdx)("p",null,"Triggered when the drag operation ends."))))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-references-addonsdk-addonsdk-app-md-0b4a11652e4405106f36.js.map