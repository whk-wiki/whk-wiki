"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[7159],{4665:(e,t,i)=>{i.d(t,{Z:()=>k});i(7294);var n=i(6905),r=i(1976),c=i(8746),s=i(1699),a=i(1614),o=i(4055);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(5893);function h(e){let{href:t,children:i}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:c}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),c&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function u(e){let{item:t}=e;const i=(0,r.LM)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.jA)();return(0,d.jsx)(k,{items:i.items,className:t})}function k(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",i),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},5432:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(5893),r=i(1151),c=i(4665);const s={},a="\u673a\u68b0\u632f\u52a8",o={id:"physics/mechanical-vibration/index",title:"\u673a\u68b0\u632f\u52a8",description:"",source:"@site/docs/physics/mechanical-vibration/index.md",sourceDirName:"physics/mechanical-vibration",slug:"/physics/mechanical-vibration/",permalink:"/whk-wiki/physics/mechanical-vibration/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/master/docs/physics/mechanical-vibration/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701394043,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",frontMatter:{},sidebar:"physicsSidebar",previous:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/momentum/set"},next:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/mechanical-vibration/set"}},l={},d=[];function h(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u673a\u68b0\u632f\u52a8",children:"\u673a\u68b0\u632f\u52a8"}),"\n",(0,n.jsx)(c.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var n=i(7294);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);