"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[4810],{16172:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(96540),o=n(34164),s=n(10381),c=n(68957),i=n(22777);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(33091),p=n(45122),f=n(14794);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(74848);function w(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(b,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},92875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"math/geometry/planar-vector/index","title":"\u5e73\u9762\u5411\u91cf","description":"\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u8fdb\u5165\u5fc5\u4fee\u4e8c\u7684\u5b66\u4e60\uff0e\u5fc5\u4fee\u4e00\u7684\u5185\u5bb9\u53ea\u4e0e\u4ee3\u6570\u6709\u5173\uff0c\u800c\u5fc5\u4fee\u4e8c\u5f00\u59cb\u6d89\u53ca\u51e0\u4f55\uff0e\u5e73\u9762\u5411\u91cf\u662f\u7814\u7a76\u51e0\u4f55\u7684\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4fbf\u6377\u5730\u8ba1\u7b97\u5f88\u591a\u4ee5\u524d\u770b\u8d77\u6765\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u51e0\u4f55\u95ee\u9898\uff0e","source":"@site/docs/math/geometry/planar-vector/index.md","sourceDirName":"math/geometry/planar-vector","slug":"/math/geometry/planar-vector/","permalink":"/whk-wiki/math/geometry/planar-vector/","draft":false,"unlisted":false,"editUrl":"https://github.com/whk-wiki/whk-wiki/tree/main/docs/math/geometry/planar-vector/index.md","tags":[],"version":"current","lastUpdatedBy":"dbxxx","lastUpdatedAt":1707677138000,"frontMatter":{},"sidebar":"geometrySidebar","next":{"title":"\u4e09\u89d2\u51fd\u6570","permalink":"/whk-wiki/math/geometry/planar-vector/trigonometric-function"}}');var o=n(74848),s=n(28453),c=n(16172);const i={},a="\u5e73\u9762\u5411\u91cf",l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u5e73\u9762\u5411\u91cf",children:"\u5e73\u9762\u5411\u91cf"})}),"\n",(0,o.jsx)(t.p,{children:"\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u8fdb\u5165\u5fc5\u4fee\u4e8c\u7684\u5b66\u4e60\uff0e\u5fc5\u4fee\u4e00\u7684\u5185\u5bb9\u53ea\u4e0e\u4ee3\u6570\u6709\u5173\uff0c\u800c\u5fc5\u4fee\u4e8c\u5f00\u59cb\u6d89\u53ca\u51e0\u4f55\uff0e\u5e73\u9762\u5411\u91cf\u662f\u7814\u7a76\u51e0\u4f55\u7684\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4fbf\u6377\u5730\u8ba1\u7b97\u5f88\u591a\u4ee5\u524d\u770b\u8d77\u6765\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u51e0\u4f55\u95ee\u9898\uff0e"}),"\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);