import { useNavigate, useParams } from 'react-router-dom'
import { getProductsByCategory } from '../api'
import { Card } from '../components/Card'

export function Category() {
	// Obtiene el parámetro "path" de la ruta actual
	const { id } = useParams()
	// Divide el "path" en partes
	const idParts = id.split('-')
	// Obtiene el último elemento de la ruta actual
	const lastPart = idParts[idParts.length - 1]

	// Convierte lastPart a un número si es necesario (base 10)
	const categoryId = parseInt(lastPart, 10)
	const { products } = getProductsByCategory(categoryId)
	console.log(products)

	const navigate = useNavigate()
	const handleProduct = (product) => {
		/* setSelectedProduct(product) */
		navigate(`/product/${product.id}`)
	}
	return (
		<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-11 md:grid-cols-3">
			{products?.map((product) => (
				<Card
					key={product.id}
					{...product}
					handleProduct={() => handleProduct(product)}
					// toggledFavorites={(e) => toggledFavorites(e, product)}
					// isFavorite={isFavorite(product)}
				/>
			))}
		</section>
	)
}
