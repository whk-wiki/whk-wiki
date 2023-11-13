"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[385],{9586:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=e(5893),i=e(1151);const r={sidebar_position:4},a="\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",s={id:"intro/book",title:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",description:"\u7b14\u8005\u5b8c\u6210\u4e86\u4e00\u4e2a\u5c06\u7535\u5b50\u4e66\u4ece\u4eba\u6559\u7248\u5b98\u7f51\u4e0a\u4e0b\u8f7d\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u56fe\u7247\u5408\u6210\u4e3a\u4e00\u4e2a pdf \u7684 python \u811a\u672c\uff0c\u4f1a\u653e\u5728\u672c\u6587\u7684\u6700\u540e\uff0e\u4e0b\u9762\u662f\u811a\u672c\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6ce8\u610f\u4e8b\u9879\uff1a",source:"@site/docs/intro/book.md",sourceDirName:"intro",slug:"/intro/book",permalink:"/whk-wiki/intro/book",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/master/docs/intro/book.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1699902573,formattedLastUpdatedAt:"2023\u5e7411\u670813\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"introSidebar",previous:{title:"\u683c\u5f0f\u624b\u518c",permalink:"/whk-wiki/intro/format"}},d={},p=[];function l(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d",children:"\u6559\u6750\u7535\u5b50\u4e66\u4e0b\u8f7d"}),"\n",(0,o.jsx)(n.p,{children:"\u7b14\u8005\u5b8c\u6210\u4e86\u4e00\u4e2a\u5c06\u7535\u5b50\u4e66\u4ece\u4eba\u6559\u7248\u5b98\u7f51\u4e0a\u4e0b\u8f7d\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u56fe\u7247\u5408\u6210\u4e3a\u4e00\u4e2a pdf \u7684 python \u811a\u672c\uff0c\u4f1a\u653e\u5728\u672c\u6587\u7684\u6700\u540e\uff0e\u4e0b\u9762\u662f\u811a\u672c\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:["\u4ece\u672c\u6587\u7684\u6700\u540e\u590d\u5236\u811a\u672c\u4e3a ",(0,o.jsx)(n.code,{children:"download.py"}),"\uff0c\u8fd0\u884c ",(0,o.jsx)(n.code,{children:"python download.py [name]"}),"\uff0c",(0,o.jsx)(n.code,{children:"[name]"})," \u586b\u5165\u4f60\u60f3\u8981\u4e0b\u8f7d\u7684\u6559\u6750\u4ee3\u53f7\uff0e"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd0\u884c\u8be5\u811a\u672c\u9700\u8981\u5b89\u88c5 pillow \u5e93\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a ",(0,o.jsx)(n.code,{children:"pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Pillow"}),"\uff0e"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:'title="download.py"',children:"import os, sys, requests\nfrom PIL import Image\n\ndef download(file_path, picture_url) -> bool:\n\theaders = {\n\t\t\"User-Agent\": \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 \t\t\t(KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE\",\n\t}\n\tr = requests.get(picture_url, headers=headers)\n\tif r.content == b'':\n\t\treturn False\n\twith open(file_path, 'wb') as f:\n\t\tf.write(r.content)\n\treturn True\n\nids = {\n\t'math-xxa2': '1421001138232',\n\t'math-xxa3': '1421001138233',\n\t'math-xxb4': '1421001138237',\n}\n\ndef main(name: str) -> None:\n\tname = name.lower()\n\tos.makedirs(f'./{name}/', exist_ok=True)  # \u8f93\u51fa\u76ee\u5f55\n\tid = ids[name]\n\tif id == None:\n\t\tprint('Error: Can\\'t find book ' + name)\n\t\treturn\n\n\tprint('Start downloading book ' + name + ' with id ' + id)\n\tprefix = f'https://book.pep.com.cn/{id}/files/mobile/'\n\tn = 0\n\twhile True:\n\t\tfile_path = f'./{name}/{n + 1}.jpg'\n\t\tpicture_url = prefix + str(n + 1) + f'.jpg'\n\t\tif not download(file_path, picture_url):\n\t\t\tbreak\n\t\tprint(f'Page {n + 1} from {picture_url} is downloaded')\n\t\tn = n + 1\n\n\tprint(f'All downloaded! {n} pages in total')\n\tprint('Now combine them to a pdf')\n\n\toutput = Image.open(f'./{name}/1.jpg')\n\toutput = output.convert('RGB')\n\n\tsources = []\n\tfor i in range(2, n + 1):\n\t\timg = Image.open(f'./{name}/{i}.jpg')\n\t\tif img.mode == 'RGBA':\n\t\t\timg = img.convert('RGB')\n\t\tsources.append(img)\n\n\toutput.save(f'./{name}/{name}.pdf', 'pdf', save_all=True, append_images = sources)\n\tprint(f'Combine to pdf ./{name}/{name}.pdf done')\n\nif __name__ == '__main__':\n\tmain(sys.argv[1])\n"})})]})}function c(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>a});var o=e(7294);const i={},r=o.createContext(i);function a(t){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(r.Provider,{value:n},t.children)}}}]);