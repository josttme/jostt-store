import { useContext } from 'react'
import { useGetCartProducts } from '../../hooks/useGetCartProducts'
import { ProductContext } from '@context'
import { NavLinkActivated } from './NavLinkActivated'
import { SvgHome } from '../icons/SvgHome'
import { SvgUser } from '../icons/SvgUser'
import { SvgHeart } from '../icons/SvgHeart'
import { SvgBurger } from '../icons/SvgBurger'
import { SvgCart } from '../icons/SvgCart'
import { SvgClosed } from '../icons/SvgClosed'

export function NavBarBottom() {
	const { openNavBar, setOpenNavBar } = useContext(ProductContext)
	const { quantityProducts } = useGetCartProducts()
	return (
		<nav className="nav-bar fixed bottom-0 left-0 z-40 flex h-14 w-screen justify-between  justify-items-center bg-slate-500 text-sm lg:hidden ">
			<div
				className="grid w-full grid-cols-4 iphone678:gap-4"
				onClick={() => setOpenNavBar(false)}
			>
				<NavLinkActivated to="/">
					<SvgHome className="h-6 w-6 justify-self-center" strokeWidth="1" />
					Home
				</NavLinkActivated>

				<NavLinkActivated to="/favorites">
					<SvgHeart className="h-6 w-6 justify-self-center" strokeWidth="1.2" />
					Favorites
				</NavLinkActivated>

				<NavLinkActivated to="/account">
					<SvgUser className="h-6 w-6 justify-self-center " strokeWidth="1" />
					Profile
				</NavLinkActivated>

				<NavLinkActivated to="/cart">
					<div className="relative">
						<SvgCart className=" h-6 w-6" />
						<span className="absolute bottom-3 left-4 grid h-5 w-5  place-content-center rounded-full   bg-red-5 text-xs font-bold text-white">
							{quantityProducts}
						</span>
					</div>
					Cart
				</NavLinkActivated>
			</div>

			<button
				className="placew-12 relative mr-2 grid  h-12 place-content-center self-center iphone678:ml-2  "
				type="button"
				onClick={() => setOpenNavBar(!openNavBar)}
				style={{
					transition: 'transform 0.3s ease',
					transform: openNavBar ? 'rotate(90deg)' : 'rotate(-180deg)'
				}}
			>
				{openNavBar ? (
					<SvgClosed className="h-12 w-12" />
				) : (
					<SvgBurger className="h-12 w-12" />
				)}
			</button>
		</nav>
	)
}
