import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from '@utils'
import { ProductContext } from '@context'
import { CardProduct } from '@components/Card'

export function Favorites() {
	const { addToCart, favorites, toggledFavorites, isFavorite } =
		useContext(ProductContext)

	const navigate = useNavigate()

	const { navigateToProduct } = useNavigation(navigate)

	return (
		<div className="flex-grow">
			<CardProduct
				products={favorites}
				addToCart={addToCart}
				isFavorite={isFavorite}
				toggledFavorites={toggledFavorites}
				navigateToProduct={navigateToProduct}
				favorites
			/>
		</div>
	)
}
