import { Route, Routes } from 'react-router-dom'
import { Layout } from '@layout/Layout'
import { Home } from '@pages/Home'
import { Product } from '@pages/Product'
import { Category } from '@pages/Category'
import { Favorites } from '@pages/Favorites'
import { Cart } from '@pages/Cart'
import { Login } from '@pages/Login'
import { Register } from '@pages/Register'
import { Account } from '@pages/Account'
import { PrivateRoutes, PublicOnlyRoute } from './PrivateRoutes'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="page/:page" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/category/:id" element={<Category />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/account" element={<Account />} />
				</Route>
				<Route element={<PublicOnlyRoute />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Route>
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	)
}

export default App
