module.exports = {
	configureWebpack: {
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						chunks: 'all'
					},
					vue: {
						test: /[\\/]node_modules[\\/](vue)[\\/]/,
						name: 'vue',
						priority: 10,
						chunks: 'all'
					}
				}
			}
		}
	},
	css: {
		loaderOptions: {
			// 给 sass-loader 传递选项
			sass: {
				data: `@import "@/style/variables.scss";`
			}
		}
	}
}