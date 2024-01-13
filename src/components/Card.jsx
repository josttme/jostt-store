import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export function Card({
	title,
	price,
	image,
	category,
	categoryId,
	handleProduct,
	toggledFavorites,
	isFavorite
}) {
	// Estado para controlar la carga de la imagen
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const handleCategoryRoute = (e, category, categoryId) => {
		e.stopPropagation()

		const categoryFormated = category.toLowerCase()
		const categoryRoute = `/category/${categoryFormated}-${categoryId}`

		if (location.pathname !== categoryRoute) navigate(categoryRoute)
	}

	const favorite = isFavorite ? 'fill-red-600 stroke-red-600' : 'fill-none'

	return (
		<div
			onClick={handleProduct}
			className="max-w-sm cursor-pointer overflow-hidden rounded-lg bg-white shadow-xl transition duration-300 hover:shadow-4xl"
		>
			<figure className="relative w-full">
				<div
					onClick={(e) => e.stopPropagation()}
					className="absolute right-2  top-2 z-50"
				>
					<button
						type="button"
						className="grid h-8 w-8 place-content-center rounded-full bg-slate-100/80 stroke-black p-2 transition duration-300 hover:bg-white/90 hover:stroke-[#ff234e]"
					>
						<svg
							className={`${favorite} h-5 w-5`}
							strokeWidth="2.1"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
								strokeWidth="2.1"
								strokeLinejoin="round"
							></path>
						</svg>
					</button>
				</div>
				<div className="relative ">
					{!isLoading && (
						<div className=" absolute left-0 top-0 h-full w-full animate-pulse-fast bg-gray-300" />
					)}

					<img
						className={`${!isLoading && 'opacity-0'} h-full w-full`}
						src={image}
						alt={title}
						width="200"
						height="200"
						onLoad={() => setIsLoading(true)} // Manejador de evento para indicar que la imagen se ha cargado
					/>
				</div>
				<button
					onClick={(e) => {
						handleCategoryRoute(e, category, categoryId)
					}}
					className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/80 px-3 py-0.5 text-sm text-black transition-all duration-200 hover:bg-black/60 hover:text-white"
				>
					{category}
				</button>
			</figure>
			<h1 className="p-5 pb-1 text-xl">{title}</h1>
			<div className="mb-3 flex w-full items-center justify-between  px-5">
				<p className="text-3xl font-bold text-[#ff234e]">{`$${price}`}</p>
				<div
					onClick={(e) => e.stopPropagation()}
					className="relative flex  items-center rounded-md  bg-gradient-to-r from-[#fcdde3] via-[#ff6174] via-30%  to-[#ff234e]  before:absolute  before:h-full before:w-full before:rounded-md   hover:before:bg-black/10"
				>
					<div className="w-10 rounded-l-md bg-[#fcdde3] p-1  ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 660 500"
						>
							<path
								fill="none"
								stroke="#ff4359"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="34.2"
								d="M146.7 102.6h428l-54.8 188.3a68.5 68.5 0 0 1-68.5 51.3H229a68.5 68.5 0 0 1-68.5-61.6L133 34.1H64.5"
							/>
							<circle
								r="1"
								fillRule="evenodd"
								transform="translate(215.2 427.8) scale(34.24)"
								fill="#ff4359"
							/>
							<circle
								r="1"
								fillRule="evenodd"
								transform="translate(489.1 427.8) scale(34.24)"
								fill="#ff4359"
							/>
							<path
								fill="#ff4359"
								d="M333.2 293a11.6 11.6 0 0 0 23.3 0v-60.4h60.4a11.6 11.6 0 0 0 0-23.2h-60.4v-60.5a11.6 11.6 0 1 0-23.3 0v60.5h-60.4a11.6 11.6 0 1 0 0 23.2h60.4v60.5Z"
							/>
						</svg>
					</div>
					<span className="px-2 text-center text-white">Add to cart</span>
				</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	categoryId: PropTypes.number.isRequired,
	handleProduct: PropTypes.func,
	toggledFavorites: PropTypes.func,
	isFavorite: PropTypes.bool
}
