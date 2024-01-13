import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Home />
		</BrowserRouter>
	)
}

export default App
