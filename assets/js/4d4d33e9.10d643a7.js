"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[5368],{4665:(e,t,i)=>{i.d(t,{Z:()=>k});i(7294);var n=i(6905),r=i(1976),s=i(8746),c=i(1699),o=i(1614),a=i(4055);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(5893);function h(e){let{href:t,children:i}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,l.jsxs)(h,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:r,children:[i," ",r]}),s&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function u(e){let{item:t}=e;const i=(0,r.LM)(t);return i?(0,l.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.jA)();return(0,l.jsx)(k,{items:i.items,className:t})}function k(e){const{items:t,className:i}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,n.Z)("row",i),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},4478:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=i(5893),r=i(1151),s=i(4665);const c={},o="\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840",a={id:"chemistry/kinetics/index",title:"\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840",description:"\u672c\u7ae0\u8bb2\u89e3\u9ad8\u8003\u4e2d\u51e0\u4e4e\u662f\u6700\u91cd\u8981\uff0c\u5206\u503c\u6700\u9ad8\u7684\u4e00\u4e2a\u7248\u5757\uff1a\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840\uff0e\u5305\u542b\u5316\u5b66\u53cd\u5e94\u901f\u7387\u3001\u5316\u5b66\u5e73\u8861\u7b49\u5185\u5bb9\uff0e",source:"@site/docs/chemistry/kinetics/index.md",sourceDirName:"chemistry/kinetics",slug:"/chemistry/kinetics/",permalink:"/whk-wiki/chemistry/kinetics/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/chemistry/kinetics/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701970641,formattedLastUpdatedAt:"2023\u5e7412\u67087\u65e5",frontMatter:{},sidebar:"chemistrySidebar",previous:{title:"\u5316\u5b66\u53cd\u5e94\u7684\u65b9\u5411",permalink:"/whk-wiki/chemistry/thermal/direction"},next:{title:"\u5316\u5b66\u53cd\u5e94\u901f\u7387",permalink:"/whk-wiki/chemistry/kinetics/rate"}},d={},l=[];function h(e){const t={h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840",children:"\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840"}),"\n","\n","\n",(0,n.jsx)(t.p,{children:"\u672c\u7ae0\u8bb2\u89e3\u9ad8\u8003\u4e2d\u51e0\u4e4e\u662f\u6700\u91cd\u8981\uff0c\u5206\u503c\u6700\u9ad8\u7684\u4e00\u4e2a\u7248\u5757\uff1a\u5316\u5b66\u52a8\u529b\u5b66\u57fa\u7840\uff0e\u5305\u542b\u5316\u5b66\u53cd\u5e94\u901f\u7387\u3001\u5316\u5b66\u5e73\u8861\u7b49\u5185\u5bb9\uff0e"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u6709\u5173\u672c\u7ae0\u5bf9\u5316\u5b66\u53cd\u5e94\u4e66\u5199\u7684\u7ea6\u5b9a"}),"\uff1a\u5728\u672c\u7ae0\u4e2d\uff0c\u5316\u5b66\u65b9\u7a0b\u5f0f\u7684\u4e66\u5199\u89c4\u5219\u548c\u70ed\u5316\u5b66\u65b9\u7a0b\u5f0f\u76f8\u4eff\uff0c\u4fdd\u7559\u7269\u8d28\u72b6\u6001\u6807\u8bb0\uff0c\u53bb\u9664\u6c14\u4f53\u6c89\u6dc0\u7b26\u53f7\uff0e\u4e0d\u8fc7\uff0c\u663e\u7136\u5316\u5b66\u53cd\u5e94\u901f\u7387\u4e0e\u53cd\u5e94\u6761\u4ef6\u6709\u5173\uff0c\u56e0\u6b64\u53cd\u5e94\u6761\u4ef6\u53ef\u80fd\u4e0d\u7701\u7565\uff0e"]}),"\n",(0,n.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>c});var n=i(7294);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);