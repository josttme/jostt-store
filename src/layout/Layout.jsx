import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Layout() {
	return (
		<div className="min-h-screen  bg-[#efefef] ">
			<NavBar />
			<Outlet />
		</div>
	)
}
