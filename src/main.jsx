import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ProductProvider } from './context/index.jsx'
import App from './routes/App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ProductProvider>
					<App />
				</ProductProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
