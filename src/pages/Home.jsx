import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardProduct } from '../components/Card'
import { ProductContext } from '../context'
import { Search } from '../components/Search'
import { Pagination } from '../components/Pagination'
import { useNavigation } from '../utils'
import { useProductsSearch } from '../hooks/useProductsSearch'
import { usePagination } from '../hooks/usePagination'
import { useGetProducts } from '../hooks/useGetProducts'

export function Home() {
	const { addToCart, isFavorite, toggledFavorites } = useContext(ProductContext)
	const { allProducts } = useGetProducts()

	const { productsSearch, getProducts } = useProductsSearch()

	const { products, postsPerPage, setCurrentPage, currentPage } = usePagination(
		{ allProducts, productsSearch }
	)

	const navigate = useNavigate()

	const { navigateToProduct } = useNavigation(navigate)
	return (
		<section className=" pb-10 pt-5">
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
