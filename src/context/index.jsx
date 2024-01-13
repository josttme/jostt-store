import PropTypes from 'prop-types'
import { createContext } from 'react'
import { useToggleFavotites } from '../hooks/useToggleFavotites'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
	const [favorites, toggleFavorites] = useToggleFavotites('store_favorites')

	const isFavorite = (product) => {
		return favorites.some((item) => item.id === product.id)
	}

	const valueContext = { favorites, toggleFavorites, isFavorite }

	return (
		<ProductContext.Provider value={valueContext}>
			{children}
		</ProductContext.Provider>
	)
}

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired
}
