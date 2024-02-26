// Función para manejar la lista de productos favoritos
export function favoritesLoggedIn(init, action) {
	console.log('init ', init)
	const users = init.slice()
	console.log('ss', init)
	// **Validación de la acción**
	if (!action || !action.type) {
		console.error('Acción inválida: missing properties')
		return users
	}

	if (action.type === 'TOGGLE_FAVORITE_LOGGED_IN') {
		const indexUser = users?.findIndex(
			(user) => user.username === action.username
		)
		console.log('users', users)
		console.log('indexUser', indexUser)
		const userFavorites = users[indexUser]?.favorites
		console.log('userFavorites', userFavorites)
		const isFavorite = userFavorites?.some(
			(fav) => fav.id === action.product.id
		)
		console.log('fav', users[indexUser])
		if (isFavorite) {
			// ya existe, remover de favoritos
			const updatedFavorites = users[indexUser].favorites.filter(
				(fav) => fav.id !== action.product.id
			)
			const updatedUser = [
				{
					...users[indexUser],
					favorites: updatedFavorites
				}
			]
			console.log('users', users)
			console.log('updatedUser', updatedUser)
			return updatedUser
		} else {
			// no existe, agregar a favoritos
			const updatedFavorites = [...userFavorites, action.product]

			const updatedUser = {
				...users[indexUser],
				favorites: updatedFavorites
			}

			return users.map((user) => {
				if (user.username === action.username) {
					console.log(updatedUser)
					return updatedUser
				} else {
					return user
				}
			})
		}
	} else {
		// Si la acción no es 'TOGGLE_FAVORITE' No se hace ningún cambio
		return users
	}
}
