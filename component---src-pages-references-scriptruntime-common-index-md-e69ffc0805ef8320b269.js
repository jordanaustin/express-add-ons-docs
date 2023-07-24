"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1205],{81306:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a,i=n(87462),d=n(63366),r=(n(15007),n(64983)),m=n(91515),o=["components"],l={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:l},u=m.Z;function c(e){var t=e.components,n=(0,d.Z)(e,o);return(0,r.mdx)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"common-apis"},"Common APIs"),(0,r.mdx)("p",null,"The common JavaScript APIs refer to the set of APIs that are injected by the script runtime into the global context to allow you to access common JavaScript functions. "),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"The common APIs provide implementations of some common objects and functions for you to use in your script code to perform things like logging to the console and setting timeouts and intervals. They are limited to a set of basic functions currently, as outlined in the next section. "),(0,r.mdx)(s,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"These APIs can automatically be used in your script runtime code."),(0,r.mdx)("h2",{id:"console-object"},"Console Object"),(0,r.mdx)("p",null,"A global ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console"},(0,r.mdx)("inlineCode",{parentName:"a"},"console"))," object implementation is provided with the following JavaScript method implementations for use in your script code."),(0,r.mdx)("h3",{id:"consolelog"},"console.log()"),(0,r.mdx)("p",null,"For general output of logging information. You may use string substitution and additional arguments with this method."),(0,r.mdx)("h3",{id:"consoleinfo"},"console.info()"),(0,r.mdx)("p",null,"Informative logging of information. You may use string substitution and additional arguments with this method."),(0,r.mdx)("h3",{id:"consolewarn"},"console.warn()"),(0,r.mdx)("p",null,"Outputs a warning message. You may use string substitution and additional arguments with this method."),(0,r.mdx)("h3",{id:"consoleerror"},"console.error()"),(0,r.mdx)("p",null,"Outputs an error message. You may use string substitution and additional arguments with this method."),(0,r.mdx)("h3",{id:"consoledebug"},"console.debug()"),(0,r.mdx)("p",null,"Outputs a message to the console with the log level debug."),(0,r.mdx)("h3",{id:"consoleclear"},"console.clear()"),(0,r.mdx)("p",null,"Clear the console."),(0,r.mdx)("h3",{id:"consoleassert"},"console.assert()"),(0,r.mdx)("p",null,"Log a message and stack trace to console if the first argument is false."),(0,r.mdx)("h2",{id:"additional-methods"},"Additional Methods"),(0,r.mdx)("h3",{id:"settimeout"},"setTimeout()"),(0,r.mdx)("p",null,"An implementation of the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"},"JavaScript ",(0,r.mdx)("inlineCode",{parentName:"a"},"setTimeout()"))," method that sets a timer to execute a function or specified piece of code once the timer expires."),(0,r.mdx)("h4",{id:"signature"},"Signature"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"setTimeout(functionRef: Function, delay: number, ...params: any[]): number")),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"functionRef")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"function")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"A function to be executed after the timer expires.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delay")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},'The time, in milliseconds, that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"params")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"any []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Additional arguments which are passed through to the function specified by ",(0,r.mdx)("inlineCode",{parentName:"td"},"functionRef"),".")))),(0,r.mdx)("h4",{id:"returns"},"Returns"),(0,r.mdx)("p",null,"A positive integer representing an identifier for the timeout function(aka: ",(0,r.mdx)("inlineCode",{parentName:"p"},"timeoutID"),"), which can be passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"clearTimeout()")," to cancel the timeout."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," It's guaranteed that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"timeoutID")," value will never be reused by a subsequent call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"setTimeout()")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"setInterval()")," on the same object (a window or a worker). "),(0,r.mdx)("h3",{id:"cleartimeout"},"clearTimeout()"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout"},(0,r.mdx)("inlineCode",{parentName:"a"},"clearTimeout()"))," method implementation cancels a timeout previously established by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"setTimeout()"),". If the parameter provided does not identify a previously established action, this method does nothing."),(0,r.mdx)("h4",{id:"signature-1"},"Signature"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"clearTimeout(timeoutID: number): void")),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"timeoutID")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to ",(0,r.mdx)("inlineCode",{parentName:"td"},"setTimeout()"),".")))),(0,r.mdx)("h4",{id:"returns-1"},"Returns"),(0,r.mdx)("p",null,"None (",(0,r.mdx)("inlineCode",{parentName:"p"},"undefined"),")."),(0,r.mdx)("h3",{id:"setinterval"},"setInterval()"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setInterval"},(0,r.mdx)("inlineCode",{parentName:"a"},"setInterval()"))," method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"clearInterval()"),"."),(0,r.mdx)("h4",{id:"signature-2"},"Signature"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"setInterval(functionRef: Function, delay: number, ...params: any[]): number")),(0,r.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"functionRef")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"function")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delay")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"params")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"any []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Additional arguments which are passed through to the function specified by func once the timer expires.")))),(0,r.mdx)("h4",{id:"returns-2"},"Returns"),(0,r.mdx)("p",null,"The returned ",(0,r.mdx)("inlineCode",{parentName:"p"},"intervalID")," is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"clearInterval()")," to cancel the interval."),(0,r.mdx)("h3",{id:"clearinterval"},"clearInterval()"),(0,r.mdx)("p",null,"Implements the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/clearInterval"},(0,r.mdx)("inlineCode",{parentName:"a"},"clearInterval()"))," method, which cancels a timed, repeating action which was previously established by a call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"setInterval()"),". If the parameter provided does not identify a previously established action, this method does nothing."),(0,r.mdx)("h4",{id:"signature-3"},"Signature"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"clearInterval(intervalID: number): void")),(0,r.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"intervalID")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The identifier of the repeated action you want to cancel. This ID was returned by the corresponding call to ",(0,r.mdx)("inlineCode",{parentName:"td"},"setInterval()"),".")))),(0,r.mdx)("h4",{id:"returns-3"},"Returns"),(0,r.mdx)("p",null,"None (",(0,r.mdx)("inlineCode",{parentName:"p"},"undefined"),")."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-scriptruntime-common-index-md-e69ffc0805ef8320b269.js.map