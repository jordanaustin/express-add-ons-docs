"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4742],{99523:function(e,n,d){d.r(n),d.d(n,{_frontmatter:function(){return i},default:function(){return s}});var a=d(87462),t=d(45987),r=(d(15007),d(64983)),o=d(91515);const m=["components"],i={},l={_frontmatter:i},p=o.Z;function s(e){let{components:n}=e,d=(0,t.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../overview.md"},"@express-document-sdk")," / ExpressRootNode"),(0,r.mdx)("h1",{id:"class-expressrootnode"},"Class: ExpressRootNode"),(0,r.mdx)("p",null,'An ExpressRootNode represents the root node of the document\'s "scenegraph" artwork tree. The root contains a collection\nof ',(0,r.mdx)("a",{parentName:"p",href:"ExpressRootNode.md#pages"},"pages"),". Each page contains one or more artboards, arranged in a timeline sequence. All the visual content of\nthe document lies within those artboards."),(0,r.mdx)("p",null,"The parent of ExpressRootNode is undefined, since it is the root of the document tree."),(0,r.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("p",{parentName:"li"},"↳ ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ExpressRootNode"))))),(0,r.mdx)("h2",{id:"accessors"},"Accessors"),(0,r.mdx)("h3",{id:"allchildren"},"allChildren"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"allChildren"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,r.mdx)("p",null,"Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or\nGroupNode also provide a mutable ",(0,r.mdx)("a",{parentName:"p",href:"../interfaces/ContainerNode.md#children"},"children"),' list. Other nodes with a more specific structure can\nhold children in various discrete "slots"; this ',(0,r.mdx)("inlineCode",{parentName:"p"},"allChildren")," list includes ",(0,r.mdx)("em",{parentName:"p"},"all")," such children and reflects their\noverall display z-order."),(0,r.mdx)("p",null,"Although BaseNode's allChildren may yield other BaseNodes, the subclasses Node and ArtboardNode override allChildren\nto guarantee all their children are full-fledged Node instances."),(0,r.mdx)("h4",{id:"returns"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.mdx)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode")),">",">"),(0,r.mdx)("h4",{id:"inherited-from"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.allChildren"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"pages"},"pages"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"pages"),"(): ",(0,r.mdx)("a",{parentName:"p",href:"PageList.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"PageList"))),(0,r.mdx)("p",null,"The pages of the document. All visual content is contained on artboards within the pages."),(0,r.mdx)("h4",{id:"returns-1"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"PageList.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"PageList"))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"parent"},"parent"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"parent"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("p",null,"The node's parent. The parent chain will eventually reach ExpressRootNode for all nodes that are part of the document\ncontent."),(0,r.mdx)("p",null,'Nodes that have been deleted are "orphaned," with a parent chain that terminates in ',(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," without reaching the\nroot node. Such nodes cannot be selected, so it is unlikely to encounter one unless you retain a reference to a node\nthat was part of the document content earlier. Deleted nodes can be reattached to the scenegraph, e.g. via Undo."),(0,r.mdx)("h4",{id:"returns-2"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"BaseNode"))),(0,r.mdx)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.parent"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"type"},"type"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," ",(0,r.mdx)("strong",{parentName:"p"},"type"),"(): ",(0,r.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,r.mdx)("p",null,"The node's type."),(0,r.mdx)("h4",{id:"returns-3"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../enums/SceneNodeType.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"SceneNodeType"))),(0,r.mdx)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.mdx)("p",null,"BaseNode.type"),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"removefromparent"},"removeFromParent"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"removeFromParent"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("p",null,"Removes the node from its parent - effectively deleting it, if the node is not re-added to another parent before the\ndocument is closed."),(0,r.mdx)("p",null,"If parent is a basic ContainerNode, this is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},"node.parent.children.remove(node)"),'. For nodes with other\nchild "slots," removes the child from whichever slot it resides in, if possible. Throws if the slot does not permit\nremoval. No-op if node is already an orphan.'),(0,r.mdx)("h4",{id:"returns-4"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"void")),(0,r.mdx)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md"},"BaseNode"),".",(0,r.mdx)("a",{parentName:"p",href:"BaseNode.md#removefromparent"},"removeFromParent")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-document-sandbox-document-apis-classes-express-root-node-md-7bcaeab164406d7a40ff.js.map