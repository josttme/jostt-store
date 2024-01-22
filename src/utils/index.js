export function useNavigation(navigate) {
	const navigateToProduct = (id) => {
		navigate(`/product/${id}`)
	}
	return { navigateToProduct }
}
