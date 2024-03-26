import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const POSTS_PER_PAGE = 9

export function usePagination({ products: allProducts }) {
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		const totalItems = allProducts?.length || 0
		const totalPages = Math.ceil(totalItems / POSTS_PER_PAGE)
		setTotalPages(totalPages)
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

	const onPageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const products = useMemo(() => {
		if (!allProducts) return

		const lastIndex = numeroPagina * POSTS_PER_PAGE
		const firstIndex = lastIndex - POSTS_PER_PAGE

		return { firstIndex, lastIndex }
	}, [currentPage])

	const { firstIndex, lastIndex } = products

	return {
		totalPages,
		firstIndex,
		lastIndex,
		onPageChange,
		currentPage
	}
}
