"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[4626],{4665:(t,e,n)=>{n.d(e,{Z:()=>k});n(7294);var i=n(6905),r=n(1976),c=n(8746),s=n(1699),a=n(1614),o=n(4055);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(c.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:c}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),c&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function h(t){let{item:e}=t;const n=(0,r.LM)(e);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,l.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(f,{item:e});case"category":return(0,l.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,r.jA)();return(0,l.jsx)(k,{items:n.items,className:e})}function k(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(x,{...t});const c=(0,r.MN)(e);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:t})},e)))})}},9390:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(5893),r=n(1151),c=n(4665);const s={},a="\u51fd\u6570\u57fa\u7840",o={id:"math/function-basics/index",title:"\u51fd\u6570\u57fa\u7840",description:"\u5728\u521d\u4e2d\u6211\u4eec\u5c31\u5b66\u8fc7\u4e00\u4e9b\u7279\u6b8a\u7684\u51fd\u6570\uff1a\u4e00\u6b21\u51fd\u6570\uff0c\u4e8c\u6b21\u51fd\u6570\u4ee5\u53ca\u53cd\u6bd4\u4f8b\u51fd\u6570\uff0e\u8fd9\u91cc\uff0c\u6211\u4eec\u8981\u4ee5\u9ad8\u4e2d\u7684\u89c6\u89d2\u91cd\u65b0\u770b\u5f85\u51fd\u6570\uff0c\u5f15\u5165\u8bb8\u591a\u51fd\u6570\u7684\u76f8\u5173\u6982\u5ff5\uff0c\u4ee5\u4fbf\u4e8e\u6211\u4eec\u7814\u7a76\u66f4\u666e\u904d\u7684\u51fd\u6570\uff0e",source:"@site/docs/math/function-basics/index.md",sourceDirName:"math/function-basics",slug:"/math/function-basics/",permalink:"/whk-wiki/math/function-basics/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/master/docs/math/function-basics/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701394043,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",frontMatter:{},sidebar:"mathSidebar",previous:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/math/inequality/trigonometric-function"},next:{title:"\u51fd\u6570",permalink:"/whk-wiki/math/function-basics/function"}},d={},l=[];function u(t){const e={h1:"h1",p:"p",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u51fd\u6570\u57fa\u7840",children:"\u51fd\u6570\u57fa\u7840"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u521d\u4e2d\u6211\u4eec\u5c31\u5b66\u8fc7\u4e00\u4e9b\u7279\u6b8a\u7684\u51fd\u6570\uff1a\u4e00\u6b21\u51fd\u6570\uff0c\u4e8c\u6b21\u51fd\u6570\u4ee5\u53ca\u53cd\u6bd4\u4f8b\u51fd\u6570\uff0e\u8fd9\u91cc\uff0c\u6211\u4eec\u8981\u4ee5\u9ad8\u4e2d\u7684\u89c6\u89d2\u91cd\u65b0\u770b\u5f85\u51fd\u6570\uff0c\u5f15\u5165\u8bb8\u591a\u51fd\u6570\u7684\u76f8\u5173\u6982\u5ff5\uff0c\u4ee5\u4fbf\u4e8e\u6211\u4eec\u7814\u7a76\u66f4\u666e\u904d\u7684\u51fd\u6570\uff0e"}),"\n",(0,i.jsx)(c.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var i=n(7294);const r={},c=i.createContext(r);function s(t){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(c.Provider,{value:e},t.children)}}}]);