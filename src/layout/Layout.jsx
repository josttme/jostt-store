import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Layout() {
	return (
		<div className="flex min-h-[101vh] flex-col bg-gray-100 pt-10">
			<NavBar />
			<Outlet />
		</div>
	)
}
