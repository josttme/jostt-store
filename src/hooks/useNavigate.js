import { useNavigate } from 'react-router-dom'

export function useNavigation() {
	const navigate = useNavigate()

	function navigateToProduct(product) {
		navigate(`/product/${product.id}`)
	}

	return { navigateToProduct }
}
