import { useContext } from 'react'
import { ProductContext } from '../context'
import { Card } from '../components/Card'
import { useNavigate } from 'react-router-dom'

export function Favorites() {
	const { addToCart, favorites, toggleFavorites } = useContext(ProductContext)

	const navigate = useNavigate()
	const handleProduct = (product) => {
		/* setSelectedProduct(product) */
		navigate(`/product/${product.id}`)
	}

	const toggledFavorites = (e, product) => {
		e.stopPropagation()
		toggleFavorites(product)
	}

	return (
		<div className="flex-grow ">
			<div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-11 md:grid-cols-3">
				{favorites?.map((product) => (
					<Card
						key={product.id}
						{...product}
						handleProduct={() => handleProduct(product)}
						toggledFavorites={(e) => toggledFavorites(e, product)}
						addToCart={() => addToCart(product)}
						isFavorite={true}
					/>
				))}
			</div>
		</div>
	)
}
