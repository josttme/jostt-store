import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function usePagination({ allProducts, productsSearch }) {
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(9)

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
		const currentPosts = allProducts?.slice(firstPostIndex, lastPostIndex)
		let products

		productsSearch?.length
			? (products = productsSearch)
			: (products = currentPosts)
		return products
	}, [productsSearch, currentPage, allProducts])
	return { products, postsPerPage, setCurrentPage, currentPage }
}
