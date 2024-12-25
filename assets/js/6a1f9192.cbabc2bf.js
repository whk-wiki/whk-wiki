"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[8954],{16172:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(96540),s=n(34164),i=n(10381),c=n(68957),o=n(22777);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function d(){const e=m();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var h=n(33091),p=n(45122),f=n(14794);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(74848);function w(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,s.A)("card padding--lg",g.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",g.cardDescription),title:i,children:i})]})}function y(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=d();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(j,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(b,{...e});const r=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},83655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"physics/electromagnetism/electromagnetic-wave/index","title":"\u7535\u78c1\u6ce2","description":"","source":"@site/docs/physics/electromagnetism/electromagnetic-wave/index.md","sourceDirName":"physics/electromagnetism/electromagnetic-wave","slug":"/physics/electromagnetism/electromagnetic-wave/","permalink":"/whk-wiki/physics/electromagnetism/electromagnetic-wave/","draft":false,"unlisted":false,"editUrl":"https://github.com/whk-wiki/whk-wiki/tree/main/docs/physics/electromagnetism/electromagnetic-wave/index.md","tags":[],"version":"current","lastUpdatedBy":"dbxxx","lastUpdatedAt":1720010170000,"frontMatter":{},"sidebar":"electromagnetismSidebar","previous":{"title":"\u96c6\u5408","permalink":"/whk-wiki/physics/electromagnetism/alternating-current/set"},"next":{"title":"\u96c6\u5408","permalink":"/whk-wiki/physics/electromagnetism/electromagnetic-wave/set"}}');var s=n(74848),i=n(28453),c=n(16172);const o={},a="\u7535\u78c1\u6ce2",l={},u=[];function m(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u7535\u78c1\u6ce2",children:"\u7535\u78c1\u6ce2"})}),"\n","\n",(0,s.jsx)(c.A,{})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);