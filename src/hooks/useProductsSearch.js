import { useCallback, useEffect, useState } from 'react'
import { getSearchProducts } from '@services/products'

export function useProductsSearch() {
	const [productsSearch, setProductsSearch] = useState([])
	const [loading, setLoading] = useState(false)
	const [, setError] = useState(null)

	const getProducts = useCallback(async ({ search, allProducts }) => {
		try {
			setLoading(true)
			setError(null)
			const products = getSearchProducts({ search, allProducts })
			setProductsSearch(products)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		// Limpia el estado de productos si es `null` o `undefined`
		productsSearch || setProductsSearch([])
	}, [])

	return { productsSearch, getProducts, loading }
}
