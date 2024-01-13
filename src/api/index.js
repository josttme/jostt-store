import { products } from './products.json'

const mappedProducts = products?.map((product) => ({
	id: product.id,
	title: product.title,
	price: product.price,
	description: product.description,
	image: product.imageMedium,
	category: product.category.name,
	categoryId: product.category.id,
	author: product.credit.author,
	authorLink: product.credit.authorLink,
	surceLink: product.credit.sourceLink
}))

export const getProducts = () => {
	return { products: mappedProducts }
}

export const getProductById = ({ productId }) => {
	return {
		product: mappedProducts.find((product) => product.id === productId)
	}
}
