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
			className=" z-10 flex w-full max-w-sm cursor-pointer flex-col gap-2 overflow-hidden rounded-lg pb-2 transition-opacity duration-200  lg:grid lg:aspect-[3/4] lg:w-80 lg:bg-white lg:pb-4 lg:shadow-card lg:hover:shadow-cardHover "
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
						className="grid h-8 w-8 place-content-center rounded-full bg-slate-100/80 transition duration-300 hover:bg-white/90 hover:stroke-red-6"
					>
						<SvgHeart
							className={`${favorite} grid h-5 w-5 place-content-center stroke-black  `}
							strokeWidth="1.3"
						/>
					</button>
				</div>
				<div className="relative">
					<Image src={mainImage} title={name} />
					<CategoryButton category={categoryName} categoryId={categoryId} />
				</div>
			</figure>

			<div className="flex w-full items-center justify-between px-2 lg:px-5">
				<p className=" text-3xl font-bold text-red-6">{`$${price}`}</p>
				<div
					onClick={addToCart}
					className="relative flex items-center rounded-md before:absolute before:h-full before:w-full before:rounded-md  hover:before:bg-black/10  lg:bg-gradient-to-r lg:from-red-1 lg:via-red-4 lg:via-30%   lg:to-red-7"
				>
					<div className="w-10 rounded-l-md rounded-r-md bg-red-1 p-1 lg:rounded-r-none  ">
						<SvgCartPlus className="fill-red-5 stroke-red-5" />
					</div>
					<span className=" hidden px-1 text-center text-sm text-white lg:block lg:px-2">
						Add to cart
					</span>
				</div>
			</div>
			<h1 className="inline-block h-min max-w-48 overflow-hidden text-ellipsis px-2  text-xl hover:underline lg:max-w-full  lg:px-5 lg:text-xl">
				{name}
			</h1>
		</div>
	)
}
function ProductSkeleton() {
	return (
		<>
			{[1, 2, 3, 4, 5, 6].map((item) => (
				<div
					key={item}
					className="z-20 grid h-full w-full grid-cols-2 gap-2 overflow-hidden rounded-lg lg:w-80 lg:gap-4  lg:bg-white lg:shadow-cardSkeleton"
				>
					<div className="cardSkeleton col-span-2 aspect-[1/1] h-full w-full rounded-lg lg:rounded-none "></div>
					<p className="cardSkeleton lg:W-full ml-2 h-8 w-12 rounded-lg lg:ml-5 lg:w-20 "></p>
					<p className="cardSkeleton mr-2 h-8 w-12 justify-self-end rounded-lg lg:mr-5 lg:w-28 "></p>
					<p className="cardSkeleton col-span-2 mx-2 mb-3 h-14 rounded-lg lg:mx-5 lg:h-8"></p>
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
			<div className="mx-auto w-full max-w-5xl px-2 pb-10 lg:px-4">
				<section className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-2 pt-5 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:gap-4 ">
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
