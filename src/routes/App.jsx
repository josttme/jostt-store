import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
