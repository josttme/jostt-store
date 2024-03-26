import { useCallback, useEffect, useState } from 'react'
import debounce from 'just-debounce-it'

export function useSearch({ products, isLoading, onSearch }) {
	const [errorMessage, setErrorMessage] = useState('')
	useEffect(() => {
		// Mostrar mensaje si array vacío y búsqueda válida
		products?.length === 0 && !isLoading
			? setErrorMessage('Product not found')
			: setErrorMessage('')
	}, [products])

	const debounceGetProducts = useCallback(
		debounce((newQuery) => {
			onSearch(newQuery)
		}, 300),
		[products]
	)

	const handleChange = (e) => {
		const newQuery = e.target.value
		if (newQuery.startsWith(' ')) return
		debounceGetProducts(newQuery)
	}

	return { handleChange, errorMessage }
}
