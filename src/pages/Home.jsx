import getProducts from '../api'
import { Card } from '../components/Card'

export function Home() {
	const { products } = getProducts(null)

	return (
		<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-11 md:grid-cols-3">
			{products?.map((product) => (
				<Card key={product.id} {...product}></Card>
			))}
		</section>
	)
}
