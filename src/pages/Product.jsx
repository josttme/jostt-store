import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../api'
import { useContext } from 'react'
import { ProductContext } from '../context'
import { SvgHeart } from '../components/icons/SvgHeart'

export function Product() {
	const { id } = useParams()
	const productId = parseInt(id, 10)
	const { product } = getProductById({ productId })
	const {
		image,
		price,
		title,
		description,
		category,
		categoryId,
		author,
		authorLink,
		surceLink
	} = product
	const { isFavorite, toggleFavorites, addToCart } = useContext(ProductContext)

	const isFavorited = isFavorite(product)

	const toggledFavorites = (product) => {
		toggleFavorites(product)
	}

	const favorite = isFavorited ? 'fill-red-600 stroke-red-600' : 'fill-none'
	return (
		<section className=" mx-auto my-28 grid max-w-6xl grid-cols-2 gap-4 overflow-hidden  rounded-lg  bg-white shadow-lg">
			<figure className="grid h-[570px] w-[570px] place-content-center shadow-lg">
				<img src={image} alt={title} width={1000} height={1000} />
			</figure>
			<div className="flex flex-col gap-5 py-11 pl-8 pr-16 ">
				<h1 className="text-4xl"> {title}</h1>
				<div>
					<p className="mb-2 text-lg">{description}</p>
					{!authorLink || (
						<>
							Photo by{' '}
							<a
								href={authorLink}
								target="_blank"
								className="text-black/60 underline decoration-black/60   transition-all duration-200 hover:text-black  hover:decoration-black  "
								rel="noreferrer"
							>
								{author}{' '}
							</a>
							on{' '}
							<a
								href={surceLink}
								target="_blank"
								className="text-black/60 underline decoration-black/60   transition-all duration-200 hover:text-black  hover:decoration-black  "
								rel="noreferrer"
							>
								Unsplash
							</a>
						</>
					)}
				</div>
				<Link
					to={`/category/${category}-${categoryId}`}
					className=" text-md w-20 rounded-lg bg-black/15  px-3 py-0.5 text-center text-black transition-all duration-200 hover:bg-black/60 hover:text-white"
				>
					{category}
				</Link>
				<p className="text-4xl font-bold text-[#ff234e]">{`$${price}`}</p>
				<div className="flex gap-4">
					<button
						to="/cart"
						onClick={() => addToCart(product)}
						className="relative grid w-60 items-center rounded-lg bg-gradient-to-r from-[#ff6174]  via-[#ff6174] via-30% to-[#ff234e] p-3 text-center    text-lg  text-white before:absolute before:h-full before:w-full before:rounded-lg hover:before:bg-black/10"
					>
						Add to cart
					</button>

					<button
						type="button"
						onClick={() => toggledFavorites(product)}
						className="grid h-12 w-12 place-content-center rounded-full bg-slate-200 stroke-black p-2 shadow-sm transition duration-300 hover:stroke-[red]"
					>
						<SvgHeart className={`${favorite} h-6 w-6`} />
					</button>
				</div>
			</div>
		</section>
	)
}
