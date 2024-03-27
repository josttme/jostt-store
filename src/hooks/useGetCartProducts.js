import { useSelector } from 'react-redux'
import { getCurrentUserDetails, selectCartItems } from '../redux/slices'

export const useGetCartProducts = () => {
	const username = useSelector(getCurrentUserDetails)
	const cartProducts = useSelector(selectCartItems)

	// Definimos una función para calcular la cantidad total de productos
	const calculateTotalQuantity = (products) => {
		return products.reduce((total, product) => {
			return total + product.quantity
		}, 0)
	}

	if (username) {
		const quantityProducts = calculateTotalQuantity(username.cartItems)
		return { cartProducts: username.cartItems, quantityProducts }
	}

	const quantityProducts = calculateTotalQuantity(cartProducts)
	return { cartProducts, quantityProducts }
}
