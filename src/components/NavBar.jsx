import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../context'
import { SvgCart } from '../components/icons/SvgCart'
import { SvgUser } from '../components/icons/SvgUser'

export function NavBar() {
	const { username, quantityProducts } = useContext(ProductContext)
	const activeClass = 'bg-gray-300 rounded-md p-1 px-2'
	const classDefault = 'rounded-md p-1 px-2 duration-150 hover:bg-gray-300'
	return (
		<div className="nav-bar sticky top-0 z-50 flex h-14 w-full justify-between bg-gray-100 ">
			<div className="flex items-center gap-2 pl-6">
				<NavLink to="/" className="text-lg font-bold">
					JosttStore
				</NavLink>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					All
				</NavLink>
				<NavLink
					to="/category/t-shirt-2"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					T-Shirts
				</NavLink>
				<NavLink
					to="/category/shoes-1"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Shoes
				</NavLink>
				<NavLink
					to="/category/electronic-3"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Electronic
				</NavLink>
				<NavLink
					to="/category/toys-3"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Toys
				</NavLink>
				<NavLink
					to="/category/others-5"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Others
				</NavLink>
			</div>
			<div className="flex items-center gap-3 pr-6">
				<span className="opacity-70">josttme@josttstore.com</span>
				<NavLink
					to="/favorites"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Favorites
				</NavLink>
				{!username ? (
					<>
						<NavLink to="/login" className={classDefault}>
							Log In
						</NavLink>
						<NavLink
							to="/register"
							className={
								'rounded-md bg-gray-900 p-1  px-2 text-slate-200 duration-150  hover:bg-gray-300 hover:text-slate-900 '
							}
						>
							Sign Up
						</NavLink>
					</>
				) : (
					<NavLink
						to="/account"
						className={({ isActive }) =>
							isActive
								? `${activeClass}`
								: 'grid place-content-center  rounded-md bg-gray-200 p-1 px-2   duration-150 hover:bg-gray-300  '
						}
					>
						<SvgUser className="h-6 w-6 stroke-current" />
					</NavLink>
				)}
				<Link
					to="/cart"
					className="rounded-md  bg-[#fcdde3] p-1 px-2 outline-8 outline-red-600 duration-200 hover:bg-gray-300"
				>
					<div className="relative flex  ">
						<SvgCart className="h-6 w-6 fill-[#ff4359] stroke-[#ff4359]" />
						<span className="absolute bottom-3 left-4 grid h-5 w-5  place-content-center rounded-full  bg-[#ff4359] text-xs font-bold text-white">
							{quantityProducts}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
