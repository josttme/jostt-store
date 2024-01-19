import { useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { ProductContext } from '../context'
import { Search } from '../components/Search'
import { useProductSearch } from '../hooks/useProductSearch'
import { Pagination } from '../components/Pagination'
import { useNavigation } from '../utils'

export function Home() {
	const { addToCart, isFavorite, toggledFavorites } = useContext(ProductContext)

	const {
		productsSearch,
		fetchProductSearch,
		loadingSearch,
		allProducts,
		setSearch,
		search,
		errorMessage
	} = useProductSearch()

	const [productsHome, setProductsHome] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(9)

	const navigate = useNavigate()
	const { navigateToProduct } = useNavigation(navigate)

	useEffect(() => {
		if (!allProducts?.length) return
		setProductsHome(allProducts)
	}, [allProducts])

	// Ubicación actual
	const location = useLocation()
	const numeroPagina =
		location.pathname === '/'
			? 1
			: Number(location.pathname.split('/page/')[1] || 1)
	useEffect(() => {
		// Actualiza la vista cuando cambie la ruta
		setCurrentPage(numeroPagina)
	}, [location])

	const products = useMemo(() => {
		const postsPerPage = 9
		const lastPostIndex = numeroPagina * postsPerPage
		const firstPostIndex = lastPostIndex - postsPerPage
		const currentPosts = productsHome.slice(firstPostIndex, lastPostIndex)

		let products

		productsSearch?.length
			? (products = productsSearch)
			: (products = currentPosts)
		return products
	}, [productsHome, productsSearch, currentPage])

	return (
		<div className=" pb-10 pt-5">
			<Search
				search={search}
				updateSearch={setSearch}
				errorMessage={errorMessage}
				getProducts={fetchProductSearch}
			/>
			<section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 pt-5 md:grid-cols-3">
				{loadingSearch ? (
					<span>Cargando...</span>
				) : (
					products?.map((product) => (
						<Card
							key={product.id}
							{...product}
							openProduct={() => navigateToProduct(product)}
							toggledFavorites={(e) => toggledFavorites(e, product)}
							isFavorite={isFavorite(product)}
							addToCart={(e) => addToCart(e, product)}
						/>
					))
				)}
			</section>
			<Pagination
				totalPosts={allProducts?.length}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	)
}
