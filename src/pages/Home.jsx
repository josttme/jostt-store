import { useNavigate } from 'react-router-dom'
import getProducts from '../api'
import { Card } from '../components/Card'

export function Home() {
	const { products } = getProducts(null)
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
				></Card>
			))}
		</section>
	)
}
