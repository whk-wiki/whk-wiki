import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
export default function EditThisPage({ editUrl }) {
	return (
		<Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
			<IconEdit />
			在 GitHub 中定位此文件
		</Link>
	);
}
