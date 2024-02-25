import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useNavigation, useResetScroll } from '@utils'
import { CardProduct } from '@components/Card'
import { ProductContext } from '@context'
import { getProductsByCategory } from '@services/products'
import { useGetProducts } from '@hooks/useGetProducts'

export function Category() {
	const { addToCart, isFavorite, toggledFavorites } = useContext(ProductContext)
	const { allProducts } = useGetProducts()
	const navigate = useNavigate()

	// Obtiene el parámetro "path" de la ruta actual
	const { id } = useParams()
	// Divide el "path" en partes
	const idParts = id.split('-')
	// Obtiene el último elemento de la ruta actual
	const categoryId = idParts[idParts.length - 1]

	const products = getProductsByCategory({ categoryId, allProducts })

	const { navigateToProduct } = useNavigation(navigate)

	// Scroll al principio de la página cuando se cambia de ruta.
	useResetScroll([id])
	return (
		<CardProduct
			products={products}
			addToCart={addToCart}
			isFavorite={isFavorite}
			toggledFavorites={toggledFavorites}
			navigateToProduct={navigateToProduct}
		/>
	)
}
