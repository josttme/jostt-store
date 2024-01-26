/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				card: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
				cardSkeleton: 'rgba(0,0,0,0.05) 0 0 10px',
				cardHover:
					'rgba(14, 30, 37, 0.22) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
			},
			animation: {
				'pulse-fast': 'pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: []
}
