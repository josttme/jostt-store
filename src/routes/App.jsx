import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../layout/Layout'
import { Product } from '../pages/Product'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
