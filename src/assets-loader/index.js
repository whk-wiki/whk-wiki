module.exports = () => ({
	name: 'assets-loader',
	configureWebpack() {
		return {
			module: {
				rules: [{
						test: /\.ggb$/,
						use: [
							{
								loader: 'file-loader',
								options: {name: 'assets/ggb/[name]-[hash].[ext]'}
							}
						],
						type: 'javascript/auto'
					},
					{
						test: /\.m?js/,
						resolve: {
							fullySpecified: false,
						},
					}
				]
			}
		}
	}
});
