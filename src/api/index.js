import { products } from './products.json'

export default function getProducts() {
	console.log()
	const mappedProducts = products?.map((product) => ({
		id: product.id,
		title: product.title,
		price: product.price,
		description: product.description,
		category: product.category.name,
		image: product.imageMedium
	}))
	return {
		products: mappedProducts
	}
}
