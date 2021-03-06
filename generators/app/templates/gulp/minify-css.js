'use strict';

const utils = require('./utils');

module.exports = (gulp, plugins) => {
	return () => {
		const assets = utils.getSourcePatterns('css');

		assets.forEach((asset) => {
			gulp
				.src(`public/assets/css/${asset.name}`)
				.pipe(plugins.cssnano({
					mergeRules: false,
					safe: true
				}))
				.pipe(plugins.rename(asset.name.replace('.css', '.min.css')))
				.pipe(plugins.size({showFiles: true, gzip: false, title: 'CSS minified'}))
				.pipe(plugins.size({showFiles: true, gzip: true, title: 'CSS minified'}))
				.pipe(gulp.dest('public/assets/css/'));
		});

		return gulp;
	};
};
