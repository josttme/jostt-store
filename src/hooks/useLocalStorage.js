import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue = []) => {
	// Obtiene el valor almacenado en el localStorage o devuelve un array vacío si no hay valor
	const [storedValue, setStoredValue] = useState(() => {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : initialValue
	})

	const setValue = (value) => {
		setStoredValue(value)
		localStorage.setItem(key, JSON.stringify(value))
	}

	useEffect(() => {
		// Actualiza el estado si la clave cambia, pero usa el valor almacenado si no
		const item = localStorage.getItem(key)
		if (item !== null) {
			setStoredValue(JSON.parse(item))
		}
	}, [key])

	return [storedValue, setValue]
}

export default useLocalStorage
