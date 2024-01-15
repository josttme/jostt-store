import { useCallback, useEffect, useRef, useState } from 'react'
import { getProducts, searchProducts } from '../api'

export function useProductSearch() {
	const [search, setSearch] = useState('')
	const [errorMessage, setErrorMessage] = useState(' ')
	// Almacena los productos encontrados
	const [productsSearch, setProductsSearch] = useState([])

	// Indica si la búsqueda está en curso
	const [loadingSearch, setLoadingSearch] = useState(false)

	// Almacena los mensajes de error relacionados con la búsqueda

	const [allProducts, setAllProducts] = useState([])

	// Almacena el valor de búsqueda anterior
	const previousSearch = useRef(search)

	useEffect(() => {
		const { products } = getProducts()
		if (!allProducts.length) {
			setAllProducts(products)
		}
	}, [])

	const fetchProductSearch = useCallback(async ({ search }) => {
		// Evita realizar la búsqueda si el valor no ha cambiado
		if (search === previousSearch.current) return

		try {
			setLoadingSearch(true)
			previousSearch.current = search

			// Realiza la búsqueda de productos y espera la resolución
			const newProducts = await searchProducts({ search })
			return setProductsSearch(newProducts)
		} catch (e) {
			// Maneja errores durante la búsqueda
			console.error(e.message)
			throw e // Re-lanza el error para que pueda ser capturado externamente
		} finally {
			// Finaliza la carga, independientemente del resultado
			setLoadingSearch(false)
		}
	}, [])

	useEffect(() => {
		const updateErrorMessage = async () => {
			try {
				// Llama a la función asíncrona fetchProductSearch y espera su resolución
				await fetchProductSearch({ search })

				// No mostrar mensaje si búsqueda vacía o menos de 2 caracteres
				if (search.length === 0 || search.length < 2) {
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
			} catch (error) {
				// Maneja errores capturados durante la búsqueda
				console.error('Error durante la búsqueda:', error.message)
				setErrorMessage('Error durante la búsqueda')
			}
		}
		// Llama a la función asíncrona updateErrorMessage
		updateErrorMessage()
	}, [search, productsSearch, fetchProductSearch])

	// Limpia el estado de productos si es `null` o `undefined`
	productsSearch || setProductsSearch([])

	return {
		productsSearch,
		fetchProductSearch,
		loadingSearch,
		allProducts,
		setSearch,
		search,
		errorMessage
	}
}
