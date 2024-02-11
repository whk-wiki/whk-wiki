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
			position: 'left',
			label: '开始',
		},
		{
			type: 'doc',
			docId: 'home/algebra',
			position: 'left',
			label: '数学（代数）',
		},
		{
			type: 'doc',
			docId: 'home/geometry',
			position: 'left',
			label: '数学（几何）',
		},
		{
			type: 'doc',
			docId: 'home/physics',
			position: 'left',
			label: '物理',
		},
		{
			type: 'doc',
			docId: 'home/chemistry',
			position: 'left',
			label: '化学',
		},
		{
			type: 'doc',
			docId: 'home/biology',
			position: 'left',
			label: '生物',
		},
		{
			href: 'https://github.com/whk-wiki/whk-wiki',
			className: 'header-github-link',
			position: 'right',
			'aria-label': 'GitHub repository',
		},
	],
};
