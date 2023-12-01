import React from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common"; // 导入当前主题 API

export default function GiscusComponent() {
	const { colorMode } = useColorMode();
	const light = 'noborder_light';
	const dark = 'noborder_gray';
	const theme_st = colorMode == 'dark' ? dark : light;
  return (
    <div style={{marginTop: "30px"}}>
      <Giscus
        repo="whk-wiki/whk-wiki"
        repoId="R_kgDOKX1sag"
		category="Announcements"
		categoryId="DIC_kwDOKX1sas4Cas_Z"
		mapping="pathname"
		strict="1"
		reactionsEnabled="1"
		emitMetadata="0"
		inputPosition="top"
		theme={theme_st}
		lang="zh-CN"
		loading="lazy"
		crossorigin="anonymous"
		async
      />
    </div>
  );
}