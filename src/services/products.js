// const API = 'http://localhost:5173/src/api/products.json'
export function getSearchProducts({ search, allProducts }) {
	if (search === '') return null
	return allProducts?.filter((p) =>
		p.name.toLowerCase().includes(search.toLowerCase())
	)
}
export function getProductsByCategory({ categoryId, allProducts }) {
	return allProducts?.filter((product) => product?.categoryId === categoryId)
}

export function getProductById({ id, allProducts }) {
	return allProducts.find((product) => product.id === id)
}

export function mappedProducts(products) {
	return products?.map((product) => ({
		id: product.id,
		name: product.title,
		price: product.price,
		description: product.description,
		mainImage: product.imageMedium,
		categoryName: product.category.name,
		categoryId: product.category.id,
		createdBy: product.credit.author,
		createdByLink: product.credit.authorLink,
		sourceLink: product.credit.sourceLink
	}))
}
