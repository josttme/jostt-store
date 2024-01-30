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

	const favorite = isFavorite ? 'fill-red-6 stroke-red-6' : 'fill-none'

	return (
		<div
			onClick={navigateToProduct}
			className="z-10 grid aspect-[3/4] w-80 max-w-sm cursor-pointer gap-4 overflow-hidden  rounded-lg bg-white pb-4 shadow-card transition-opacity duration-200 hover:shadow-cardHover "
		>
			<figure className="relative w-full">
				<div
					onClick={(e) => e.stopPropagation()}
					className="absolute right-2  top-2 z-20"
				>
					<button
						type="button"
						onClick={toggledFavorites}
						title="Like"
						className="grid h-8 w-8 place-content-center rounded-full bg-slate-100/80 stroke-black p-2 transition duration-300 hover:bg-white/90 hover:stroke-red-6"
					>
						<SvgHeart className={`${favorite} h-5 w-5`} />
					</button>
				</div>
				<div className="relative ">
					<Image src={mainImage} title={name} />
				</div>
				<CategoryButton category={categoryName} categoryId={categoryId} />
			</figure>
			<h1 className="t  px-5 text-xl  hover:underline">{name}</h1>
			<div className="flex w-full items-center justify-between  px-5">
				<p className="text-3xl font-bold text-red-6">{`$${price}`}</p>
				<div
					onClick={addToCart}
					className="relative flex   items-center rounded-md  bg-gradient-to-r from-red-1 via-red-4 via-30%  to-red-7  before:absolute  before:h-full before:w-full before:rounded-md   hover:before:bg-black/10"
				>
					<div className="w-10 rounded-l-md bg-red-1 p-1  ">
						<SvgCartPlus className="fill-red-5 stroke-red-5" />
					</div>
					<span className=" px-2 text-center text-white">Add to cart</span>
				</div>
			</div>
		</div>
	)
}
function ProductSkeleton() {
	return (
		<>
			{[1, 2, 3, 4, 5, 6].map((item) => (
				<div
					key={item}
					className="z-20 grid w-80 grid-cols-2 gap-4 overflow-hidden rounded-lg bg-white shadow-cardSkeleton"
				>
					<div className="cardSkeleton col-span-2 aspect-[1/1] w-full "></div>
					<p className="cardSkeleton col-span-2 mx-5 h-8 rounded-lg"></p>
					<p className="cardSkeleton ml-5 h-8 w-20 rounded-lg "></p>
					<p className="cardSkeleton mb-3 mr-5 h-8 rounded-lg "></p>
				</div>
			))}
		</>
	)
}
export function CardProduct({
	products,
	addToCart,
	navigateToProduct,
	toggledFavorites,
	isFavorite,
	favorites
}) {
	return (
		<>
			<div className="mx-auto w-full max-w-5xl px-4 pb-10">
				<section className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-4 pt-5 ">
					{products?.length !== 0 || favorites ? (
						products?.map((product) => (
							<Card
								key={product.id}
								{...product}
								navigateToProduct={() => navigateToProduct(product.id)}
								toggledFavorites={(e) => toggledFavorites(e, product)}
								isFavorite={isFavorite(product)}
								addToCart={(e) => addToCart(e, product)}
							/>
						))
					) : (
						<ProductSkeleton />
					)}
					{products?.length !== 0 ||
						(favorites && (
							<div className="grid h-40 w-full max-w-md place-content-center text-center">
								<p className=" text-xl">
									You don't have any favorites yet. Explore and add your
									preferred products!
								</p>
							</div>
						))}
				</section>
			</div>
		</>
	)
}
CardProduct.propTypes = {
	products: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
	navigateToProduct: PropTypes.func.isRequired,
	toggledFavorites: PropTypes.func.isRequired,
	isFavorite: PropTypes.func.isRequired,
	favorites: PropTypes.bool
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
