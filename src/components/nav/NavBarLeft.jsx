import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '@context'

export function NavBarLeft() {
	const { username, openNavBar, setOpenNavBar } = useContext(ProductContext)
	const activeClass = 'border border-black iphone678:py-1 px-5 rounded-md   '
	const classDefault =
		'rounded-md  px-5 border  iphone678:py-1 border-transparent  '
	return (
		<>
			<div
				className={`${
					openNavBar ? '-translate-x-0' : '-translate-x-full'
				} nav-bar fixed	top-0 z-40 flex h-screen  w-4/5 flex-col transition-all  duration-300 lg:hidden`}
			>
				<div className="mt-5 flex flex-col gap-1 px-7 text-xl iphone678:gap-4  ">
					<NavLink
						to="/"
						className=" pl-5 text-3xl font-bold text-red-6"
						onClick={() => setOpenNavBar(false)}
					>
						JosttStore
					</NavLink>

					<hr className="w-11/12  border-black opacity-20" />
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						All
					</NavLink>
					<NavLink
						to="/category/t-shirt-2"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						T-Shirts
					</NavLink>
					<NavLink
						to="/category/shoes-1"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						Shoes
					</NavLink>
					<NavLink
						to="/category/electronic-3"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						Electronic
					</NavLink>
					<NavLink
						to="/category/bottles-4"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						Bottles
					</NavLink>
					<NavLink
						to="/category/others-5"
						className={({ isActive }) =>
							isActive ? activeClass : classDefault
						}
						onClick={() => setOpenNavBar(false)}
					>
						Others
					</NavLink>
					<hr className="w-11/12  border-black opacity-20" />
				</div>
				<div className="mt-3 flex flex-col gap-3 px-7 text-xl  ">
					{!username && (
						<>
							<NavLink
								to="/register"
								className={
									'grid h-10 place-content-center rounded-md   bg-gradient-to-r from-red-4 to-red-6  p-1 px-2 text-white duration-150  '
								}
								onClick={() => setOpenNavBar(false)}
							>
								Sign Up
							</NavLink>
							<NavLink
								to="/login"
								className="  grid h-10 place-content-center rounded-md border border-black  "
								onClick={() => setOpenNavBar(false)}
							>
								Log In
							</NavLink>
						</>
					)}

					<span className="text-center text-lg opacity-50">
						josttme@josttstore.com
					</span>
				</div>
			</div>
			<div
				onClick={() => setOpenNavBar(false)}
				className={`${
					openNavBar ? 'block' : 'hidden'
				} fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-screen bg-transparent`}
			></div>
		</>
	)
}
