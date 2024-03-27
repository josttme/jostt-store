import { useDispatch, useSelector } from 'react-redux'
import {
	addToCart,
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
	removeAllCart,
	// user
	addToUserCart,
	removeFromUserCart,
	increaseUserCartQuantity,
	decreaseUserCartQuantity,
	removeAllUserCart
} from '../redux/slices'

export const useCartActions = () => {
	const dispatch = useDispatch()
	const username = useSelector((state) => state.storeCurrenUser.currentUser)

	const handleAddToCart = ({ product }) => {
		if (username) {
			dispatch(addToUserCart({ username, product }))
		} else {
			dispatch(addToCart({ product }))
		}
	}

	const handleRemoveFromCart = ({ product }) => {
		if (username) {
			dispatch(removeFromUserCart({ username, product }))
		} else {
			dispatch(removeFromCart({ product }))
		}
	}

	const handleIncreaseQuantity = ({ product }) => {
		if (username) {
			dispatch(increaseUserCartQuantity({ username, product }))
		} else {
			dispatch(increaseQuantity({ product }))
		}
	}

	const handleDecreaseQuantity = ({ product }) => {
		if (username) {
			dispatch(decreaseUserCartQuantity({ username, product }))
		} else {
			dispatch(decreaseQuantity({ product }))
		}
	}

	const handleRemoveAllCart = () => {
		if (username) {
			dispatch(removeAllUserCart({ username }))
		} else {
			dispatch(removeAllCart())
		}
	}

	return {
		handleAddToCart,
		handleRemoveFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity,
		handleRemoveAllCart
	}
}
