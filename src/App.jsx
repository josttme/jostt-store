import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<h1 className="text-2xl font-bold">Hola Mundo!</h1>
		</BrowserRouter>
	)
}

export default App
