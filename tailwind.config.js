/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				'gray-1': '#dee2e7',
				'gray-7': '#bfc8d1',
				'red-1': '#fcdde3',
				'red-4': '#ff6983',
				'red-5': '#ff4359',
				'red-6': '#ff234e',
				'red-7': '#ed1135',
				'red-8': '#c8082d',
				'red-9': '#c8083c'
			},
			boxShadow: {
				card: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
				cardSkeleton: 'rgba(0,0,0,0.05) 0 0 10px',
				cardHover:
					'rgba(14, 30, 37, 0.22) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
			},
			animation: {
				'pulse-fast': 'pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			screens: {
				// iPhone 5/SE
				iphone5: { raw: '(min-height: 480px)' },
				// iPhone 6/7/8
				iphone678: { raw: '(min-height: 570px)' }
			}
		}
	},
	plugins: []
}
