// Función para manejar la lista de productos favoritos
export function favoriteReducer(init, action) {
	console.log('ss', init)
	// **Validación de la acción**
	if (!action || !action.type) {
		console.error('Acción inválida: missing properties')
		return init
	}

	if (action.type === 'TOGGLE_FAVORITE') {
		// Si la acción es 'TOGGLE_FAVORITE':
		const isFavorite = init.some((item) => item.id === action.product.id)
		// Comprueba si el producto ya está en la lista de favoritos
		return isFavorite
			? init.filter((item) => item.id !== action.product.id)
			: [...init, action.product]
		// Si está en la lista, lo elimina
		// Si no, lo agrega al final
	} else {
		// Si la acción no es 'TOGGLE_FAVORITE' No se hace ningún cambio
		return init
	}
}
