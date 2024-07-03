"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[1290],{7887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(4848),s=n(8453),i=n(5871);const c={},o="\u529b\u5b66\u57fa\u7840",l={id:"physics/mechanics/index",title:"\u529b\u5b66\u57fa\u7840",description:"",source:"@site/docs/physics/mechanics/index.md",sourceDirName:"physics/mechanics",slug:"/physics/mechanics/",permalink:"/whk-wiki/physics/mechanics/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/physics/mechanics/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701394043e3,frontMatter:{},sidebar:"physicsSidebar",previous:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/linear-motion/set"},next:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/mechanics/set"}},a={},u=[];function d(e){const t={h1:"h1",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u529b\u5b66\u57fa\u7840",children:"\u529b\u5b66\u57fa\u7840"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(4164),i=n(1754),c=n(8774),o=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var m=n(6654),p=n(1312),f=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function w(e){let{href:t,children:n}=e;return(0,g.jsx)(c.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:i}=e;return(0,g.jsxs)(w,{href:t,children:[(0,g.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function y(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e;const n=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(j,{item:t});case"category":return(0,g.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.$S)();return(0,g.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(v,{...e});const r=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(b,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);