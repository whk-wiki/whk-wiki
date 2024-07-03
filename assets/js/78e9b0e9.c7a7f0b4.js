"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[1195],{4470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(4848),o=n(8453),i=n(5871);const s={},c="\u751f\u7269\u4f53\u5185\u7684\u8c03\u8282",l={id:"biology/regulation/index",title:"\u751f\u7269\u4f53\u5185\u7684\u8c03\u8282",description:"\u672c\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u751f\u7269\u6559\u6750\u7684 \u9009\u62e9\u6027\u5fc5\u4fee\u4e00\uff0e",source:"@site/docs/biology/regulation/index.md",sourceDirName:"biology/regulation",slug:"/biology/regulation/",permalink:"/whk-wiki/biology/regulation/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/biology/regulation/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701394043e3,frontMatter:{},sidebar:"biologySidebar",previous:{title:"\u4e09\u89d2\u51fd\u6570",permalink:"/whk-wiki/biology/heredity/trigonometric-function"},next:{title:"\u5185\u73af\u5883\u4e0e\u7a33\u6001",permalink:"/whk-wiki/biology/regulation/internal-environment-and-homeostasis/"}},a={},u=[];function d(e){const t={h1:"h1",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u751f\u7269\u4f53\u5185\u7684\u8c03\u8282",children:"\u751f\u7269\u4f53\u5185\u7684\u8c03\u8282"}),"\n","\n",(0,r.jsxs)(t.p,{children:["\u672c\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u751f\u7269\u6559\u6750\u7684 ",(0,r.jsx)(t.strong,{children:"\u9009\u62e9\u6027\u5fc5\u4fee\u4e00"}),"\uff0e"]}),"\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),o=n(4164),i=n(1754),s=n(8774),c=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}var h=n(6654),p=n(1312),f=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function w(e){let{href:t,children:n}=e;return(0,x.jsx)(s.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:i,children:i})]})}function y(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(b,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(v,{...e});const r=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(j,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);