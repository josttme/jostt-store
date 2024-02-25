import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true
	},
	resolve: {
		alias: {
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@context': '/src/context',
			'@pages': '/src/pages',
			'@layout': '/src/layout',
			'@utils': '/src/utils',
			'@services': '/src/services'
		}
	}
})
