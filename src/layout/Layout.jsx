import { Outlet } from 'react-router-dom'
import { NavBarLeft } from '../components/nav/NavBarLeft'
import { Footer } from '../components/Footer'
import { NavBarBottom } from '../components/nav/NavBarBottom'
import { NavBar } from '../components/nav/NavBar'

export function Layout() {
	return (
		<div className="flex min-h-screen flex-col overflow-hidden bg-[#f5f5f5] lg:mt-14 ">
			<NavBar />
			<NavBarLeft />
			<Outlet />
			<NavBarBottom />
			<Footer />
		</div>
	)
}
