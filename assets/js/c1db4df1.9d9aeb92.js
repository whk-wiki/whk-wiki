"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[4810],{50:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(4848),o=n(8453),c=n(5871);const i={},s="\u5e73\u9762\u5411\u91cf",a={id:"math/geometry/planar-vector/index",title:"\u5e73\u9762\u5411\u91cf",description:"\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u8fdb\u5165\u5fc5\u4fee\u4e8c\u7684\u5b66\u4e60\uff0e\u5fc5\u4fee\u4e00\u7684\u5185\u5bb9\u53ea\u4e0e\u4ee3\u6570\u6709\u5173\uff0c\u800c\u5fc5\u4fee\u4e8c\u5f00\u59cb\u6d89\u53ca\u51e0\u4f55\uff0e\u5e73\u9762\u5411\u91cf\u662f\u7814\u7a76\u51e0\u4f55\u7684\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4fbf\u6377\u5730\u8ba1\u7b97\u5f88\u591a\u4ee5\u524d\u770b\u8d77\u6765\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u51e0\u4f55\u95ee\u9898\uff0e",source:"@site/docs/math/geometry/planar-vector/index.md",sourceDirName:"math/geometry/planar-vector",slug:"/math/geometry/planar-vector/",permalink:"/whk-wiki/math/geometry/planar-vector/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/math/geometry/planar-vector/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx",lastUpdatedAt:1707677138e3,frontMatter:{},sidebar:"geometrySidebar",next:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/math/geometry/planar-vector/trigonometric-function"}},l={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u5e73\u9762\u5411\u91cf",children:"\u5e73\u9762\u5411\u91cf"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u8fdb\u5165\u5fc5\u4fee\u4e8c\u7684\u5b66\u4e60\uff0e\u5fc5\u4fee\u4e00\u7684\u5185\u5bb9\u53ea\u4e0e\u4ee3\u6570\u6709\u5173\uff0c\u800c\u5fc5\u4fee\u4e8c\u5f00\u59cb\u6d89\u53ca\u51e0\u4f55\uff0e\u5e73\u9762\u5411\u91cf\u662f\u7814\u7a76\u51e0\u4f55\u7684\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4fbf\u6377\u5730\u8ba1\u7b97\u5f88\u591a\u4ee5\u524d\u770b\u8d77\u6765\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u51e0\u4f55\u95ee\u9898\uff0e"}),"\n",(0,r.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),o=n(4164),c=n(1754),i=n(8774),s=n(4586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}var h=n(6654),p=n(1312),f=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function w(e){let{href:t,children:n}=e;return(0,x.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:c}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),c&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:c,children:c})]})}function y(e){let{item:t}=e;const n=(0,c.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.cC)(t.docId??void 0);return(0,x.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(j,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,c.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(b,{...e});const r=(0,c.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const o={},c=r.createContext(o);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);