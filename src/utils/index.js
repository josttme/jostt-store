export function useNavigation(navigate) {
	function navigateToProduct(product) {
		navigate(`/product/${product.id}`)
	}

	return { navigateToProduct }
}
