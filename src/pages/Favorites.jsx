import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from '../utils'
import { ProductContext } from '../context'
import { Card } from '../components/Card'

export function Favorites() {
	const { addToCart, favorites, toggledFavorites } = useContext(ProductContext)

	const navigate = useNavigate()

	const { navigateToProduct } = useNavigation(navigate)

	return (
		<div className="flex-grow ">
			<div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-11 md:grid-cols-3">
				{favorites?.map((product) => (
					<Card
						key={product.id}
						{...product}
						openProduct={() => navigateToProduct(product)}
						toggledFavorites={(e) => toggledFavorites(e, product)}
						addToCart={(e) => addToCart(e, product)}
						isFavorite={true}
					/>
				))}
			</div>
		</div>
	)
}
