module.exports = {
	devServer: function (devServerConfig, { env, paths, proxy, allowedHost }) {
		delete devServerConfig.onBeforeSetupMiddleware;
		delete devServerConfig.onAfterSetupMiddleware;

		if (devServerConfig.https !== undefined) {
			if (!devServerConfig.server) {
				if (devServerConfig.https === true) {
					devServerConfig.server = "https";
				} else if (typeof devServerConfig.https === "object") {
					devServerConfig.server = {
						type: "https",
						options: devServerConfig.https
					};
				}
			}
			delete devServerConfig.https;
		}

		if (devServerConfig.http !== undefined) {
			delete devServerConfig.http;
		}

		if (!devServerConfig.setupMiddlewares) {
			devServerConfig.setupMiddlewares = (middlewares) => {
				return middlewares;
			};
		}

		return devServerConfig;
	},
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.resolve.fallback = {
				...webpackConfig.resolve.fallback,
				buffer: require.resolve("buffer/"),
				events: require.resolve("events/"),
				process: require.resolve("process/browser"),
				stream: require.resolve("stream-browserify"),
				string_decoder: require.resolve("string_decoder/")
			};

			return webpackConfig;
		}
	}
};
