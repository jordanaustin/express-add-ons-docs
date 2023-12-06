"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4742],{99523:function(e,n,d){d.r(n),d.d(n,{_frontmatter:function(){return l},default:function(){return s}});var a=d(87462),r=d(45987),t=(d(15007),d(64983)),m=d(91515);const o=["components"],l={},i={_frontmatter:l},p=m.Z;function s(e){let{components:n}=e,d=(0,r.Z)(e,o);return(0,t.mdx)(p,(0,a.Z)({},i,d,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"../overview.md"},"@express-document-sdk")," / ExpressRootNode"),(0,t.mdx)("h1",{id:"class-expressrootnode"},"Class: ExpressRootNode"),(0,t.mdx)("p",null,'An ExpressRootNode represents the root node of the document\'s "scenegraph" artwork tree.'),(0,t.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,t.mdx)("p",{parentName:"li"},"↳ ",(0,t.mdx)("strong",{parentName:"p"},(0,t.mdx)("inlineCode",{parentName:"strong"},"ExpressRootNode"))))),(0,t.mdx)("h2",{id:"table-of-contents"},"Table of contents"),(0,t.mdx)("h3",{id:"accessors"},"Accessors"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"ExpressRootNode.md#allchildren"},"allChildren")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"ExpressRootNode.md#pages"},"pages")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"ExpressRootNode.md#parent"},"parent")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"ExpressRootNode.md#type"},"type"))),(0,t.mdx)("h3",{id:"methods"},"Methods"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"ExpressRootNode.md#removefromparent"},"removeFromParent"))),(0,t.mdx)("h2",{id:"accessors-1"},"Accessors"),(0,t.mdx)("h3",{id:"allchildren"},"allChildren"),(0,t.mdx)("p",null,"• ",(0,t.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,t.mdx)("strong",{parentName:"p"},"allChildren"),"(): ",(0,t.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,t.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,t.mdx)("p",null,"Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or\nGroupNode also provide a mutable ",(0,t.mdx)("a",{parentName:"p",href:"../interfaces/ContainerNode.md#children"},"children"),' list. Other nodes with a more specific structure can\nhold children in various discrete "slots"; this ',(0,t.mdx)("inlineCode",{parentName:"p"},"allChildren")," list includes ",(0,t.mdx)("em",{parentName:"p"},"all")," such children and reflects their\noverall display z-order."),(0,t.mdx)("p",null,"Although BaseNode's allChildren may yield other BaseNodes, the subclasses Node and ArtboardNode override allChildren\nto guarantee all their children are full-fledged Node instances."),(0,t.mdx)("h4",{id:"returns"},"Returns"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,t.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,t.mdx)("h4",{id:"inherited-from"},"Inherited from"),(0,t.mdx)("p",null,"BaseNode.allChildren"),(0,t.mdx)("hr",null),(0,t.mdx)("h3",{id:"pages"},"pages"),(0,t.mdx)("p",null,"• ",(0,t.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,t.mdx)("strong",{parentName:"p"},"pages"),"(): ",(0,t.mdx)("a",{parentName:"p",href:"PageList.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"PageList"))),(0,t.mdx)("p",null,"The pages of the document. All visual content is contained on artboards within the pages."),(0,t.mdx)("h4",{id:"returns-1"},"Returns"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"PageList.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"PageList"))),(0,t.mdx)("hr",null),(0,t.mdx)("h3",{id:"parent"},"parent"),(0,t.mdx)("p",null,"• ",(0,t.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,t.mdx)("strong",{parentName:"p"},"parent"),"(): ",(0,t.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,t.mdx)("p",null,"The node's parent. Undefined if the node is an orphan, or if the node is the artwork root."),(0,t.mdx)("h4",{id:"returns-2"},"Returns"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,t.mdx)("h4",{id:"inherited-from-1"},"Inherited from"),(0,t.mdx)("p",null,"BaseNode.parent"),(0,t.mdx)("hr",null),(0,t.mdx)("h3",{id:"type"},"type"),(0,t.mdx)("p",null,"• ",(0,t.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,t.mdx)("strong",{parentName:"p"},"type"),"(): ",(0,t.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,t.mdx)("p",null,"The node's type."),(0,t.mdx)("h4",{id:"returns-3"},"Returns"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,t.mdx)("h4",{id:"inherited-from-2"},"Inherited from"),(0,t.mdx)("p",null,"BaseNode.type"),(0,t.mdx)("h2",{id:"methods-1"},"Methods"),(0,t.mdx)("h3",{id:"removefromparent"},"removeFromParent"),(0,t.mdx)("p",null,"▸ ",(0,t.mdx)("strong",{parentName:"p"},"removeFromParent"),"(): ",(0,t.mdx)("inlineCode",{parentName:"p"},"void")),(0,t.mdx)("p",null,"Removes the node from its parent - for a basic ContainerNode, this is equivalent to ",(0,t.mdx)("inlineCode",{parentName:"p"},"node.parent.children.remove(node)"),".\nFor nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does\nnot support removal. Also throws if node is the artwork root. No-op if node is already an orphan."),(0,t.mdx)("h4",{id:"returns-4"},"Returns"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"void")),(0,t.mdx)("h4",{id:"inherited-from-3"},"Inherited from"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md"},"BaseNode"),".",(0,t.mdx)("a",{parentName:"p",href:"BaseNode.md#removefromparent"},"removeFromParent")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-document-sandbox-document-apis-classes-express-root-node-md-3329b5dcc93651a3dcd7.js.map