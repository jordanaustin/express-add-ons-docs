"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2227],{53034:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return x}});var a,r=n(87462),d=n(63366),o=(n(15007),n(64983)),i=n(91515),l=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:m},u=i.Z;function x(e){var t=e.components,n=(0,d.Z)(e,l);return(0,o.mdx)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"addonsdkinstanceclientstorage"},"AddOnSdk.instance.clientStorage"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientStorage")," object provides a reference to Client Storage in the currently running add-on. Client Storage allows you to store, retrieve, and delete persistent data in the user's current browser."),(0,o.mdx)("p",null,"Client Storage is similar to using ",(0,o.mdx)("inlineCode",{parentName:"p"},"Window.localStorage"),", but is asynchronous, supports multiple datatypes, (i.e., objects, arrays, strings, numbers, booleans, ",(0,o.mdx)("inlineCode",{parentName:"p"},"null"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Uint8Array"),") and has a larger storage limit. Each add-on can store up to 10 mb of data in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientStorage"),", per user. Any data additions over 10 mb will throw a quota error. However, an add-on developer can write code to delete old data so that new data can be added. See the ",(0,o.mdx)("a",{parentName:"p",href:"../../guides/develop/#storing-and-retrieving-client-side-data"},"client storage use case implementation")," for more details. "),(0,o.mdx)(s,{slots:"text1, text2",variant:"info",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Since the data in Client Storage is stored in the user's current browser, any actions that clear the browser cache, such as clearing browsing history or deleting cookies, will also clear all of the data stored in Client Storage. It's important to keep this in mind when designing your add-on, as any important data that needs to persist beyond a user's current browsing session should be stored elsewhere, such as on a server or in a database."),(0,o.mdx)("p",null,"Additionally, you should always provide a way for users to delete or clear any data stored in Client Storage within your add-on, in case they want to remove any sensitive or unwanted data."),(0,o.mdx)("h2",{id:"methods"},"Methods"),(0,o.mdx)("h3",{id:"getitem"},"getItem()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"async getItem(key: string): Promise<unknown | undefined>")),(0,o.mdx)("br",null),"\nAn asynchronous method to retrieve a value from Client Storage for a given key. If no value has been stored for that key, this function will return ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.mdx)("h4",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"key"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"string ")),(0,o.mdx)("td",{parentName:"tr",align:"right"},"The key to retrieve the value for.")))),(0,o.mdx)("h4",{id:"returns"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," if no value has been stored for that key."),(0,o.mdx)("h4",{id:"example-usage"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'async function getData(key) {\n  try {\n    return await clientStorage.getItem(key);\n  } catch (error) {\n    console.log("Failed to get the value from the ClientStorage.");\n  }\n}\n')),(0,o.mdx)("h3",{id:"setitem"},"setItem()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"async setItem(key: string, value: any): Promise<void>;")),(0,o.mdx)("br",null),"\nStore a value in Client Storage with the given key. The returned promise will resolve if storage is successful, or reject with an error message if storage failed. The value can be any of multiple data types, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"object"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"string"),", array, ",(0,o.mdx)("inlineCode",{parentName:"p"},"number"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"null"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Uint8Array"),"."),(0,o.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"key"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"string ")),(0,o.mdx)("td",{parentName:"tr",align:"right"},"The key to reference the value stored.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"value"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"any ")),(0,o.mdx)("td",{parentName:"tr",align:"right"},"The value to store for the key.")))),(0,o.mdx)("h4",{id:"returns-1"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," if no value has been stored for that key."),(0,o.mdx)("h4",{id:"example-usage-1"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'async function setData(key, value) {\n  try {\n    await clientStorage.setItem(key, value);\n  } catch (error) {\n    console.log("Failed to set the value to the ClientStorage.");\n  }\n}\n')),(0,o.mdx)("h3",{id:"removeitem"},"removeItem()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"async removeItem(key: string): Promise<void>")),(0,o.mdx)("br",null),"\nRemove the stored key/value pair from Client Storage for the given key. If no such key is stored, this function will return normally, but will otherwise do nothing."),(0,o.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"key"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"string ")),(0,o.mdx)("td",{parentName:"tr",align:"right"},"The key indicating which specific key/value pair to remove from storage")))),(0,o.mdx)("h4",{id:"returns-2"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," or nothing if the key is not found."),(0,o.mdx)("h4",{id:"example-usage-2"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'async function removeData(key) {\n  try {\n    await clientStorage.removeItem(key);\n  } catch (error) {\n    console.log("Failed to delete the key/value pair from ClientStorage.");\n  }\n}\n')),(0,o.mdx)("h3",{id:"clear"},"clear()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"clear(): Promise<void>")),(0,o.mdx)("br",null),"\nDelete all data present in ClientStorage for this add-on."),(0,o.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,o.mdx)("p",null,"None"),(0,o.mdx)("h4",{id:"returns-3"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," or returns normally when there's nothing to clear."),(0,o.mdx)("h4",{id:"example-usage-3"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'async function clearData() {\n  try {\n    await clientStorage.clear();\n  }\n  catch(error) {\n    console.log("Failed to clear the data from the ClientStorage.");\n  }\n}\n')),(0,o.mdx)("h3",{id:"keys"},"keys()"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"async keys(): Promise<string[]>")),(0,o.mdx)("br",null),"\nRetrieve a list of all keys in Client Storage. Use this to enumerate the full contents of the Client Storage for the add-on."),(0,o.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,o.mdx)("p",null,"None"),(0,o.mdx)("h4",{id:"returns-4"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," with an array of the keys found when the promise resolves (all type ",(0,o.mdx)("inlineCode",{parentName:"p"},"string"),")."),(0,o.mdx)("h4",{id:"example-usage-4"},"Example Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'async function getKeys() {\n  try {\n    const keys = await clientStorage.keys();\n    keys.forEach((key) => console.log(key));\n  } catch (error) {\n    console.log("Failed to get the keys from the ClientStorage.");\n  }\n}\n')),(0,o.mdx)(s,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Be sure to check out the ",(0,o.mdx)("a",{parentName:"p",href:"../develop/#storing-and-retrieving-client-side-data"},"storing and retrieving client side data use case")," for more details around using Client Storage, as well as the ",(0,o.mdx)("a",{parentName:"p",href:"../../samples.md"},(0,o.mdx)("strong",{parentName:"a"},"use-client-storage")," sample")," for a more complete example of implementing it in an add-on."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-addonsdk-instance-client-storage-md-0567932eede2dd8903b7.js.map