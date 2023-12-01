---
sidebar_position: 4
---

# 教材电子书下载

笔者完成了一个将电子书从人教版官网上下载，并且自动将图片合成为一个 pdf 的 python 脚本，会放在本文的最后．下面是脚本的使用方法与注意事项：

从本文的最后复制脚本为 `download.py`，运行 `python download.py [name]`，`[name]` 填入你想要下载的教材代号．

运行该脚本需要安装 pillow 库，安装方法为 `pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Pillow`．

```python title="download.py"
import os, sys, requests
from PIL import Image

def download(file_path, picture_url) -> bool:
	headers = {
		"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 			(KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE",
	}
	r = requests.get(picture_url, headers=headers)
	if r.content == b'':
		return False
	with open(file_path, 'wb') as f:
		f.write(r.content)
	return True

ids = {
	'math-xxa2': '1421001138232',
	'math-xxa3': '1421001138233',
	'math-xxb4': '1421001138237',
}

def main(name: str) -> None:
	name = name.lower()
	os.makedirs(f'./{name}/', exist_ok=True)  # 输出目录
	id = ids[name]
	if id == None:
		print('Error: Can\'t find book ' + name)
		return

	print('Start downloading book ' + name + ' with id ' + id)
	prefix = f'https://book.pep.com.cn/{id}/files/mobile/'
	n = 0
	while True:
		file_path = f'./{name}/{n + 1}.jpg'
		picture_url = prefix + str(n + 1) + f'.jpg'
		if not download(file_path, picture_url):
			break
		print(f'Page {n + 1} from {picture_url} is downloaded')
		n = n + 1

	print(f'All downloaded! {n} pages in total')
	print('Now combine them to a pdf')

	output = Image.open(f'./{name}/1.jpg')
	output = output.convert('RGB')

	sources = []
	for i in range(2, n + 1):
		img = Image.open(f'./{name}/{i}.jpg')
		if img.mode == 'RGBA':
			img = img.convert('RGB')
		sources.append(img)

	output.save(f'./{name}/{name}.pdf', 'pdf', save_all=True, append_images = sources)
	print(f'Combine to pdf ./{name}/{name}.pdf done')

if __name__ == '__main__':
	main(sys.argv[1])
```
