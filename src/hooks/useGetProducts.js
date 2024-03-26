import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../redux/api'
import { getSearchProducts } from '@services/products'

export function useGetProducts() {
	const { isLoading, data } = useGetProductsQuery()
	const allProducts = data?.products || []

	const [search, setSearch] = useState('')
	const [products, setProducts] = useState(allProducts)
	const [loading, setLoading] = useState(isLoading)
	const [error, setError] = useState(null)

	const onSearch = (newQuery) => {
		setSearch(newQuery)
	}

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				setError(null)
				if (!search) return setProducts(allProducts)

				const filteredProducts = getSearchProducts({ search, allProducts })
				setProducts(filteredProducts)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		if (allProducts.length) {
			fetchProducts()
		}
	}, [search, allProducts])

	return {
		products,
		isLoading: isLoading || loading,
		error,
		onSearch
	}
}
