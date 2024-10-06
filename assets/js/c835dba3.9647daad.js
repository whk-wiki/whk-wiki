"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[5524],{8285:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(4848),s=n(8453),i=n(5871);const c={},o="\u6982\u7387\u4e0e\u7edf\u8ba1",a={id:"math/misc/statistics/index",title:"\u6982\u7387\u4e0e\u7edf\u8ba1",description:"\u7b80\u5355\uff01",source:"@site/docs/math/misc/statistics/index.md",sourceDirName:"math/misc/statistics",slug:"/math/misc/statistics/",permalink:"/whk-wiki/math/misc/statistics/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/math/misc/statistics/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx",lastUpdatedAt:172001017e4,frontMatter:{},sidebar:"mathmiscSidebar",previous:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/math/misc/counting/trigonometric-function"},next:{title:"\u6982\u7387\u7684\u6982\u5ff5",permalink:"/whk-wiki/math/misc/statistics/concepts-of-probability"}},l={},u=[];function m(t){const e={h1:"h1",p:"p",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u6982\u7387\u4e0e\u7edf\u8ba1",children:"\u6982\u7387\u4e0e\u7edf\u8ba1"}),"\n",(0,r.jsx)(e.p,{children:"\u7b80\u5355\uff01"}),"\n",(0,r.jsx)(i.A,{})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m(t)}},5871:(t,e,n)=>{n.d(e,{A:()=>A});var r=n(6540),s=n(4164),i=n(1754),c=n(8774),o=n(4586);const a=["zero","one","two","few","many","other"];function l(t){return a.filter((e=>t.includes(e)))}const u={locale:"en",pluralForms:l(["one","other"]),select:t=>1===t?"one":"other"};function m(){const{i18n:{currentLocale:t}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:l(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),u}}),[t])}function d(){const t=m();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const s=n.select(e),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,e,t)}}var h=n(6654),p=n(1312),f=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function w(t){let{href:e,children:n}=t;return(0,g.jsx)(c.A,{href:e,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function k(t){let{href:e,icon:n,title:r,description:i}=t;return(0,g.jsxs)(w,{href:e,children:[(0,g.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function j(t){let{item:e}=t;const n=(0,i.Nr)(e),r=function(){const{selectMessage:t}=d();return e=>t(e,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,g.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function b(t){let{item:e}=t;const n=(0,h.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,g.jsx)(k,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function y(t){let{item:e}=t;switch(e.type){case"link":return(0,g.jsx)(b,{item:e});case"category":return(0,g.jsx)(j,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(t){let{className:e}=t;const n=(0,i.$S)();return(0,g.jsx)(A,{items:n.items,className:e})}function A(t){const{items:e,className:n}=t;if(!e)return(0,g.jsx)(v,{...t});const r=(0,i.d1)(e);return(0,g.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((t,e)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:t})},e)))})}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function c(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);