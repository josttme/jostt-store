import PropTypes from 'prop-types'
import Image from './Image'
import { CategoryButton } from './CategoryButton'
import { FavoriteButton } from './FavoriteButton'
import { AddToCartButton } from './AddToCartButton'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from '@utils'

function Card({ product, navigateToProduct }) {
	// Estado para controlar la carga de la imagen
	const { name, price, mainImage, categoryName, categoryId } = product
	return (
		<div
			onClick={navigateToProduct}
			className=" z-10 flex w-full max-w-sm cursor-pointer flex-col gap-2 overflow-hidden rounded-lg pb-2 transition-opacity duration-200  lg:grid lg:aspect-[3/4] lg:w-80 lg:bg-white lg:pb-4 lg:shadow-card lg:hover:shadow-cardHover "
		>
			<figure className="relative w-full">
				<FavoriteButton
					product={product}
					className="absolute right-2 top-2 z-20 h-8 w-8"
				/>
				<div className="relative">
					<Image src={mainImage} title={name} />
					<CategoryButton category={categoryName} categoryId={categoryId} />
				</div>
			</figure>

			<div className="flex w-full items-center justify-between px-2 lg:px-5">
				<p className=" text-3xl font-bold text-red-6">{`$${price}`}</p>
				<AddToCartButton product={product} />
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
export function ProductsList({
	products,
	favorites,
	isLoading,
	firstIndex,
	lastIndex
}) {
	const navigate = useNavigate()
	const { navigateToProduct } = useNavigation(navigate)

	return (
		<>
			<div className="mx-auto w-full max-w-5xl px-2 pb-10 lg:px-4">
				<section className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-2 pt-5 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:gap-4 ">
					{products?.length !== 0 || !isLoading || favorites ? (
						products
							?.map((product) => (
								<Card
									key={product.id}
									product={product}
									navigateToProduct={() => navigateToProduct(product.id)}
								/>
							))
							.slice(firstIndex, lastIndex)
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
ProductsList.propTypes = {
	isLoading: PropTypes.bool,
	products: PropTypes.array.isRequired,
	favorites: PropTypes.bool,
	firstIndex: PropTypes.number,
	lastIndex: PropTypes.number
}

Card.propTypes = {
	product: PropTypes.object,
	navigateToProduct: PropTypes.func,
	addToCart: PropTypes.func
}
