"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[8519],{52822:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),s=n(34164),i=n(9935),c=n(7634),o=n(40502);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var h=n(75242),p=n(59979),g=n(24861);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(74848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,s.A)("card padding--lg",f.cardContainer),children:n})}function w(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(g.A,{as:"h2",className:(0,s.A)("text--truncate",f.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",f.cardDescription),title:i,children:i})]})}function k(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(w,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(w,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(N,{...e});const r=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(b,{item:e})},t)))})}},17194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"physics/electromagnetism/magnetics/index","title":"\u78c1\u5b66","description":"- \u65e9\u671f\u7684\u7535\u5b66\u548c\u78c1\u5b66\u662f\u5b8c\u5168\u5206\u79bb\u7684\uff0e\u7535\u5b66\u7814\u7a76\u7684\u662f\u7535\u6c60\u3001\u7535\u6d41\u3001\u7535\u89e3\u3001\u7535\u706f\u7b49\uff1b\u800c\u78c1\u5b66\u7814\u7a76\u7684\u662f\u78c1\u68d2\u3001\u94c1\u586b\u5145\u7269\u3001\u6307\u5357\u9488\u4e0e\u5730\u78c1\u6781\u7b49\uff0e","source":"@site/docs/physics/electromagnetism/magnetics/index.md","sourceDirName":"physics/electromagnetism/magnetics","slug":"/physics/electromagnetism/magnetics/","permalink":"/whk-wiki/physics/electromagnetism/magnetics/","draft":false,"unlisted":false,"editUrl":"https://github.com/whk-wiki/whk-wiki/tree/main/docs/physics/electromagnetism/magnetics/index.md","tags":[],"version":"current","lastUpdatedBy":"dbxxx","lastUpdatedAt":1720010170000,"frontMatter":{},"sidebar":"electromagnetismSidebar","previous":{"title":"\u7535\u8868\u6539\u88c5","permalink":"/whk-wiki/physics/electromagnetism/constant-current/meter"},"next":{"title":"\u78c1\u5b66\u57fa\u7840","permalink":"/whk-wiki/physics/electromagnetism/magnetics/basics"}}');var s=n(74848),i=n(28453),c=n(52822);const o={},l="\u78c1\u5b66",a={},d=[];function u(e){const t={h1:"h1",header:"header",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u78c1\u5b66",children:"\u78c1\u5b66"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u65e9\u671f\u7684\u7535\u5b66\u548c\u78c1\u5b66\u662f\u5b8c\u5168\u5206\u79bb\u7684\uff0e\u7535\u5b66\u7814\u7a76\u7684\u662f\u7535\u6c60\u3001\u7535\u6d41\u3001\u7535\u89e3\u3001\u7535\u706f\u7b49\uff1b\u800c\u78c1\u5b66\u7814\u7a76\u7684\u662f\u78c1\u68d2\u3001\u94c1\u586b\u5145\u7269\u3001\u6307\u5357\u9488\u4e0e\u5730\u78c1\u6781\u7b49\uff0e"}),"\n",(0,s.jsxs)(t.li,{children:["\u5728 1820 \u5e74\uff0c",(0,s.jsx)(t.strong,{children:"\u5965\u65af\u7279"})," \u6ce8\u610f\u5230\uff1a",(0,s.jsx)(t.strong,{children:"\u7535\u6d41\u53ef\u4ee5\u4f7f\u4e00\u4e2a\u78c1\u9488\u504f\u8f6c"}),"\uff0e"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5f88\u5feb\uff0c",(0,s.jsx)(t.strong,{children:"\u5b89\u57f9"})," \u6b63\u786e\u5730\u63a8\u6d4b\u51fa\uff1a",(0,s.jsx)(t.strong,{children:"\u6240\u6709\u7684\u78c1\u73b0\u8c61\u90fd\u5f52\u56e0\u4e8e\u7535\u8377\u7684\u8fd0\u52a8"}),"\uff0e"]}),"\n",(0,s.jsxs)(t.li,{children:["\u968f\u540e\uff0c\u5728 1831 \u5e74\uff0c",(0,s.jsx)(t.strong,{children:"\u6cd5\u62c9\u7b2c"})," \u53d1\u73b0 ",(0,s.jsx)(t.strong,{children:"\u8fd0\u52a8\u7684\u78c1\u4f53\u53ef\u4ea7\u751f\u7535\u6d41"}),"\uff0e"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728 ",(0,s.jsx)(t.strong,{children:"\u9ea6\u514b\u65af\u97e6"})," \u548c ",(0,s.jsx)(t.strong,{children:"\u6d1b\u4f26\u5179"})," \u5bf9\u7406\u8bba\u8fdb\u884c\u6700\u540e\u5b8c\u5584\u65f6\uff0c\u7535\u5b66\u548c\u78c1\u5b66\u5df2\u7ecf\u5b8c\u5168\u4ea4\u7ec7\u5728\u4e00\u8d77\uff0c\u4e0d\u80fd\u518d\u628a\u5b83\u4eec\u8ba4\u4e3a\u662f\u5206\u5272\u7684\u4e8b\u7269\uff0c\u800c\u662f\u540c\u4e00\u4e2a\u4e8b\u7269\uff1a\u7535\u78c1\u5b66\u7684\u4e24\u4e2a\u4e0d\u540c\u65b9\u9762\uff0e"]}),"\n"]}),"\n","\n",(0,s.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);