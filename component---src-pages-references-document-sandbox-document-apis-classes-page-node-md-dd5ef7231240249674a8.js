"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7223],{87507:function(e,n,d){d.r(n),d.d(n,{_frontmatter:function(){return o},default:function(){return s}});var a=d(87462),t=d(45987),r=(d(15007),d(64983)),m=d(91515);const i=["components"],o={},l={_frontmatter:o},p=m.Z;function s(e){let{components:n}=e,d=(0,t.Z)(e,i);return(0,r.mdx)(p,(0,a.Z)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../overview.md"},"@express-document-sdk")," / PageNode"),(0,r.mdx)("h1",{id:"class-pagenode"},"Class: PageNode"),(0,r.mdx)("p",null,'A PageNode represents a page in the document. A page contains one or more artboards, representing "scenes" in a linear\ntimeline sequence. Those artboards in turn contain all the visual content of the document.'),(0,r.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("p",{parentName:"li"},"↳ ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"PageNode"))))),(0,r.mdx)("h2",{id:"implements"},"Implements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Readonly"),"<",(0,r.mdx)("a",{parentName:"li",href:"../interfaces/IRectangularNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"IRectangularNode")),">")),(0,r.mdx)("h2",{id:"accessors"},"Accessors"),(0,r.mdx)("h3",{id:"allchildren"},"allChildren"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"allChildren"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,r.mdx)("p",null,"Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or\nGroupNode also provide a mutable ",(0,r.mdx)("a",{parentName:"p",href:"../interfaces/ContainerNode.md#children"},"children"),' list. Other nodes with a more specific structure can\nhold children in various discrete "slots"; this ',(0,r.mdx)("inlineCode",{parentName:"p"},"allChildren")," list includes ",(0,r.mdx)("em",{parentName:"p"},"all")," such children and reflects their\noverall display z-order."),(0,r.mdx)("p",null,"Although BaseNode's allChildren may yield other BaseNodes, the subclasses Node and ArtboardNode override allChildren\nto guarantee all their children are full-fledged Node instances."),(0,r.mdx)("h4",{id:"returns"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,r.mdx)("h4",{id:"inherited-from"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.allChildren"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"artboards"},"artboards"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"artboards"),"(): ",(0,r.mdx)("a",{parentName:"p",href:"ArtboardList.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"ArtboardList"))),(0,r.mdx)("p",null,'The artboards or "scenes" of a page, ordered by timeline sequence.'),(0,r.mdx)("h4",{id:"returns-1"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"ArtboardList.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"ArtboardList"))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"height"},"height"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"height"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The height of the node.\nAll Artboards within a page share the same dimensions."),(0,r.mdx)("h4",{id:"returns-2"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("h4",{id:"implementation-of"},"Implementation of"),(0,r.mdx)("p",null,"Readonly.height"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"name"},"name"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"name"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,"The page's name. Displayed as a user-editable label above the current artboard in the UI."),(0,r.mdx)("h4",{id:"returns-3"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"set")," ",(0,r.mdx)("strong",{parentName:"p"},"name"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"name"),"): ",(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.mdx)("inlineCode",{parentName:"td"},"string"))))),(0,r.mdx)("h4",{id:"returns-4"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"parent"},"parent"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"parent"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("p",null,"The node's parent. The parent chain will eventually reach ExpressRootNode for all nodes that are part of the document\ncontent."),(0,r.mdx)("p",null,'Nodes that have been deleted are "orphaned," with a parent chain that terminates in ',(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," without reaching the\nroot node. Such nodes cannot be selected, so it is unlikely to encounter one unless you retain a reference to a node\nthat was part of the document content earlier. Deleted nodes can be reattached to the scenegraph, e.g. via Undo."),(0,r.mdx)("h4",{id:"returns-5"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.parent"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"type"},"type"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"type"),"(): ",(0,r.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,r.mdx)("p",null,"The node's type."),(0,r.mdx)("h4",{id:"returns-6"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,r.mdx)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.type"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"width"},"width"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"width"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The width of the node.\nAll Artboards within a page share the same dimensions."),(0,r.mdx)("h4",{id:"returns-7"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.mdx)("p",null,"Readonly.width"),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"removefromparent"},"removeFromParent"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"removeFromParent"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("p",null,"Removes the node from its parent - effectively deleting it, if the node is not re-added to another parent before the\ndocument is closed."),(0,r.mdx)("p",null,"If parent is a basic ContainerNode, this is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},"node.parent.children.remove(node)"),'. For nodes with other\nchild "slots," removes the child from whichever slot it resides in, if possible. Throws if the slot does not permit\nremoval. No-op if node is already an orphan.'),(0,r.mdx)("h4",{id:"returns-8"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},"BaseNode"),".",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md#removefromparent"},"removeFromParent")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-document-sandbox-document-apis-classes-page-node-md-dd5ef7231240249674a8.js.map