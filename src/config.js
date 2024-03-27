const isDevelopment = process.env.NODE_ENV === 'development'

const config = {
	apiUrl: isDevelopment
		? 'http://localhost:3000/'
		: 'https://josttme-fake-store-api.vercel.app/'
}

export default config
