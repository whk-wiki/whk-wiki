export default () => ({
	configureWebpack() {
		return {
			// name: 'ggb-loader',
			module: {
				rules: [{
					test: /\.ggb$/,
					use: [
						{
							loader: 'file-loader',
							options: {name: 'assets/ggb/[name]-[hash].[ext]'}
						}
					]
				}]
			}
		}
	}
});
