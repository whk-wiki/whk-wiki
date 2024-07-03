// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
// import rehypeKatex from './src/katex/rehype-katex';
// import test from './src/test'
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'whk wiki',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/logo.svg',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/whk-wiki/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'whk-wiki', // Usually your GitHub org/user name.
	projectName: 'whk-wiki', // Usually your repo name.
	deploymentBranch: 'gh-pages',
	trailingSlash: false,

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans'],
	},

	presets: [[
		'classic',
		/** @type {import('@docusaurus/preset-classic').Options} */
		({
			docs: {
				routeBasePath: '/',
				sidebarPath: './sidebars.js',
				// Please change this to your repo.
				// Remove this to remove the "edit this page" links.
				editUrl: 'https://github.com/whk-wiki/whk-wiki/tree/main/',
				beforeDefaultRemarkPlugins: [remarkMath],
				beforeDefaultRehypePlugins: [[rehypeKatex, {
												strict: true,
												macros: require('./config/macros.config').default
											}]],
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			},
			blog: false,
			theme: {
				customCss: './src/css/custom.css',
			},
		}),
	],],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig & import('@docusaurus/theme-mermaid').ThemeConfig} */
		({
			// Replace with your project's social card
			colorMode: {
				defaultMode: 'light',
				respectPrefersColorScheme: false
			},
			// image: 'img/docusaurus-social-card.jpg',
			navbar: require('./config/navbar.config').default,
			docs: {
				sidebar: {
					autoCollapseCategories: true,
					hideable: true
				},
			},
			footer: {
				copyright: `<strong>whk wiki</strong> 是送给所有文化课自学者的一份礼物．<br/>Copyright © ${new Date().getFullYear()} <strong>whk wiki</strong> Team`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				additionalLanguages: ['python']
			},
			// mermaid: {
			// 	theme: {light: 'neutral'}
			// }
		}),

	plugins: [
		// @ts-ignore
		'./src/assets-loader/ggb',
		'./src/assets-loader/mjs'
	],

	themes: ['@docusaurus/theme-mermaid'],

	markdown: {
		mermaid: true
	},

	clientModules: ['./src/katex/copy-tex.mjs'],

	stylesheets: [
		{
			href: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.8/katex.min.css',
			type: 'text/css',
			crossorigin: 'anonymous',
		},
	],
};

export default config;
