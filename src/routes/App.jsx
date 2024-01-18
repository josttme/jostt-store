import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../layout/Layout'
import { Product } from '../pages/Product'
import { Category } from '../pages/Category'
import { ProductProvider } from '../context'
import { Favorites } from '../pages/Favorites'
import { Cart } from '../pages/Cart'

function App() {
	return (
		<ProductProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="page/:page" element={<Home />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/category/:id" element={<Category />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/cart" element={<Cart />} />
					</Route>
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</BrowserRouter>
		</ProductProvider>
	)
}

export default App
