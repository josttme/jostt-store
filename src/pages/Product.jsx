import { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductContext } from '../context'
import { SvgHeart } from '../components/icons/SvgHeart'
import { ProductInfo } from '../components/ProductInfo'
import { ProductImage } from '../components/ProductImage'
import { CategoryButton } from '../components/CategoryButton'
import { getProductById } from '../services/products'
import { useGetProducts } from '../hooks/useGetProducts'
import { useResetScroll } from '../utils'

export function Product() {
	const { isFavorite, toggledFavorites, addToCart } = useContext(ProductContext)

	const { id } = useParams()

	const { allProducts } = useGetProducts()

	const product = getProductById({ id, allProducts })

	// Scroll al principio de la página cuando se cambia de ruta.
	const { pathname } = useLocation()
	useResetScroll([pathname])
	if (!product) return
	const {
		name,
		price,
		mainImage,
		description,
		categoryName,
		categoryId,
		createdBy,
		createdByLink,
		sourceLink
	} = product

	const isFavorited = isFavorite(product)

	return (
		<section className=" grid gap-4 overflow-hidden bg-white   lg:mx-auto  lg:my-28 lg:max-w-6xl  lg:grid-cols-[repeat(auto-fit,minmax(550px,550px))]  lg:rounded-lg lg:shadow-lg">
			<ProductImage image={mainImage} title={name} />

			<div className="grid grid-cols-2 gap-5 px-5 lg:flex lg:flex-col lg:py-11 lg:pl-8 lg:pr-16 ">
				<h1 className="col-span-2 text-3xl lg:text-4xl"> {name}</h1>

				<ProductInfo
					title={name}
					description={description}
					author={createdBy}
					authorLink={createdByLink}
					sourceLink={sourceLink}
					category={categoryName}
					categoryId={categoryId}
				/>
				<CategoryButton
					category={categoryName}
					categoryId={categoryId}
					productPage
				/>
				<p className="col-start-1 text-4xl font-bold text-red-6">{`$${price}`}</p>
				<div className="col-span-2  flex w-full justify-between gap-4 lg:justify-start">
					<button
						type="button"
						onClick={(e) => addToCart(e, product)}
						className="relative grid w-4/5  items-center rounded-lg bg-gradient-to-r from-red-6  to-red-9 p-3 text-center text-lg    text-white  before:absolute before:h-full before:w-full before:rounded-lg hover:before:bg-black/10 lg:w-60"
					>
						Add to cart
					</button>

					<button
						type="button"
						onClick={(e) => toggledFavorites(e, product)}
						className="grid aspect-square h-full w-auto place-content-center rounded-full bg-slate-200  stroke-black p-2 shadow-sm transition duration-300 hover:stroke-red-6  "
					>
						<SvgHeart
							className={`
								${isFavorited ? 'fill-red-5 stroke-red-5' : 'fill-none'} h-6 w-6
							`}
							strokeWidth="1.3"
						/>
					</button>
				</div>
			</div>
		</section>
	)
}
