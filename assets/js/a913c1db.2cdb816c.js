"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[4887],{16172:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),i=n(34164),c=n(10381),s=n(68957),o=n(22777);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),c=n.pluralForms.indexOf(i);return r[Math.min(c,r.length-1)]}(n,t,e)}}var h=n(33091),p=n(45122),f=n(14794);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(74848);function w(e){let{href:t,children:n}=e;return(0,g.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",x.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:c}=e;return(0,g.jsxs)(w,{href:t,children:[(0,g.jsxs)(f.A,{as:"h2",className:(0,i.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),c&&(0,g.jsx)("p",{className:(0,i.A)("text--truncate",x.cardDescription),title:c,children:c})]})}function k(e){let{item:t}=e;const n=(0,c.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.cC)(t.docId??void 0);return(0,g.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(y,{item:t});case"category":return(0,g.jsx)(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,c.$S)();return(0,g.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(N,{...e});const r=(0,c.d1)(t);return(0,g.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(b,{item:e})},t)))})}},46850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"math/geometry/line-and-circle/index","title":"\u76f4\u7ebf\u548c\u5706","description":"\u4ece\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u5b66\u4e60\u5e73\u9762\u89e3\u6790\u51e0\u4f55\uff0e","source":"@site/docs/math/geometry/line-and-circle/index.md","sourceDirName":"math/geometry/line-and-circle","slug":"/math/geometry/line-and-circle/","permalink":"/whk-wiki/math/geometry/line-and-circle/","draft":false,"unlisted":false,"editUrl":"https://github.com/whk-wiki/whk-wiki/tree/main/docs/math/geometry/line-and-circle/index.md","tags":[],"version":"current","lastUpdatedBy":"dbxxx","lastUpdatedAt":1707677138000,"frontMatter":{},"sidebar":"geometrySidebar","previous":{"title":"\u4e09\u89d2\u51fd\u6570","permalink":"/whk-wiki/math/geometry/3d/trigonometric-function"},"next":{"title":"\u4ece\u70b9\u51fa\u53d1","permalink":"/whk-wiki/math/geometry/line-and-circle/point"}}');var i=n(74848),c=n(28453),s=n(16172);const o={},l="\u76f4\u7ebf\u548c\u5706",a={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u76f4\u7ebf\u548c\u5706",children:"\u76f4\u7ebf\u548c\u5706"})}),"\n","\n",(0,i.jsx)(t.p,{children:"\u4ece\u672c\u7ae0\u5f00\u59cb\u6211\u4eec\u5b66\u4e60\u5e73\u9762\u89e3\u6790\u51e0\u4f55\uff0e"}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u4e8c\u5143\u65b9\u7a0b\u7684\u4e00\u7ec4\u89e3\u53ef\u4ee5\u4e0e\u4e00\u4e2a\u4e8c\u5143\u5b9e\u6570\u70b9\u5bf9\u4e00\u4e00\u5bf9\u5e94\uff0c\u800c\u901a\u8fc7\u5e73\u9762\u76f4\u89d2\u5750\u6807\u7cfb\uff0c\u4e00\u4e2a\u4e8c\u5143\u5b9e\u6570\u70b9\u5bf9\u53c8\u80fd\u548c\u5e73\u9762\u4e0a\u7684\u4e00\u4e2a\u70b9\u4e00\u4e00\u5bf9\u5e94\uff0e\u8fd9\u6837\u4ee5\u6765\uff0c\u4e00\u4e2a\u4e8c\u5143\u65b9\u7a0b\u7684\u4e00\u7ec4\u89e3\u5c31\u80fd\u548c\u5e73\u9762\u4e0a\u7684\u4e00\u4e2a\u70b9\u4e00\u4e00\u5bf9\u5e94\uff0e"}),"\n",(0,i.jsx)(t.p,{children:"\u56e0\u6b64\uff0c\u4e00\u4e2a\u4e8c\u5143\u65b9\u7a0b\uff0c\u5c31\u80fd\u5bf9\u5e94\u5b83\u6240\u6709\u89e3\u6784\u6210\u7684\u89e3\u96c6\uff0c\u8fdb\u800c\u5bf9\u5e94\u5e73\u9762\u4e0a\u7684\u4e00\u4e2a\u70b9\u96c6\uff0e\u800c\u6709\u4e9b\u70b9\u96c6\u53c8\u80fd\u5bf9\u5e94\u4e00\u4e2a\u66f2\u7ebf\uff0e\u53cd\u8fc7\u6765\uff0c\u4e00\u4e2a\u66f2\u7ebf\u4e5f\u53ef\u80fd\u548c\u67d0\u4e2a\u4e8c\u5143\u65b9\u7a0b\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0e"}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u9ad8\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u7814\u7a76\u4e8c\u5143\u4e00\u6b21\u65b9\u7a0b\u548c\u4e8c\u5143\u4e8c\u6b21\u65b9\u7a0b\uff0e\u4e8c\u5143\u4e00\u6b21\u65b9\u7a0b\u5bf9\u5e94\u7684\u66f2\u7ebf\u662f\u76f4\u7ebf\uff08\u5728\u9ad8\u4e2d\u6570\u5b66\uff0c\u6211\u4eec\u8ba4\u4e3a\u76f4\u7ebf\u662f\u5e7f\u4e49\u7684\u66f2\u7ebf\uff0c\u8fd9\u4e0e\u7269\u7406\u6709\u6240\u4e0d\u540c\uff09\uff0c\u800c\u4e8c\u5143\u4e8c\u6b21\u65b9\u7a0b\u5bf9\u5e94\u7684\u66f2\u7ebf\u5c31\u53eb\u505a\u5706\u9525\u66f2\u7ebf\uff0e"}),"\n",(0,i.jsx)(t.p,{children:"\u66f2\u7ebf\u662f\u51e0\u4f55\u7684\uff0c\u65b9\u7a0b\u662f\u4ee3\u6570\u7684\uff0e\u7136\u800c\uff0c\u901a\u8fc7\u8fd9\u79cd\u5bf9\u5e94\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u5e73\u9762\u66f2\u7ebf\u5bf9\u5e94\u7684\u65b9\u7a0b\u6765\u89e3\u51b3\u95ee\u9898\uff0c\u8fd9\u6837\u7684\u4e00\u79cd\u7814\u7a76\u5e73\u9762\u51e0\u4f55\u7684\u5206\u652f\u5b66\u79d1\u79f0\u4f5c\u5e73\u9762\u89e3\u6790\u51e0\u4f55\uff0e"}),"\n",(0,i.jsx)(t.p,{children:"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u76f4\u7ebf\u548c\u5706\uff0e"}),"\n",(0,i.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);