/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary: {
				100: '#1D2123',
				200: '#33373B5E',
				300: '#1A1E1F',
			},
			secondary: '#FACD66',

			light: { 100: '#EFEEE0', 200: '#A4C7C6', 300: '#FFFFFF12' },
		},
	},
	plugins: [],
}
