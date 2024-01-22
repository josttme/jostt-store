import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context'
import { SvgHeart } from '../components/icons/SvgHeart'
import { ProductInfo } from '../components/ProductInfo'
import { ProductImage } from '../components/ProductImage'
import { CategoryButton } from '../components/CategoryButton'
import { getProductById } from '../services/products'
import { useGetProducts } from '../hooks/useGetProducts'

export function Product() {
	const { isFavorite, toggledFavorites, addToCart } = useContext(ProductContext)

	const { id } = useParams()

	const { allProducts } = useGetProducts()

	const product = getProductById({ id, allProducts })

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
		<section className=" mx-auto my-28 grid max-w-6xl grid-cols-2 gap-4 overflow-hidden  rounded-lg  bg-white shadow-lg">
			<ProductImage image={mainImage} title={name} />

			<div className="flex flex-col gap-5 py-11 pl-8 pr-16 ">
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
				<p className="text-4xl font-bold text-[#ff234e]">{`$${price}`}</p>
				<div className="flex gap-4">
					<button
						type="button"
						onClick={(e) => addToCart(e, product)}
						className="relative grid w-60 items-center rounded-lg bg-gradient-to-r from-[#ff6174]  via-[#ff6174] via-30% to-[#ff234e] p-3 text-center    text-lg  text-white before:absolute before:h-full before:w-full before:rounded-lg hover:before:bg-black/10"
					>
						Add to cart
					</button>

					<button
						type="button"
						onClick={(e) => toggledFavorites(e, product)}
						className="grid h-12 w-12 place-content-center rounded-full bg-slate-200 stroke-black p-2 shadow-sm transition duration-300 hover:stroke-[red]"
					>
						<SvgHeart
							className={`
								${isFavorited ? 'fill-red-600 stroke-red-600' : 'fill-none'} h-6 w-6
							`}
						/>
					</button>
				</div>
			</div>
		</section>
	)
}
