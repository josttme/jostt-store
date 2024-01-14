import { useCallback, useRef, useState } from 'react'
import { searchProducts } from '../api'

export function useProductSearch({ search }) {
	// Almacena los productos encontrados
	const [productsSearch, setProductsSearch] = useState([])

	// Indica si la búsqueda está en curso
	const [loadingSearch, setLoadingSearch] = useState(false)

	// Almacena los mensajes de error relacionados con la búsqueda
	const [error, setError] = useState(null)

	// Almacena el valor de búsqueda anterior
	const previousSearch = useRef(search)

	// Memoriza la función de búsqueda
	const fetchProductSearch = useCallback(async ({ search }) => {
		// Evita realizar la búsqueda si el valor no ha cambiado
		if (search === previousSearch.current) return

		try {
			setLoadingSearch(true)
			setError(null)
			previousSearch.current = search

			// Realiza la búsqueda de productos
			const newProducts = searchProducts({ search })
			setProductsSearch(newProducts)
		} catch (e) {
			// Maneja errores durante la búsqueda
			setError(e.message)
		} finally {
			// Finaliza la carga, independientemente del resultado
			setLoadingSearch(false)
		}
	}, [])

	// Limpia el estado de productos si es `null` o `undefined`
	productsSearch || setProductsSearch([])

	return { productsSearch, fetchProductSearch, loadingSearch, error }
}
