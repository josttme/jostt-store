import { useNavigate } from 'react-router-dom'
import { getProducts } from '../api'
import { Card } from '../components/Card'
import { useContext } from 'react'
import { ProductContext } from '../context'
import { Search } from '../components/Search'
import { useMessageSearch } from '../hooks/useMessageSearch'
import { useProductSearch } from '../hooks/useProductSearch'

export function Home() {
	const { addToCart, isFavorite, toggleFavorites } = useContext(ProductContext)
	const { products } = getProducts(null)
	const [search, setSearch, error] = useMessageSearch()
	const { productsSearch, fetchProductSearch, loadingSearch } =
		useProductSearch({ search })

	const navigate = useNavigate()
	const handleProduct = (product) => {
		navigate(`/product/${product.id}`)
	}
	const toggledFavorites = (e, product) => {
		e.stopPropagation()
		toggleFavorites(product)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		fetchProductSearch({ search })
	}

	return (
		<div>
			<Search
				search={search}
				updateSearch={setSearch}
				error={error}
				handleSubmit={handleSubmit}
				getProducts={fetchProductSearch}
			/>
			<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 pb-11 pt-5 md:grid-cols-3">
				{loadingSearch ? (
					<span>Cargando...</span>
				) : search.length >= 3 && productsSearch.length > 1 ? (
					productsSearch?.map((product) => (
						<Card
							key={product.id}
							{...product}
							handleProduct={() => handleProduct(product)}
							toggledFavorites={(e) => toggledFavorites(e, product)}
							isFavorite={isFavorite(product)}
							addToCart={() => addToCart(product)}
						/>
					))
				) : (
					products.map((product) => (
						<Card
							key={product.id}
							{...product}
							handleProduct={() => handleProduct(product)}
							toggledFavorites={(e) => toggledFavorites(e, product)}
							isFavorite={isFavorite(product)}
							addToCart={() => addToCart(product)}
						/>
					))
				)}
			</section>
		</div>
	)
}
