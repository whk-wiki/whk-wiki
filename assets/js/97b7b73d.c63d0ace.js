"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[8390],{7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(4848),i=n(8453),s=n(5871);const o={},c="\u5316\u5b66\u8ba1\u91cf",l={id:"chemistry/element/mol/index",title:"\u5316\u5b66\u8ba1\u91cf",description:"\u8fd9\u4e00\u7ae0\u5c06\u6570\u7cfb\u6269\u5145\u81f3\u590d\u6570\uff0e\u4e0d\u8fc7\u4e0d\u7528\u62c5\u5fc3\uff0c\u5728\u9ad8\u4e2d\u6b63\u5e38\u7684\u9898\u76ee\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\uff0c\u9ed8\u8ba4\u6240\u6709\u51fa\u73b0\u7684\u6570\u843d\u5728\u5b9e\u6570\u8303\u56f4\u5185\uff0e\u590d\u6570\u7684\u9898\u76ee\u5728\u9ad8\u8003\u548c\u5e73\u5e38\u7684\u6a21\u62df\u8003\u4e2d\u5145\u5f53\u9001\u5206\u89d2\u8272\uff0c\u6beb\u65e0\u96be\u5ea6\uff0c\u8bfb\u8005\u53ef\u4ee5\u653e\u8f7b\u677e\u5b66\u8fd9\u4e00\u7ae0\uff0e",source:"@site/docs/chemistry/element/mol/index.md",sourceDirName:"chemistry/element/mol",slug:"/chemistry/element/mol/",permalink:"/whk-wiki/chemistry/element/mol/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/chemistry/element/mol/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx",lastUpdatedAt:172001017e4,frontMatter:{},sidebar:"elementSidebar",next:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/chemistry/element/mol/trigonometric-function"}},a={},u=[];function m(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u5316\u5b66\u8ba1\u91cf",children:"\u5316\u5b66\u8ba1\u91cf"}),"\n","\n",(0,r.jsx)(t.p,{children:"\u8fd9\u4e00\u7ae0\u5c06\u6570\u7cfb\u6269\u5145\u81f3\u590d\u6570\uff0e\u4e0d\u8fc7\u4e0d\u7528\u62c5\u5fc3\uff0c\u5728\u9ad8\u4e2d\u6b63\u5e38\u7684\u9898\u76ee\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\uff0c\u9ed8\u8ba4\u6240\u6709\u51fa\u73b0\u7684\u6570\u843d\u5728\u5b9e\u6570\u8303\u56f4\u5185\uff0e\u590d\u6570\u7684\u9898\u76ee\u5728\u9ad8\u8003\u548c\u5e73\u5e38\u7684\u6a21\u62df\u8003\u4e2d\u5145\u5f53\u9001\u5206\u89d2\u8272\uff0c\u6beb\u65e0\u96be\u5ea6\uff0c\u8bfb\u8005\u53ef\u4ee5\u653e\u8f7b\u677e\u5b66\u8fd9\u4e00\u7ae0\uff0e"}),"\n",(0,r.jsx)(s.A,{})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(6540),i=n(4164),s=n(1754),o=n(8774),c=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function d(){const e=m();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(6654),f=n(1312),p=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function w(e){let{href:t,children:n}=e;return(0,g.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",x.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:s}=e;return(0,g.jsxs)(w,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,i.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),s&&(0,g.jsx)("p",{className:(0,i.A)("text--truncate",x.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=d();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,g.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(y,{item:t});case"category":return(0,g.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function A(e){let{className:t}=e;const n=(0,s.$S)();return(0,g.jsx)(C,{items:n.items,className:t})}function C(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(A,{...e});const r=(0,s.d1)(t);return(0,g.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(b,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);