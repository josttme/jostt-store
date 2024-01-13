/* import { useContext } from 'react' */
/* import { ProductContext } from '../context' */
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../api'
import { useContext } from 'react'
import { ProductContext } from '../context'
/* import { useProductById } from '../hooks/useProductId'
import { SkeletonProduct } from '../components/SkeletonProduct' */

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
	const { isFavorite, toggleFavorites } = useContext(ProductContext)
	/*
	if (loading) return <SkeletonProduct />
*/

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
				</div>
				<Link
					to={`/category/${category}-${categoryId}`}
					className=" text-md w-20 rounded-lg bg-black/15  px-3 py-0.5 text-center text-black transition-all duration-200 hover:bg-black/60 hover:text-white"
				>
					{category}
				</Link>
				<p className="text-4xl font-bold text-[#ff234e]">{`$${price}`}</p>
				<div className="flex gap-4">
					<Link
						to="/cart"
						className="relative grid w-60 items-center rounded-lg bg-gradient-to-r from-[#ff6174]  via-[#ff6174] via-30% to-[#ff234e] p-3 text-center    text-lg  text-white before:absolute before:h-full before:w-full before:rounded-lg hover:before:bg-black/10"
					>
						Add to cart
					</Link>

					<button
						type="button"
						onClick={() => toggledFavorites(product)}
						className="grid h-12 w-12 place-content-center rounded-full bg-slate-200 stroke-black p-2 shadow-sm transition duration-300 hover:stroke-[red]"
					>
						<svg
							className={`${favorite} h-6 w-6`}
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
			</div>
		</section>
	)
}
