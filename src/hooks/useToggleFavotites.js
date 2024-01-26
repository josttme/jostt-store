import useLocalStorage from './useLocalStorage'

export function useToggleFavotites(key) {
	const [products, setProducts] = useLocalStorage(key)

	const toggledFavorites = (e, product) => {
		e.stopPropagation()
		const isProductInList = products.some((item) => item.id === product.id)

		if (isProductInList) {
			// si ya existe, se eliminará de la lista
			const updatedProducts = products.filter((item) => item.id !== product.id)
			setProducts(updatedProducts)
		} else {
			// si no existe, se agregará a la lista
			setProducts([...products, product])
		}
	}

	return [products, toggledFavorites, setProducts]
}
