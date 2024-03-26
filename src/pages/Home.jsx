import { usePagination } from '@hooks/usePagination'
import { useGetProducts } from '@hooks/useGetProducts'
import { ProductsList } from '@components/Card'
import { Search } from '@components/Search'
import { Pagination } from '@components/Pagination'
import { useResetScroll } from '../utils'

export function Home() {
	const { products, isLoading, onSearch } = useGetProducts()

	const { totalPages, firstIndex, lastIndex, onPageChange, currentPage } =
		usePagination({ products })

	useResetScroll([currentPage])
	return (
		<section className=" grid min-h-[calc(100vh-3.5rem)] w-full grid-cols-1 grid-rows-[auto_1fr_auto] pb-10 ">
			<Search products={products} isLoading={isLoading} onSearch={onSearch} />

			<ProductsList
				products={products}
				isLoading={isLoading}
				firstIndex={firstIndex}
				lastIndex={lastIndex}
			/>

			<Pagination
				totalPages={totalPages}
				onPageChange={onPageChange}
				currentPage={currentPage}
			/>
		</section>
	)
}
