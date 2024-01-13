import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useToggleFavotites } from '../hooks/useToggleFavotites'
import { useCart } from '../hooks/useCart'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
	const [quantityProducts, setQuantityProducts] = useState(0)
	const [favorites, toggleFavorites] = useToggleFavotites('store_favorites')
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
		toggleFavorites,
		isFavorite,
		cartItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		quantityProducts
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
