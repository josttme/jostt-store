import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useToggleFavotites } from '../hooks/useToggleFavotites'
import { useCart } from '../hooks/useCart'
import { useSessionStorage } from '../hooks/useSessionStorage'
import useLocalStorage from '../hooks/useLocalStorage'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
	const [allProducts, setAllProducts] = useState([])
	const [productsLoaded, setProductsLoaded] = useState(false)
	const [quantityProducts, setQuantityProducts] = useState(0)
	const [favorites, toggledFavorites] = useToggleFavotites('store_favorites')

	const [usersExisting, updateUsers] = useLocalStorage('users_store')
	const [username, setUsername] = useSessionStorage('username')
	const [
		cartItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity
	] = useCart('store_cart')
	const isFavorite = (product) => {
		return favorites.some((item) => item.id === product.id)
	}

	useEffect(() => {
		// Suma el total de la cantidad de productos en el carrito
		setQuantityProducts(
			cartItems.reduce((setQuantityProducts, item) => {
				return setQuantityProducts + item.quantity
			}, 0)
		)
	}, [cartItems])

	const valueContext = {
		favorites,
		toggledFavorites,
		isFavorite,
		cartItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		quantityProducts,
		allProducts,
		productsLoaded,
		setAllProducts,
		setProductsLoaded,
		usersExisting,
		updateUsers,
		username,
		setUsername
	}

	return (
		<ProductContext.Provider value={valueContext}>
			{children}
		</ProductContext.Provider>
	)
}

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired
}
