import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../context'
import { SvgCart } from '../components/icons/SvgCart'
import { SvgUser } from '../components/icons/SvgUser'

export function NavBar() {
	const { username, quantityProducts } = useContext(ProductContext)
	const activeClass = 'bg-gray-1 rounded-md p-1 px-2'
	const classDefault = 'rounded-md p-1 px-2 duration-150 hover:bg-gray-1'
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
								'from-red-4 to-red-6  rounded-md bg-black p-1  px-2 text-white duration-150 hover:bg-gradient-to-r  '
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
								: 'bg-gray-1 group  grid place-content-center rounded-md p-1   px-2 duration-150 hover:bg-gray-300'
						}
					>
						<SvgUser className="h-6 w-6 stroke-current " />
					</NavLink>
				)}
				<Link
					to="/cart"
					className="bg-red-1 hover:bg-red-5  outline-red-6 group rounded-md p-1 px-2 outline-8 duration-200"
				>
					<div className="relative flex  ">
						<SvgCart className="group-hover:stroke-red-1 fill-red-5 stroke-red-5 h-6  w-6" />
						<span className="bg-red-5 absolute bottom-3 left-4 grid h-5  w-5 place-content-center   rounded-full text-xs font-bold text-white">
							{quantityProducts}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
