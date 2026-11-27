// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig(
	isGitHubPages
		? {
				site: 'https://c20245367deleon-glitch.github.io',
				base: '/nicole-astro-portfolio',
			}
		: {},
);
