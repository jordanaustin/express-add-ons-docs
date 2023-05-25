"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5677],{25588:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var o=t(87462),i=t(63366),r=(t(15007),t(64983)),a=t(91515),d=["components"],p=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}},s=p("CodeBlock"),m=p("InlineAlert"),c={},g=a.Z;function l(n){var e=n.components,t=(0,i.Z)(n,d);return(0,r.mdx)(g,(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"export"},"Export"),(0,r.mdx)("p",null,"Export renditions of your design in ",(0,r.mdx)("strong",{parentName:"p"},"jpg"),", ",(0,r.mdx)("strong",{parentName:"p"},"png"),", ",(0,r.mdx)("strong",{parentName:"p"},"pdf")," and ",(0,r.mdx)("strong",{parentName:"p"},"mp4")," formats. Choose to export a single page or the whole document by specifying in the rendition options, along with a variety of other export configuration options outlined below."),(0,r.mdx)(s,{slots:"heading, code",repeat:"3",languages:"JavaScript",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"interface"},"Interface"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'interface Document {\n  /**\n  * Create renditions  \n  * @param renditionOptions - page rendition options\n  * @returns a promise of type array of page rendition  \n  */\n  createRenditions(renditionOptions: RenditionOptions): Promise<Rendition[]>;\n}\n \n\ninterface RenditionOptions {\n  /**\n   * Range of the document to get the rendition\n   */\n  range: Range;\n \n  /**\n   * Format of the rendition\n   */\n  format: RenditionFormat;\n}\n\nexport enum Range {\n    /**\n     * Generate rendition for the current page\n     */\n    currentPage = "currentPage",\n\n    /**\n     * Generate rendition for all the pages\n     */\n    entireDocument = "entireDocument"\n}\n\nenum Range {\n  /**\n   * Generate rendition for the current page\n   */\n  currentPage,\n \n  /**\n   * Generate rendition for all the pages\n   */\n  entireDocument\n}\n \nenum RenditionFormat {\n  /**\n   * PNG format\n   */\n  png = "image/png",\n \n  /**\n   * JPG format\n   */\n  jpg = "image/jpeg",\n \n  /**\n   * MP4 format\n   */\n  mp4 = "video/mp4",\n \n  /**\n   * PDF format\n   */\n  pdf = "application/pdf"\n}\n \ninterface JpgRenditionOptions extends RenditionOptions {\n  /**\n   * JPG rendition format\n   */\n  format: RenditionFormat.jpg;\n \n  /**\n   * The background color to sit behind any transparent areas.\n   * By default it is derived from the entity for which the rendition needs to be created.\n   * Integer in 0xRRGGBB format.\n   */\n  backgroundColor?: number;\n \n  /**\n   * A number between 0 and 1, indicating image quality. Default is 1.0\n   */\n  quality?: number;\n}\n \ninterface PngRenditionOptions extends RenditionOptions {\n  /**\n   * PNG rendition format\n   */\n  format: RenditionFormat.png;\n \n  /**\n   * The background color to sit behind any transparent areas.\n   * By default it is derived from the entity for which the rendition needs to be created.\n   * Integer in 0xAARRGGBB format\n   */\n  backgroundColor?: number;\n}\n\ninterface Rendition {\n  /**\n   * Type of Rendition\n   */\n  type: RenditionType;\n  \n  /**\n   * Blob containing the rendition\n   */\n  blob: Blob;\n}\n \nenum RenditionType {\n  /**\n   * Rendition of the whole page\n   */\n  page = "page"\n}\n \ninterface PageRendition extends Rendition {\n  /**\n   * Page rendition type\n   */\n  type: RenditionType.page;\n \n  /**\n   * Page title\n   */\n  title: string;\n}\n')),(0,r.mdx)("h3",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\n// Display preview of all pages in the Add-on UI\nasync function displayPreview() {\n  try {\n    const renditionOptions: PngRenditionOptions = {range: Range.entireDocument, format: RenditionFormat.png, backgroundColor: 0x7FAA77FF};\n    const renditions = await AddOnSdk.app.document.createRenditions(renditionOptions);\n    renditions.forEach(rendition => {\n      const image = document.createElement("img");\n      image.src = URL.createObjectURL(rendition.blob);\n      document.body.appendChild(image);\n    });\n  }\n  catch(error) {\n    console.log("Failed to create renditions:", error);\n  }\n}\n')),(0,r.mdx)(m,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Please refer to the ",(0,r.mdx)("strong",{parentName:"p"},"export-sample")," and ",(0,r.mdx)("strong",{parentName:"p"},"pix")," add-on in the code samples for more details on how to use the Export APIs."),(0,r.mdx)("h3",{id:"rendition-response-json"},"Rendition Response JSON"),(0,r.mdx)("p",null,'``json\nresponse:\nblob: Blob {size: 357080, type: \'image/png\'}\ntitle: ""\ntype: "page"'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nexport const _frontmatter = {}\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-references-apis-export-md-358cbe465dd8b7f28a6f.js.map