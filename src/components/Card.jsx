import { useState } from 'react'
import PropTypes from 'prop-types'
import { SvgCartPlus } from './icons/SvgCartPlus'
import { SvgHeart } from './icons/SvgHeart'
import Image from './Image'
import { CategoryButton } from './CategoryButton'

function Card({
	name,
	price,
	mainImage,
	categoryName,
	categoryId,
	navigateToProduct,
	toggledFavorites,
	isFavorite,
	addToCart
}) {
	// Estado para controlar la carga de la imagen
	const [isLoading, setIsLoading] = useState(false)

	const favorite = isFavorite ? 'fill-[#ff234e] stroke-[#ff234e]' : 'fill-none'

	return (
		<div
			onClick={navigateToProduct}
			className="max-w-sm cursor-pointer overflow-hidden rounded-lg bg-white shadow-xl transition duration-300 hover:shadow-4xl"
		>
			<figure className="relative w-full">
				<div
					onClick={(e) => e.stopPropagation()}
					className="absolute right-2  top-2 z-20"
				>
					<button
						type="button"
						onClick={toggledFavorites}
						className="grid h-8 w-8 place-content-center rounded-full bg-slate-100/80 stroke-black p-2 transition duration-300 hover:bg-white/90 hover:stroke-[#ff234e]"
					>
						<SvgHeart className={`${favorite} h-5 w-5`} />
					</button>
				</div>
				<div className="relative ">
					{!isLoading && (
						<div className=" absolute left-0 top-0 h-full w-full animate-pulse-fast bg-gray-300" />
					)}
					<Image
						src={mainImage}
						title={name}
						isLoading={isLoading}
						setIsLoading={setIsLoading}
					/>
				</div>
				<CategoryButton category={categoryName} categoryId={categoryId} />
			</figure>
			<h1 className="p-5 pb-1 text-xl">{name}</h1>
			<div className="mb-3 flex w-full items-center justify-between  px-5">
				<p className="text-3xl font-bold text-[#ff234e]">{`$${price}`}</p>
				<div
					onClick={addToCart}
					className="relative flex  items-center rounded-md  bg-gradient-to-r from-[#fcdde3] via-[#ff6174] via-30%  to-[#ff234e]  before:absolute  before:h-full before:w-full before:rounded-md   hover:before:bg-black/10"
				>
					<div className="w-10 rounded-l-md bg-[#fcdde3] p-1  ">
						<SvgCartPlus className="fill-[#ff4359] stroke-[#ff4359]" />
					</div>
					<span className="px-2 text-center text-white">Add to cart</span>
				</div>
			</div>
		</div>
	)
}
function NoProductsResults() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<p className="text-xl">No products found</p>
		</div>
	)
}
export function CardProduct({
	products,
	addToCart,
	navigateToProduct,
	toggledFavorites,
	isFavorite
}) {
	const hasProducts = products?.length > 0
	return hasProducts ? (
		<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 pt-5 md:grid-cols-3">
			{products?.map((product) => (
				<Card
					key={product.id}
					{...product}
					navigateToProduct={() => navigateToProduct(product.id)}
					toggledFavorites={(e) => toggledFavorites(e, product)}
					isFavorite={isFavorite(product)}
					addToCart={(e) => addToCart(e, product)}
				/>
			))}
		</section>
	) : (
		<NoProductsResults />
	)
}
CardProduct.propTypes = {
	products: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
	navigateToProduct: PropTypes.func.isRequired,
	toggledFavorites: PropTypes.func.isRequired,
	isFavorite: PropTypes.func.isRequired
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	mainImage: PropTypes.string.isRequired,
	categoryName: PropTypes.string.isRequired,
	categoryId: PropTypes.string.isRequired,
	navigateToProduct: PropTypes.func,
	toggledFavorites: PropTypes.func,
	isFavorite: PropTypes.bool,
	addToCart: PropTypes.func
}
