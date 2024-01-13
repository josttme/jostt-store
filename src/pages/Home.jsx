import { useNavigate } from 'react-router-dom'
import { getProducts } from '../api'
import { Card } from '../components/Card'
import { useContext } from 'react'
import { ProductContext } from '../context'

export function Home() {
	const { addToCart, isFavorite, toggleFavorites } = useContext(ProductContext)
	const { products } = getProducts(null)

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
		<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-11 md:grid-cols-3">
			{products?.map((product) => (
				<Card
					key={product.id}
					{...product}
					handleProduct={() => handleProduct(product)}
					toggledFavorites={(e) => toggledFavorites(e, product)}
					isFavorite={isFavorite(product)}
					addToCart={() => addToCart(product)}
				></Card>
			))}
		</section>
	)
}
