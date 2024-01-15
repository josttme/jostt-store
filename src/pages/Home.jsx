import { useCallback, useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { ProductContext } from '../context'
import { Search } from '../components/Search'
import { useProductSearch } from '../hooks/useProductSearch'

export function Home() {
	const { addToCart, isFavorite, toggleFavorites } = useContext(ProductContext)
	const {
		productsSearch,
		fetchProductSearch,
		loadingSearch,
		allProducts,
		setSearch,
		search,
		errorMessage
	} = useProductSearch()
	const navigate = useNavigate()

	// Verifica si allProducts está vacío antes de continuar
	const handleProduct = useCallback(
		(product) => {
			navigate(`/product/${product.id}`)
		},
		[navigate]
	)
	useEffect(() => {}, [search])

	const toggledFavorites = useCallback(
		(e, product) => {
			e.stopPropagation()
			toggleFavorites(product)
		},
		[toggleFavorites]
	)
	const products = useMemo(() => {
		if (!allProducts?.length) return

		let products

		productsSearch?.length
			? (products = productsSearch)
			: (products = allProducts)

		return products
	}, [allProducts, productsSearch])

	return (
		<div>
			<Search
				search={search}
				updateSearch={setSearch}
				errorMessage={errorMessage}
				getProducts={fetchProductSearch}
			/>
			<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 pb-11 pt-5 md:grid-cols-3">
				{loadingSearch ? (
					<span>Cargando...</span>
				) : (
					products?.map((product) => (
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
