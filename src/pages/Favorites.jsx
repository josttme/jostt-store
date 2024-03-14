import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigation } from '@utils'
import { ProductContext } from '@context'
import { CardProduct } from '@components/Card'

export function Favorites() {
	const { addToCart } = useContext(ProductContext)
	const favorites = useSelector((state) => state.storeLikes.likes)
	const navigate = useNavigate()

	const { navigateToProduct } = useNavigation(navigate)

	return (
		<div className="flex-grow">
			<CardProduct
				products={favorites}
				addToCart={addToCart}
				navigateToProduct={navigateToProduct}
				favorites
			/>
		</div>
	)
}
