"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[9745],{4665:(e,t,n)=>{n.d(t,{Z:()=>k});n(7294);var i=n(6905),r=n(1976),c=n(8746),s=n(1699),o=n(1614),a=n(4055);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),c&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function u(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},5930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(5893),r=n(1151),c=n(4665);const s={},o="\u70ed\u5316\u5b66",a={id:"chemistry/thermal/index",title:"\u70ed\u5316\u5b66",description:"\u672c\u7ae0\u4f4d\u4e8e\u9009\u62e9\u6027\u5fc5\u4fee\u4e00\u7b2c\u4e00\u7ae0\uff0c\u521d\u63a2\u70ed\u529b\u5b66\uff0c\u5f15\u5165\u53cd\u5e94\u70ed\u548c\u7113\u53d8\u4e24\u4e2a\u6982\u5ff5\uff0e",source:"@site/docs/chemistry/thermal/index.md",sourceDirName:"chemistry/thermal",slug:"/chemistry/thermal/",permalink:"/whk-wiki/chemistry/thermal/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/master/docs/chemistry/thermal/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701480411,formattedLastUpdatedAt:"2023\u5e7412\u67082\u65e5",frontMatter:{},sidebar:"chemistrySidebar",previous:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/chemistry/periodic-law/trigonometric-function"},next:{title:"\u5316\u5b66\u53cd\u5e94\u7684\u70ed\u6548\u5e94",permalink:"/whk-wiki/chemistry/thermal/heat"}},l={},d=[];function m(e){const t={h1:"h1",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u70ed\u5316\u5b66",children:"\u70ed\u5316\u5b66"}),"\n","\n","\n",(0,i.jsx)(t.p,{children:"\u672c\u7ae0\u4f4d\u4e8e\u9009\u62e9\u6027\u5fc5\u4fee\u4e00\u7b2c\u4e00\u7ae0\uff0c\u521d\u63a2\u70ed\u529b\u5b66\uff0c\u5f15\u5165\u53cd\u5e94\u70ed\u548c\u7113\u53d8\u4e24\u4e2a\u6982\u5ff5\uff0e"}),"\n",(0,i.jsx)(c.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);