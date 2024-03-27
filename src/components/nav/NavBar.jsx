import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentUserDetails } from '../../redux/slices'
import { useGetCartProducts } from '../../hooks/useGetCartProducts'
import { SvgCart } from '@components/icons/SvgCart'
import { SvgUser } from '@components/icons/SvgUser'

export function NavBar() {
	const { username } = useSelector(getCurrentUserDetails)
	const { quantityProducts } = useGetCartProducts()
	const activeClass = 'bg-gray-1 rounded-md p-1 px-2'
	const classDefault = 'rounded-md p-1 px-2 duration-150 hover:bg-gray-1'
	return (
		<div className="nav-bar flex h-14 w-full items-center justify-between lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:grid-cols-[15%_1fr_1fr] xl:grid-cols-[10%_1fr_1fr] ">
			<div className="flex">
				<NavLink
					to="/"
					className=" px-5 text-2xl  font-bold text-red-6 lg:ml-0 lg:grid lg:place-content-center"
				>
					JosttStore
				</NavLink>
				<div className="hidden  gap-2  lg:flex">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						All
					</NavLink>
					<NavLink
						to="/category/t-shirt-2"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						T-Shirts
					</NavLink>
					<NavLink
						to="/category/shoes-1"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						Shoes
					</NavLink>
					<NavLink
						to="/category/electronic-3"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						Electronic
					</NavLink>
					<NavLink
						to="/category/bottles-4"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						Bottles
					</NavLink>
					<NavLink
						to="/category/others-5"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
					>
						Others
					</NavLink>
				</div>
			</div>

			<div className=" hidden   items-center gap-3  pr-6 lg:flex">
				<span className="hidden  opacity-60 xl:inline">
					josttme@josttstore.com
				</span>
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
								'rounded-md bg-black  from-red-4 to-red-6 p-1  px-2 text-white duration-150 hover:bg-gradient-to-r  '
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
								: 'group grid  place-content-center rounded-md bg-gray-1 p-1   px-2 duration-150 hover:bg-gray-300'
						}
					>
						<SvgUser className="h-6 w-6 stroke-current " />
					</NavLink>
				)}
				<Link
					to="/cart"
					className="group rounded-md  bg-red-1 p-1 px-2 outline-8 outline-red-6 duration-200 hover:bg-red-5"
				>
					<div className="relative flex  ">
						<SvgCart
							className="h-6 w-6 fill-none stroke-red-5  group-hover:stroke-red-1"
							strokeWidth="1.5"
						/>
						<span className="absolute bottom-3 left-4 grid h-5 w-5  place-content-center rounded-full   bg-red-5 text-xs font-bold text-white">
							{quantityProducts}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
