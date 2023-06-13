"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6874],{6012:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return h}});var a,o=t(87462),d=t(63366),s=(t(15007),t(64983)),r=t(91515),i=["components"],l={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:l},c=r.Z;function h(e){var n=e.components,t=(0,d.Z)(e,i);return(0,s.mdx)(c,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(p,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Preview Adobe Express add-on SDK documentation while you wait to ",(0,s.mdx)("a",{parentName:"p",href:"https://adobe.com/go/express-developer"},"join our private beta"),"."),(0,s.mdx)("h1",{id:"implementing-common-use-cases"},"Implementing Common Use Cases"),(0,s.mdx)("p",null,"If you're looking to explore and discover the capabilities of our add-ons platform, check out these common use cases and accompanying code snippets to help you get started with our add-on SDK. For more extensive usage examples, check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/"},"code samples"),". The ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/"},"SDK References")," are also available to help you find all of the objects, methods, properties and events supported for building add-ons. "),(0,s.mdx)("h2",{id:"importing-content"},"Importing Content"),(0,s.mdx)("p",null,"Importing content into a design is one of the most popular use cases. For instance, to add content retrieved from a third-party service or directly from the local hard drive. The following example use cases for implementing this feature. The first function shows how to implement it by adding an image directly from a ",(0,s.mdx)("inlineCode",{parentName:"p"},"blob")," object, and the second shows how to implement it by fetching an image via a URL first. Follow the example below to implement this feature, but also be sure to refer to the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-document/#methods"},"related SDK Reference section")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/"},"code samples")," for more details."),(0,s.mdx)("h3",{id:"example"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\n// Reference to the active document\nconst { document } = AddOnSdk.app;\n\n// Add image via blob to the current page\nasync function addImageFromBlob(blob) {\n  try {\n    await document.addImage(blob);\n  } catch (error) {\n    console.log("Failed to add the image to the page.");\n  }\n}\n\n// Add image via url to the current page\nasync function addImageFromURL(url) {\n  try {\n    const blob = await fetch(url).then((response) => response.blob());\n    await document.addImage(blob);\n  } catch (error) {\n    console.log("Failed to add the image to the page.");\n  }\n}\n')),(0,s.mdx)(p,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The supported file types for imported content are currently ",(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("inlineCode",{parentName:"strong"},"png/jpg/mp4"),",")," and the size of the imported images should not exceed ",(0,s.mdx)("strong",{parentName:"p"},"8000px")," or ",(0,s.mdx)("strong",{parentName:"p"},"40MB"),". See the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-document/"},"SDK References")," for additional details on importing content. "),(0,s.mdx)("h2",{id:"exporting-content"},"Exporting Content"),(0,s.mdx)("p",null,"Another popular feature available for use in your add-on is the ability to export content. For instance, if you want to to allow the user to save/download the current design (or range of a design) with certain export configurations to their local hard drive. An example use case is provided below, but also check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-document/#createrenditions"},(0,s.mdx)("inlineCode",{parentName:"a"},"createRenditions")," section in the SDK Reference")," for more specific options and details, as well as the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#export-sample"},"export-sample add-on"),"."),(0,s.mdx)("p",null,"The steps to export content:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Call ",(0,s.mdx)("inlineCode",{parentName:"li"},"createRenditions()")," to get the renditions based on your export configuration options. "),(0,s.mdx)("li",{parentName:"ul"},"Convert the ",(0,s.mdx)("inlineCode",{parentName:"li"},"blob")," object returned in the response to a ",(0,s.mdx)("inlineCode",{parentName:"li"},"string")," with the ",(0,s.mdx)("inlineCode",{parentName:"li"},"URL.createObjectURL(blob)")," method."),(0,s.mdx)("li",{parentName:"ul"},"Create or update an anchor ",(0,s.mdx)("inlineCode",{parentName:"li"},"<a>")," element's ",(0,s.mdx)("inlineCode",{parentName:"li"},"href")," value with the URL string from the above step.")),(0,s.mdx)("h3",{id:"example-1"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nconst response = await AddOnSdk.app.document.createRenditions({\n    range: "currentPage",\n    format: "image/jpeg",\n});\n\nconst downloadUrl = URL.createObjectURL(response[0].blob);\ndocument.getElementById("anchor").href = downloadUrl; \n\n<a href="#" download="download" id="anchor" style="text-decoration: none">\n  <sp-button id="download-button" style="display: none">Download</sp-button>\n</a>\n')),(0,s.mdx)("h2",{id:"authorization-with-oauth-20"},"Authorization with OAuth 2.0"),(0,s.mdx)("p",null,"This use case focuses on providing an authorization feature that allows a user to login to one of their existing services with OAuth 2.0. A typical use case would be to use assets you have stored in another service. Here you will find instructions of how to set it up, and an example of how to implement it. But also check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-oauth/"},"SDK Reference OAuth section")," for more options and details, as well as the  ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#import-images-using-oauth"},"import-images-using-oauth")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#dropbox"},"Dropbox")," sample add-ons for more advanced usage."),(0,s.mdx)("h3",{id:"setup"},"Setup"),(0,s.mdx)("p",null,'The OAuth APIs can be used to obtain the authorization "code" from any OAuth 2.0 provider supporting the Code Exchange authorization workflow. You will need to go through some setup steps with the provider you want to use OAuth with first. Here are the steps to get started:'),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Log in to the OAuth provider's website and create an application (for example, Dropbox). This must be a web application, and if an option of SPA (Single Page Application) is listed, select it."),(0,s.mdx)("li",{parentName:"ol"},'As an input to the "Redirect URIs" field, add: ',(0,s.mdx)("a",{parentName:"li",href:"https://new.express.adobe.com/static/oauth-redirect.html"},"https://new.express.adobe.com/static/oauth-redirect.html"),"."),(0,s.mdx)("li",{parentName:"ol"},"Fill out other details as necessary and save the form. A client Id / application Id / application key (this differs on different OAuth providers) will be generated. Make note of it as you will need it in your add-on code."),(0,s.mdx)("li",{parentName:"ol"},"Next, update your add-on ",(0,s.mdx)("inlineCode",{parentName:"li"},"manifest.json")," file with the hostname of the OAuth provider's authorization URL. ",(0,s.mdx)("strong",{parentName:"li"},"NOTE:"),' When using multiple providers, all hostnames must be provided. For example, if the add-on uses two OAuth providers ("login.microsoftonline.com" and "',(0,s.mdx)("a",{parentName:"li",href:"http://www.dropbox.com%22"},'www.dropbox.com"'),"), the ",(0,s.mdx)("inlineCode",{parentName:"li"},"manifest.json")," should contain both of them, as shown below:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "<ADD_ON_ID>",\n    "name": "<ADD_ON_NAME>",\n    "version": "1.0.0",\n    "manifestVersion": 1,\n    "requirements": {\n        "apps": ["Express"]\n    },\n    "entryPoints": [\n        {\n            "type": "panel",\n            "id": "panel1",\n            "label": {\n                "default": "<ADD_ON_LABEL>"\n            },\n            "main": "index.html",\n            "permissions": {\n                "oauth": ["login.microsoftonline.com", "www.dropbox.com"]\n            }\n        }\n    ]\n}\n')),(0,s.mdx)("h3",{id:"example-2"},"Example"),(0,s.mdx)("p",null,"Once you complete the set up, you can use the following code snippet as an example of how to perform the OAuth exchange to retrieve an access token. The ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/"},"code samples")," also contain a few different examples of using OAuth 2.0 workflows that you can use for a reference. You will also find the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/express-add-on-samples/blob/main/samples/import-images-using-oauth/src/utils/OAuthUtils.js"},"OAuthUtils.js")," module there, which is referenced below, and we recommend using to help with your own OAuth implementation. Also be sure to check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-oauth"},"SDK References")," for additional details on the OAuth workflows."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n \nconst DROPBOX_AUTHORIZATION_URL = "https://www.dropbox.com/oauth2/authorize";\nconst DROPBOX_TOKEN_URL = "https://api.dropboxapi.com/oauth2/token";\nconst DROPBOX_CLIENT_ID = "<DROPBOX_CLIENT_ID>";\nconst DROPBOX_SCOPE = "<DROPBOX_SPACE_SEPARATED_SCOPES>";\n \nconst ONEDRIVE_AUTHORIZATION_URL = "https://login.microsoftonline.com/<AZURE_AD_TENANT_ID>/oauth2/v2.0/authorize";\nconst ONEDRIVE_TOKEN_URL = "https://login.microsoftonline.com/<AZURE_AD_TENANT_ID>/oauth2/v2.0/token";\nconst ONEDRIVE_CLIENT_ID = "<ONEDRIVE_CLIENT_ID>";\nconst ONEDRIVE_SCOPE = "<ONEDRIVE_SPACE_SEPARATED_SCOPES>";\nconst OWN_REDIRECT_URI = "<OWN_REDIRECT_URI>";\n \nAddOnSdk.ready.then(() => {\n    // \'oauthUtils\' is a helper javascript module (included with the OAuth template) which provides utility functions to:\n    // 1. generateChallenge()     Generate the \'code_challenge\' and \'code_verifier\' parameters that are essential in the OAuth 2.0 workflow.\n    // 2. generateAccessToken()   Generate an \'access_token\' and a \'refresh_token\' using the \'code\' and \'redirectUri\' received on successful authorization.\n    // 3. getAccessToken()        Get an always valid \'access_token\'.\n     \n    const challenge = await oauthUtils.generateChallenge();     \n    await authorize(challenge);         \n});\n \nfunction authorize(challenge) {\n    // Trigger the OAuth 2.0 based authorization which opens up a sign-in window for the user\n    // and returns an authorization code which can be used to obtain an access_token.\n    const { id, code, redirectUri, result } = await oauth.authorize({\n        authorizationUrl: DROPBOX_AUTHORIZATION_URL,\n        clientId: DROPBOX_CLIENT_ID,\n        scope: DROPBOX_SCOPE,\n        codeChallenge: challenge.codeChallenge\n    });\n \n    const { status, description } = result;\n    if (status !== "SUCCESS") {\n        throw new Error(`Status: ${status} | Description: ${description}`);\n    }\n \n    // Generate the access_token which can be used to verify the identity of the user and\n    // grant them access to the requested resource.\n    await oauthUtils.generateAccessToken({\n        id,\n        clientId: DROPBOX_CLIENT_ID,\n        codeVerifier: challenge.codeVerifier,\n        code,\n        tokenUrl: DROPBOX_TOKEN_URL,\n        redirectUri\n    });\n \n    const accessToken = await oauthUtils.getAccessToken(id);\n}\n')),(0,s.mdx)("h2",{id:"storing-and-retrieving-client-side-data"},"Storing and Retrieving Client-Side Data"),(0,s.mdx)("p",null,"If you want to be able to store and retrieve data on the client side rather to and from a server for certain instances (ie: caching images that were fetched to decrease load times etc), you can do so using the add-on ",(0,s.mdx)("inlineCode",{parentName:"p"},"clientStorage")," API. An example of using it is shown below, but also refer to the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/instance-clientStorage/"},"SDK Reference section for clientStorage")," and the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#use-client-storage"},"use-client-storage sample add-on")," for more details."),(0,s.mdx)("h3",{id:"example-3"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nlet store;\n\nAddOnSdk.ready.then(async () => {\n    store = AddOnSdk.instance.clientStorage;\n}\n/**\n * Store item \n */\nasync function setItem(item: string, isComplete: boolean) {\n    await store.setItem(item, isComplete);\n    todoItemInput.value = "";\n}\n/**\n * Log all storage item values\n */\nasync function displayAllItems() {\n    const todoItems = await store.keys();\n    todoItems.forEach(async (item: string) => {\n        const itemValue = await store.getItem(item);\n        console.log("Key: " + item + " value: " + itemValue);\n    });\n}\n\n')),(0,s.mdx)("h2",{id:"drag-and-drop"},"Drag and Drop"),(0,s.mdx)("p",null,"If you want to allow a user to drag and drop items from your add-on to the document, you can use the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/addonsdk-app/#enabledragtodocument"},"methods provided in the add-on SDK"),". There are also several ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples"},"code samples")," that implement drag and drop, including the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#import-images-using-oauth"},"import-images-using-oauth"),", ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#dropbox"},"Dropbox"),", ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#pix"},"pix")," and more that you can reference. Some example use cases are shown below:"),(0,s.mdx)("h3",{id:"example-using-local-images"},"Example using local images"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nconst IMAGES = new Map([\n    ["image1.jpg", "./images/image1.jpg"],    \n    ["image2.jpg", "./images/image2.jpg"],\n    ["image3.jpg", "./images/image3.jpg"]\n]);\n\nlet gallery;\n\n// Wait for the SDK to be ready before rendering elements in the DOM.\nAddOnSdk.ready.then(async () => {\n    // Create elements in the DOM.\n    gallery = document.createElement("div");\n    gallery.className = "gallery";\n\n    IMAGES.forEach((url, id) => {\n        const image = document.createElement("img");\n        image.id = id;\n        image.src = url;\n        image.addEventListener("click", addToDocument);\n\n        // Enable drag to document for the image.\n        AddOnSdk.app.enableDragToDocument(image, {\n            previewCallback: element => {\n                return new URL(element.src);\n            },\n            completionCallback: async (element) => {\n                return [{ blob: await getBlob(element.src) }];\n            }\n        });\n\n        gallery.appendChild(image);\n    });\n\n    // Register event handler for "dragstart" event\n    AddOnSdk.app.on("dragstart", startDrag);\n     // Register event handler for \'dragend\' event\n    AddOnSdk.app.on("dragend", endDrag);\n\n    document.body.appendChild(gallery);\n});\n\n/**\n * Add image to the document.\n */\nasync function addToDocument(event) {\n    const url = event.currentTarget.src;\n    const blob = await getBlob(url);\n    AddOnSdk.app.document.addImage(blob);\n}\n\n/**\n * Handle "dragstart" event\n */\nfunction startDrag(eventData) {\n    console.log("The drag event has started for", eventData.element.id);\n}\n\n/**\n * Handle "dragend" event\n */\nfunction endDrag(eventData) {\n    if (!eventData.dropCancelled) {\n        console.log("The drag event has ended for", eventData.element.id);\n    } else {\n        console.log("The drag event was cancelled for", eventData.element.id);\n    }\n}\n\n/**\n * Get the binary object for the image.\n */\nasync function getBlob(url) {\n    return await fetch(url).then(response => response.blob());\n}\n\n')),(0,s.mdx)("h3",{id:"example-using-an-image-url"},"Example using an image URL"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\n// Enable drag support for an element\nfunction makeDraggableUsingUrl(elementId: string, previewUrl: string) {\n  const image = document.getElementById(elementId);\n\n  const dragCallbacks = {\n    previewCallback: (image: HTMLElement) => {\n      return new URL(previewUrl);\n    },\n    completionCallback: async (image: HTMLElement) => {\n      const imageBlob = await fetch(image.src).then((response) =>\n        response.blob()\n      );\n      return [{ blob: imageBlob }];\n    },\n  };\n\n  try {\n    AddOnSdk.app.enableDragToDocument(image, dragCallbacks);\n  } catch (error) {\n    console.log("Failed to enable DragToDocument:", error);\n  }\n}\n\nAddOnSdk.app.on("dragstart", (eventData: DragStartEventData) => {\n  console.log("The drag event has started for", eventData.element);\n});\n\nAddOnSdk.app.on("dragend", (eventData: DragEndEventData) => {\n  if (!eventData.dropCancelled) {\n    console.log("The drag event has ended for", eventData.element);\n  } else {\n    console.log("The drag event was cancelled for", eventData.element);\n  }\n});\n')),(0,s.mdx)("h2",{id:"modal-dialogs"},"Modal Dialogs"),(0,s.mdx)("p",null,"When you need to pop up a dialog to show a certain message such as an informational, warning or error message, you can use a modal dialog to do so. Below are some examples of the different types of modal dialogs supported, but also check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/addonsdk-app/#showmodaldialog"},"related SDK Reference section")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/samples/#dialog-add-on"},"dialog add-on sample")," for more details."),(0,s.mdx)("h3",{id:"simple-modal-dialog-example"},"Simple Modal Dialog Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n \n// Wait for the SDK to be ready\nawait AddOnSdk.ready;\n\n// Confirmation Dialog Example\nlet dialogOptions = {\n    title: titleValue,\n    description: [descValue],\n    buttonLabels: {\n        primary:\n        primaryButtonTextValue != "" ? primaryButtonTextValue : undefined,\n        secondary:\n        secondaryButtonTextValue != ""\n            ? secondaryButtonTextValue\n            : undefined,\n        cancel:\n        cancelButtonTextValue != "" ? cancelButtonTextValue : undefined,\n    },\n    variant: "confirmation",\n};\nconst response = await addOnSdk.app.showModalDialog(dialogOptions);\nconsole.log("Button type clicked " + response.buttonType)\n')),(0,s.mdx)("p",null,"Below is an example of using an ",(0,s.mdx)("inlineCode",{parentName:"p"},"input")," dialog that accepts input you can retrieve:"),(0,s.mdx)("h3",{id:"input-modal-dialog-example"},"Input Modal Dialog Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n \n// Wait for the SDK to be ready\nawait AddOnSdk.ready;\n\n// Input Dialog Example \nlet inputDialogOptions = {\n    title: titleValue,\n    description: [descValue],\n    buttonLabels: {\n        primary:\n        primaryButtonTextValue != "" ? primaryButtonTextValue : undefined,\n        secondary:\n        secondaryButtonTextValue != ""\n            ? secondaryButtonTextValue\n            : undefined,\n        cancel:\n        cancelButtonTextValue != "" ? cancelButtonTextValue : undefined,\n    },\n    variant: "input",\n    field: {\n          label: labelValue,\n          placeholder: placeholderValue,\n          fieldType: "text",\n    },\n\n    const response = await addOnSdk.app.showModalDialog(inputDialogOptions);\n    console.log("Field value " + response.fieldValue); // returns the input the user entered\n}\n};\n')),(0,s.mdx)("p",null,"There's also support for a custom modal dialog that allows you to supply custom content as shown below, but note that it is currently behind an ",(0,s.mdx)("a",{parentName:"p",href:"../../references/manifest/"},(0,s.mdx)("inlineCode",{parentName:"a"},"experimentalApis"))," flag. "),(0,s.mdx)("h3",{id:"custom-dialog-example"},"Custom Dialog Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n \n// Wait for the SDK to be ready\nawait AddOnSdk.ready;\n \nfunction useCustomDialogResult(data: unknown) {\n  // Use the dialog data\n}\n\n// Custom Dialog\nasync function showCustomDialog() {\n  try {\n    const dialogResult = await AddOnSdk.app.showModalDialog({\n        variant: "custom",\n        title: "Custom Modal",\n        src: "dialog.html", // use content from this html file\n        size: { width: 600, height: 400 }\n    });\n \n    // Use data received from the custom dialog\n    useCustomDialogResult(dialogResult.result);\n \n  } catch (error) {\n    console.log("Error showing modal dialog:", error);\n  }\n}\n')),(0,s.mdx)(p,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Check out the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/"},"add-on SDK")," for more details on using modal dialogs."),(0,s.mdx)("h2",{id:"detecting-theme"},"Detecting Theme"),(0,s.mdx)("p",null,"When you want to detect the theme of the environment where your add-on is running, or if you want to be notified if it changes, you can use the following example. This is useful for knowing what theme is currently set in Adobe Express, so you can use the same in your add-on UI, or to apply a change to your UI when the user changes their Adobe Express theme. ",(0,s.mdx)("strong",{parentName:"p"},"Note:"),' currently Adobe Express only supports a "light" theme, though this will be changing to include support for a "dark" theme in the future. See the snippet below for an example of how to use and detect the theme, as well as the ',(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-ui/#theme"},"related SDK Reference section"),"."),(0,s.mdx)("h3",{id:"example-4"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nfunction applyTheme(theme) {\n    document.querySelector("sp-theme").setAttribute("color", theme);\n}\napplyTheme(AddOnSdk.app.ui.theme);\nAddOnSdk.app.on("themechange", (data) => { applyTheme(data.theme); });\n\naddOnSdk.app.on("themechange", (data) => {\n    applyTheme(data.theme == "dark" ? darkTheme : lightTheme);\n});\n')),(0,s.mdx)("h2",{id:"detecting-locale-and-supported-locales"},"Detecting Locale and Supported Locales"),(0,s.mdx)("p",null,"If you want to find out the users current locale, the list of supported locales, or detect when the locale changes (ie: to set the language in your add-on), you can do so with the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/express-add-ons/docs/references/addonsdk/app-ui/#locale"},(0,s.mdx)("inlineCode",{parentName:"a"},"AddOnSdk.app.ui")," object")," in the add-on SDK. A simple example is shown below."),(0,s.mdx)("h3",{id:"example-5"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\nfunction setLanguage(language) { \n  /* Set the language in your UI strings based on the change detected */ \n}\n\nAddOnSdk.ready.then(() => {\n  console.log(AddOnSdk.app.ui.locales);\n  setLanguage(AddOnSdk.app.ui.locale);\n});\n\nAddOnSdk.app.on("localechange", data => {\n  setLanguage(data.locale));\n});\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-develop-index-md-8df25fb2c8399f7807d0.js.map