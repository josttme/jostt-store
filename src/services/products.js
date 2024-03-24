/**
 * Obtiene productos que coincidan con la búsqueda.
 * @param {string} search - Término de búsqueda.
 * @param {Array} allProducts - Todos los productos disponibles.
 * @returns {Array|null} - Array de productos coincidentes o null si la búsqueda está vacía.
 */
export function getSearchProducts({ search, allProducts }) {
	if (!search) return null // Si la búsqueda está vacía, devuelve null
	return allProducts?.filter((product) =>
		product.name.toLowerCase().includes(search.toLowerCase())
	)
}

/**
 * Obtiene productos por categoría.
 * @param {string} categoryId - ID de la categoría.
 * @param {Array} allProducts - Todos los productos disponibles.
 * @returns {Array} - Array de productos de la categoría especificada.
 */
export function getProductsByCategory({ categoryId, allProducts }) {
	return allProducts?.filter((product) => product.categoryId === categoryId)
}

/**
 * Obtiene un producto por su ID.
 * @param {string} idProduct - ID del producto.
 * @param {Array} allProducts - Todos los productos disponibles.
 * @returns {Object|undefined} - Producto encontrado o undefined si no se encuentra.
 */
export function getProductById({ idProduct, allProducts }) {
	return allProducts.find((product) => product.id === idProduct)
}
