import useLocalStorage from './useLocalStorage'

export const useCart = (key) => {
	const [cartItems, setCartItems] = useLocalStorage(key)

	const addToCart = (e, product) => {
		e.stopPropagation()
		const existingItem = cartItems.find((item) => item.id === product.id)
		if (existingItem) {
			const updatedCartItems = cartItems.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})
			setCartItems(updatedCartItems)
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }])
		}
	}

	const removeFromCart = (product) => {
		const updatedCartItems = cartItems.filter((item) => item.id !== product.id)
		setCartItems(updatedCartItems)
	}

	const increaseQuantity = (product) => {
		const updatedCartItems = cartItems.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity + 1 }
			}
			return item
		})
		setCartItems(updatedCartItems)
	}

	const decreaseQuantity = (product) => {
		const updatedCartItems = cartItems.map((item) => {
			if (item.id === product.id && item.quantity > 1) {
				return { ...item, quantity: item.quantity - 1 }
			}
			return item
		})
		setCartItems(updatedCartItems)
	}

	return [
		cartItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity
	]
}
