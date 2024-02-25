import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CardProduct } from '@components/Card'
import { ProductContext } from '@context'
import { Search } from '@components/Search'
import { Pagination } from '@components/Pagination'
import { useNavigation, useResetScroll } from '@utils'
import { useProductsSearch } from '@hooks/useProductsSearch'
import { usePagination } from '@hooks/usePagination'
import { useGetProducts } from '@hooks/useGetProducts'

export function Home() {
	const { addToCart, isFavorite, toggledFavorites } = useContext(ProductContext)
	const { allProducts } = useGetProducts()

	const { productsSearch, getProducts } = useProductsSearch()

	const { products, postsPerPage, setCurrentPage, currentPage } = usePagination(
		{ allProducts, productsSearch }
	)

	const navigate = useNavigate()
	const { navigateToProduct } = useNavigation(navigate)

	// Scroll al principio de la página cuando se cambia de ruta.
	const { pathname } = useLocation()
	useResetScroll([pathname])
	return (
		<section className=" grid min-h-[calc(100vh-3.5rem)] w-full grid-cols-1 grid-rows-[auto_1fr_auto] pb-10 ">
			<Search
				getProducts={getProducts}
				productsSearch={productsSearch}
				allProducts={allProducts}
			/>

			<CardProduct
				products={products}
				addToCart={addToCart}
				isFavorite={isFavorite}
				toggledFavorites={toggledFavorites}
				navigateToProduct={navigateToProduct}
			/>

			<Pagination
				totalPosts={allProducts?.length}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</section>
	)
}
