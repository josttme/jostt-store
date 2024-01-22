import { useEffect, useState } from 'react'

export function useSearch({ productsSearch }) {
	const [search, updateSearch] = useState('')
	const [errorMessage, setErrorMessage] = useState(null)
	useEffect(() => {
		// No mostrar mensaje si búsqueda vacía
		if (search.length === 0) {
			setErrorMessage('')
			return
		}

		// Mostrar mensaje si array vacío y búsqueda válida
		if (productsSearch.length === 0) {
			setErrorMessage('Producto no encontrado')
		} else {
			// Caso default no mostrar mensaje
			setErrorMessage('')
		}
	}, [productsSearch])

	return { search, updateSearch, errorMessage }
}
