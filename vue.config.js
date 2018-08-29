const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.module
			.rule('ts')
			.use('ts-loader')
			.tap((args) => {
				args.getCustomTransformers = () => ({
					before: [tsImportPluginFactory([{
						libraryName: 'vant',
						libraryDirectory: 'es',
						style: true
					}])]
				});
				return args;
			})
	}
};
