import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export function Layout() {
	return (
		<div className="flex min-h-screen flex-col  bg-[#f5f5f5] ">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	)
}
