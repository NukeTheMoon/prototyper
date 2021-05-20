/* eslint-disable @typescript-eslint/no-var-requires */
const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');

module.exports = {
	css: {
		sourceMap: true,
		loaderOptions: {
			scss: {
				prependData: `@import "@/styles/global.scss";`
			}
		}
	},

	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-svg-inline-loader')
			.loader('vue-svg-inline-loader')
			.options({});

		config.module
			.rule('csv')
			.test(/\.csv$/)
			.use('csv-loader')
			.loader('csv-loader')
			.options({
				dynamicTyping: true,
				header: true,
				skipEmptyLines: true
			});

		config.resolve.alias.set('@static', path.resolve(__dirname, 'static'));

		config.plugin('circular-dependency').use(CircularDependencyPlugin, [
			{
				exclude: /a\.js|node_modules/,
				include: /src/,
				cwd: process.cwd(),
				failOnError: true,
				allowAsyncCycles: true
			}
		]);
	}
};
