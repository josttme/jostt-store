import { products } from './products.json'

const mappedProducts = products?.map((product) => ({
	id: product.id,
	title: product.title,
	price: product.price,
	description: product.description,
	category: product.category.name,
	image: product.imageMedium
}))

export const getProducts = () => {
	return { products: mappedProducts }
}

export const getProductById = ({ productId }) => {
	return {
		product: mappedProducts.find((product) => product.id === productId)
	}
}
