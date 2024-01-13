/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				'4xl': '0px 3px 11px 1px rgba(0,0,0,0.5)'
			},
			animation: {
				'pulse-fast': 'pulse 1000ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: []
}
