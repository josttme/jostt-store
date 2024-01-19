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
	sourceLink: product.credit.sourceLink
}))

export const getProducts = () => {
	return { products: mappedProducts }
}

export const getProductById = ({ productId }) => {
	return {
		product: mappedProducts.find((product) => product.id === productId)
	}
}

export const getProductsByCategory = (categoryId) => {
	return {
		products: mappedProducts.filter(
			(product) => product.categoryId === categoryId
		)
	}
}
export const searchProducts = ({ search }) => {
	if (search === '') return null

	// Filtra los productos según si la palabra de búsqueda está incluida en el título
	const productsSearch = mappedProducts.filter((product) =>
		product.title.toLowerCase().includes(search.toLowerCase())
	)

	// Puedes devolver los productos coincidentes o realizar otras acciones según tus necesidades
	return productsSearch
}
