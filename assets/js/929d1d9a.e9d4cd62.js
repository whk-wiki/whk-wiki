"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[385],{9586:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=e(5893),o=e(1151);const i={sidebar_position:3},a="\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",s={id:"intro/book",title:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",description:"\u7b14\u8005\u5b8c\u6210\u4e86\u4e00\u4e2a\u5c06\u7535\u5b50\u4e66\u4ece\u4eba\u6559\u7248\u5b98\u7f51\u4e0a\u4e0b\u8f7d\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u56fe\u7247\u5408\u6210\u4e3a\u4e00\u4e2a pdf \u7684 python \u811a\u672c\uff0c\u4f1a\u653e\u5728\u672c\u6587\u7684\u6700\u540e\uff0e\u4e0b\u9762\u662f\u811a\u672c\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6ce8\u610f\u4e8b\u9879\uff1a",source:"@site/docs/intro/book.md",sourceDirName:"intro",slug:"/intro/book",permalink:"/whk-wiki/intro/book",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/master/docs/intro/book.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"introSidebar",previous:{title:"\u4f7f\u7528\u6280\u5de7",permalink:"/whk-wiki/intro/usage"}},p={},d=[];function c(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",children:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d"}),"\n",(0,r.jsx)(t.p,{children:"\u7b14\u8005\u5b8c\u6210\u4e86\u4e00\u4e2a\u5c06\u7535\u5b50\u4e66\u4ece\u4eba\u6559\u7248\u5b98\u7f51\u4e0a\u4e0b\u8f7d\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u56fe\u7247\u5408\u6210\u4e3a\u4e00\u4e2a pdf \u7684 python \u811a\u672c\uff0c\u4f1a\u653e\u5728\u672c\u6587\u7684\u6700\u540e\uff0e\u4e0b\u9762\u662f\u811a\u672c\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,r.jsxs)(t.p,{children:["\u4ece\u672c\u6587\u7684\u6700\u540e\u590d\u5236\u811a\u672c\u4e3a ",(0,r.jsx)(t.code,{children:"download.py"}),"\uff0c\u8fd0\u884c ",(0,r.jsx)(t.code,{children:"python download.py [name]"}),"\uff0c",(0,r.jsx)(t.code,{children:"[name]"})," \u586b\u5165\u4f60\u60f3\u8981\u4e0b\u8f7d\u7684\u6559\u6750\u4ee3\u53f7\uff0e"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd0\u884c\u8be5\u811a\u672c\u9700\u8981\u5b89\u88c5 pillow \u5e93\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a ",(0,r.jsx)(t.code,{children:"pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Pillow"}),"\uff0e"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:'title="download.py"',children:"import os, sys, requests\r\nfrom PIL import Image\r\n\r\ndef download(file_path, picture_url) -> bool:\r\n\theaders = {\r\n\t\t\"User-Agent\": \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 \t\t\t(KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE\",\r\n\t}\r\n\tr = requests.get(picture_url, headers=headers)\r\n\tif r.content == b'':\r\n\t\treturn False\r\n\twith open(file_path, 'wb') as f:\r\n\t\tf.write(r.content)\r\n\treturn True\r\n\r\nids = {\r\n\t'math-xxa2': '1421001138232',\r\n\t'math-xxa3': '1421001138233',\r\n\t'math-xxb4': '1421001138237',\r\n}\r\n\r\ndef main(name: str) -> None:\r\n\tname = name.lower()\r\n\tos.makedirs(f'./{name}/', exist_ok=True)  # \u8f93\u51fa\u76ee\u5f55\r\n\tid = ids[name]\r\n\tif id == None:\r\n\t\tprint('Error: Can\\'t find book ' + name)\r\n\t\treturn \r\n\t\r\n\tprint('Start downloading book ' + name + ' with id ' + id)\r\n\tprefix = f'https://book.pep.com.cn/{id}/files/mobile/'\r\n\tn = 0\r\n\twhile True:\r\n\t\tfile_path = f'./{name}/{n + 1}.jpg'\r\n\t\tpicture_url = prefix + str(n + 1) + f'.jpg'\r\n\t\tif not download(file_path, picture_url):\r\n\t\t\tbreak\r\n\t\tprint(f'Page {n + 1} from {picture_url} is downloaded')\r\n\t\tn = n + 1\r\n\t\r\n\tprint(f'All downloaded! {n} pages in total')\r\n\tprint('Now combine them to a pdf')\r\n\r\n\toutput = Image.open(f'./{name}/1.jpg')\r\n\toutput = output.convert('RGB')\r\n\r\n\tsources = []\r\n\tfor i in range(2, n + 1):\r\n\t\timg = Image.open(f'./{name}/{i}.jpg')\r\n\t\tif img.mode == 'RGBA':\r\n\t\t\timg = img.convert('RGB')\r\n\t\tsources.append(img)\r\n\t\r\n\toutput.save(f'./{name}/{name}.pdf', 'pdf', save_all=True, append_images = sources)\r\n\tprint(f'Combine to pdf ./{name}/{name}.pdf done')\r\n\r\nif __name__ == '__main__':\r\n\tmain(sys.argv[1])\n"})})]})}function l(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>a});var r=e(7294);const o={},i=r.createContext(o);function a(n){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(i.Provider,{value:t},n.children)}}}]);