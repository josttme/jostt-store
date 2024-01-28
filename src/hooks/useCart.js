import useLocalStorage from './useLocalStorage'
import { useUpdateUserCart } from './user/useUpdateUserCart'

export const useCart = (key, usersExisting, username, updateUsers) => {
	let cartItemsCurrentUSer
	if (usersExisting) {
		cartItemsCurrentUSer = usersExisting?.find(
			(user) => user?.username === username
		)?.cartItems
	}
	const [cartItems, setCartItems] = useLocalStorage(key)
	const newCatItems = cartItemsCurrentUSer || cartItems

	const { cartsOnCurrentUser } = useUpdateUserCart({
		usersExisting,
		updateUsers,
		setCartItems
	})

	const addToCart = (e, product) => {
		e.stopPropagation()
		const existingItem = newCatItems.find((item) => item.id === product.id)
		if (existingItem) {
			const newCart = newCatItems.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})
			username
				? cartsOnCurrentUser({ username, newCart })
				: setCartItems(newCart)
		} else {
			if (username) {
				const newCart = [...newCatItems, { ...product, quantity: 1 }]
				cartsOnCurrentUser({ username, newCart })
			} else {
				setCartItems([...newCatItems, { ...product, quantity: 1 }])
			}
		}
	}

	const removeFromCart = (product) => {
		const removeCart = newCatItems.filter((item) => item.id !== product.id)
		username
			? cartsOnCurrentUser({ username, removeCart })
			: setCartItems(removeCart)
	}

	const increaseQuantity = (product) => {
		const newCart = newCatItems.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity + 1 }
			}
			return item
		})
		username ? cartsOnCurrentUser({ username, newCart }) : setCartItems(newCart)
	}

	const decreaseQuantity = (product) => {
		const newCart = newCatItems.map((item) => {
			if (item.id === product.id && item.quantity > 1) {
				return { ...item, quantity: item.quantity - 1 }
			}
			return item
		})
		username ? cartsOnCurrentUser({ username, newCart }) : setCartItems(newCart)
	}

	return [
		newCatItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		setCartItems
	]
}
