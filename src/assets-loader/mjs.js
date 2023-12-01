export default function (context, options) {
	return {
		name: "mjs-loader",
		configureWebpack(config, isServer) {
			return {
				module: {
					rules: [{
						test: /\.m?js/,
						resolve: {
							fullySpecified: false,
						},
					}],
				},
			};
		},
	};
};
