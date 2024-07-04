/** @type {import('@docusaurus/theme-common').Navbar} */
export default {
	hideOnScroll: true,
	title: 'whk wiki',
	logo: {
		alt: 'whk wiki logo',
		src: 'img/logo.svg',
		srcDark: 'img/logo-dark.svg',
	},
	items: [
		{
			type: 'docSidebar',
			sidebarId: 'introSidebar',
			label: '开始',
		},
		{
			type: 'dropdown',
			label: '数学',
			items: [
				{
					type: 'doc',
					docId: 'home/algebra',
					label: '代数',
				},
				{
					type: 'doc',
					docId: 'home/geometry',
					label: '几何',
				},
				{
					type: 'doc',
					docId: 'home/math-misc',
					label: '杂项'
				}
			]
		},
		{
			type: 'dropdown',
			label: '物理',
			items: [
				{
					type: 'doc',
					docId: 'home/mechanics',
					label: '力学',
				},
				{
					type: 'doc',
					docId: 'home/electromagnetism',
					label: '电磁学',
				},
				{
					type: 'doc',
					docId: 'home/physics-misc',
					label: '杂项'
				},
				{
					type: 'doc',
					docId: 'home/topic',
					label: '专题'
				},
			]
		},
		{
			type: 'dropdown',
			label: '化学',
			items: [
				{
					type: 'doc',
					docId: 'home/element',
					label: '元素化学',
				},
				{
					type: 'doc',
					docId: 'home/kinetics',
					label: '化学动力学',
				},
				{
					type: 'doc',
					docId: 'home/structure',
					label: '结构化学',
				},
				{
					type: 'doc',
					docId: 'home/organic',
					label: '有机化学',
				}
			]
		},
		{
			href: 'https://github.com/whk-wiki/whk-wiki',
			className: 'header-github-link',
			position: 'right',
			'aria-label': 'GitHub repository',
		},
	],
};
