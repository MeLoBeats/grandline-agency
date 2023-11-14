/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kanit', 'sans-serif', ...defaultTheme.fontFamily.sans],
				"AlmendraSC": ["Almendra SC", "serif"],
			},
			colors: {
				primary: {
					DEFAULT: '#F9F871',
					dark: '#F9F871',
					light: '#F9F871',
				},
				secondary: {
					DEFAULT: '#F9F871',
					dark: '#F9F871',
					light: '#F9F871',
				},
				accent: {
					DEFAULT: '#0E4C62',
					dark: '#F9F871',
					light: '#F9F871',
				},
				neutral: {
					DEFAULT: '#F9F871',
					dark: '#F9F871',
					light: '#F9F871',
				},
				black: {
					DEFAULT: '#03243B',
					dark: '#F9F871',
					light: '#F9F871',
				},
				white: {
					DEFAULT: '#FFFFFF',
					dark: '#F9F871',
					light: '#F9F871',
				},
			}
		}
	},
	plugins: [],
}
