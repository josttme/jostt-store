import { useGetProductsQuery } from '../redux/api'

export function useGetProductsByApi() {
	const { isLoading, data } = useGetProductsQuery()
	const allProducts = data?.products

	return { isLoading, allProducts }
}
