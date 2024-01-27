import useLocalStorage from './useLocalStorage'
import { useUpdateCurrenUser } from './useUpdateCurrenUser'

export const useCart = (key, usersExisting, username, updateUsers) => {
	let cartItemsCurrentUSer
	if (usersExisting) {
		cartItemsCurrentUSer = usersExisting?.find(
			(user) => user?.username === username
		)?.cartItems
	}
	const [cartItems, setCartItems] = useLocalStorage(key)
	const newCatItems = cartItemsCurrentUSer || cartItems
	const { getFavoritesAndCartsOnCurrentUser } = useUpdateCurrenUser({
		usersExisting,
		updateUsers,
		setCartItems
	})
	const addToCart = (e, product) => {
		e.stopPropagation()
		const existingItem = newCatItems.find((item) => item.id === product.id)
		if (existingItem) {
			const updatedCartItems = newCatItems.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})
			if (username) {
				getFavoritesAndCartsOnCurrentUser(username, null, updatedCartItems)
			} else {
				setCartItems(updatedCartItems)
			}
		} else {
			if (username) {
				getFavoritesAndCartsOnCurrentUser(username, null, [
					...newCatItems,
					{ ...product, quantity: 1 }
				])
			} else {
				setCartItems([...newCatItems, { ...product, quantity: 1 }])
			}
		}
	}

	const removeFromCart = (product) => {
		const updatedCartItems = newCatItems.filter(
			(item) => item.id !== product.id
		)
		if (username) {
			getFavoritesAndCartsOnCurrentUser(username, null, null, updatedCartItems)
		} else {
			setCartItems(updatedCartItems)
		}
	}

	const increaseQuantity = (product) => {
		const updatedCartItems = newCatItems.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity + 1 }
			}
			return item
		})
		if (username) {
			getFavoritesAndCartsOnCurrentUser(username, null, updatedCartItems)
		} else {
			setCartItems(updatedCartItems)
		}
	}

	const decreaseQuantity = (product) => {
		const updatedCartItems = newCatItems.map((item) => {
			if (item.id === product.id && item.quantity > 1) {
				return { ...item, quantity: item.quantity - 1 }
			}
			return item
		})
		if (username) {
			getFavoritesAndCartsOnCurrentUser(username, null, updatedCartItems)
		} else {
			setCartItems(updatedCartItems)
		}
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
