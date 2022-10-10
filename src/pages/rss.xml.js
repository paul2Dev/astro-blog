import rss from '@astrojs/rss';
import config from '../config';
import Config from '../config';

export const get = () =>
	rss({
		title: Config.siteTitle,
		description: config.siteDescription,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
