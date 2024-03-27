import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api'
import { ProductInfo } from '@components/ProductInfo'
import { ProductImage } from '@components/ProductImage'
import { CategoryButton } from '@components/CategoryButton'
import { AddToCartButton } from '@components/AddToCartButton'
import { FavoriteButton } from '@components/FavoriteButton'
import { getProductById } from '@services/products'
import { useResetScroll } from '@utils'

export function Product() {
	const { id } = useParams()
	const idProduct = Number(id)

	// Scroll al principio de la página cuando se cambia de ruta.
	useResetScroll([idProduct])

	const { data } = useGetProductsQuery()
	if (!data) return
	const allProducts = data?.products

	const product = getProductById({ idProduct, allProducts })

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
				<div className="relative col-span-2  flex w-full justify-between gap-4 lg:justify-start">
					<AddToCartButton product={product} />
					<FavoriteButton product={product} className="h-8 w-8" />
				</div>
			</div>
		</section>
	)
}
