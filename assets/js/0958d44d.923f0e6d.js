"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[365],{4665:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6905),s=n(1976),r=n(5013),c=n(1699),o=n(1614),a=n(4055);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(r.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:s,description:r}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),r&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(f,{...e});const r=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},2778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151),r=n(4665);const c={},o="\u78c1\u5b66",a={id:"physics/magnetics/index",title:"\u78c1\u5b66",description:"- \u65e9\u671f\u7684\u7535\u5b66\u548c\u78c1\u5b66\u662f\u5b8c\u5168\u5206\u79bb\u7684\uff0e\u7535\u5b66\u7814\u7a76\u7684\u662f\u7535\u6c60\u3001\u7535\u6d41\u3001\u7535\u89e3\u3001\u7535\u706f\u7b49\uff1b\u800c\u78c1\u5b66\u7814\u7a76\u7684\u662f\u78c1\u68d2\u3001\u94c1\u586b\u5145\u7269\u3001\u6307\u5357\u9488\u4e0e\u5730\u78c1\u6781\u7b49\uff0e",source:"@site/docs/physics/magnetics/index.md",sourceDirName:"physics/magnetics",slug:"/physics/magnetics/",permalink:"/whk-wiki/physics/magnetics/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/physics/magnetics/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1702537417,formattedLastUpdatedAt:"2023\u5e7412\u670814\u65e5",frontMatter:{},sidebar:"physicsSidebar",previous:{title:"\u7535\u8868\u6539\u88c5",permalink:"/whk-wiki/physics/constant-current/meter"},next:{title:"\u78c1\u5b66\u57fa\u7840",permalink:"/whk-wiki/physics/magnetics/basics"}},l={},d=[];function h(e){const t={h1:"h1",li:"li",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u78c1\u5b66",children:"\u78c1\u5b66"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u65e9\u671f\u7684\u7535\u5b66\u548c\u78c1\u5b66\u662f\u5b8c\u5168\u5206\u79bb\u7684\uff0e\u7535\u5b66\u7814\u7a76\u7684\u662f\u7535\u6c60\u3001\u7535\u6d41\u3001\u7535\u89e3\u3001\u7535\u706f\u7b49\uff1b\u800c\u78c1\u5b66\u7814\u7a76\u7684\u662f\u78c1\u68d2\u3001\u94c1\u586b\u5145\u7269\u3001\u6307\u5357\u9488\u4e0e\u5730\u78c1\u6781\u7b49\uff0e"}),"\n",(0,i.jsxs)(t.li,{children:["\u5728 1820 \u5e74\uff0c",(0,i.jsx)(t.strong,{children:"\u5965\u65af\u7279"})," \u6ce8\u610f\u5230\uff1a",(0,i.jsx)(t.strong,{children:"\u7535\u6d41\u53ef\u4ee5\u4f7f\u4e00\u4e2a\u78c1\u9488\u504f\u8f6c"}),"\uff0e"]}),"\n",(0,i.jsxs)(t.li,{children:["\u5f88\u5feb\uff0c",(0,i.jsx)(t.strong,{children:"\u5b89\u57f9"})," \u6b63\u786e\u5730\u63a8\u6d4b\u51fa\uff1a",(0,i.jsx)(t.strong,{children:"\u6240\u6709\u7684\u78c1\u73b0\u8c61\u90fd\u5f52\u56e0\u4e8e\u7535\u8377\u7684\u8fd0\u52a8"}),"\uff0e"]}),"\n",(0,i.jsxs)(t.li,{children:["\u968f\u540e\uff0c\u5728 1831 \u5e74\uff0c",(0,i.jsx)(t.strong,{children:"\u6cd5\u62c9\u7b2c"})," \u53d1\u73b0 ",(0,i.jsx)(t.strong,{children:"\u8fd0\u52a8\u7684\u78c1\u4f53\u53ef\u4ea7\u751f\u7535\u6d41"}),"\uff0e"]}),"\n",(0,i.jsxs)(t.li,{children:["\u5728 ",(0,i.jsx)(t.strong,{children:"\u9ea6\u514b\u65af\u97e6"})," \u548c ",(0,i.jsx)(t.strong,{children:"\u6d1b\u4f26\u5179"})," \u5bf9\u7406\u8bba\u8fdb\u884c\u6700\u540e\u5b8c\u5584\u65f6\uff0c\u7535\u5b66\u548c\u78c1\u5b66\u5df2\u7ecf\u5b8c\u5168\u4ea4\u7ec7\u5728\u4e00\u8d77\uff0c\u4e0d\u80fd\u518d\u628a\u5b83\u4eec\u8ba4\u4e3a\u662f\u5206\u5272\u7684\u4e8b\u7269\uff0c\u800c\u662f\u540c\u4e00\u4e2a\u4e8b\u7269\uff1a\u7535\u78c1\u5b66\u7684\u4e24\u4e2a\u4e0d\u540c\u65b9\u9762\uff0e"]}),"\n"]}),"\n","\n","\n",(0,i.jsx)(r.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(7294);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);