import { useEffect, useRef, useState } from 'react'

export function useMessageSearch() {
	const [search, setSearch] = useState('')
	const [error, setError] = useState('')

	const prevSearch = useRef('')

	useEffect(() => {
		// Evita ejecutar la lógica si el valor de búsqueda no ha cambiado
		if (prevSearch.current === search) return

		prevSearch.current = search

		if (!search) {
			setError('No se puede buscar un producto vacío')
		} else if (search.match(/^\d+$/)) {
			setError('No se puede buscar un producto con números')
		} else if (search.length < 3) {
			setError('No se puede buscar un producto con menos de 3 caracteres')
		} else {
			setError('')
		}
	}, [search])

	return [search, setSearch, error]
}
