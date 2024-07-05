/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '700px'
			},
			colors: {
				/* 'neutral-450': '#2f2f2f', */
				'neutral-350': '#c1c1c1'
			}
		},
	},
	plugins: [],
}
