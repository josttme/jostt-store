import { Link, NavLink } from 'react-router-dom'

export function NavBar() {
	const currentUser = false
	const activeClass = 'bg-gray-300 rounded-md p-1 px-2'
	const classDefault = 'rounded-md p-1 px-2 duration-150 hover:bg-gray-300'
	return (
		<div className="flex h-16 w-full justify-between">
			<div className="flex items-center gap-2 pl-6">
				<NavLink to="/" className="text-lg font-bold">
					Platzi Store
				</NavLink>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					All
				</NavLink>
				<NavLink
					to="/category/electronics-2"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Electronics
				</NavLink>
				<NavLink
					to="/category/clothes-4"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Clothes
				</NavLink>
				<NavLink
					to="/category/furnitures-3"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Furnitures
				</NavLink>
				<NavLink
					to="/category/toys-1"
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
				<span className="opacity-70">store@platzistore.com</span>
				<NavLink
					to="/favorites"
					className={({ isActive }) => (isActive ? activeClass : classDefault)}
				>
					Favorites
				</NavLink>
				{!currentUser ? (
					<>
						<NavLink to="/login" className={classDefault}>
							Log In
						</NavLink>
						<NavLink
							to="/signup"
							className={
								'rounded-md bg-gray-900 p-1  px-2 text-slate-200 duration-150  hover:bg-gray-300 hover:text-slate-900 '
							}
						>
							Sign Up
						</NavLink>
					</>
				) : (
					<NavLink
						to="/user"
						className={({ isActive }) =>
							isActive
								? `${activeClass} flex gap-1`
								: 'flex gap-1 rounded-md p-1 px-2 duration-150  hover:bg-gray-300 '
						}
					>
						<span>{currentUser}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.9}
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</NavLink>
				)}
				<Link
					to="/cart"
					className="rounded-md p-1 px-2 duration-200 hover:bg-gray-300 "
				>
					<div className="relative flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.7}
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
							/>
						</svg>
						<span className="absolute bottom-3 left-4 grid h-5 w-5 place-content-center rounded-full bg-gray-900  text-center text-xs text-white">
							6
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
