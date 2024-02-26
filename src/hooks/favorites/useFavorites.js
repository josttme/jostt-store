import { useEffect, useReducer } from 'react'
import useLocalStorage from '../useLocalStorage.js'
import { favoriteReducer } from './favoritesReducer.js'
import { favoritesLoggedIn } from './favoritesLoggedIn.js'

export function useFavorites(username, usersExisting, updateUsers) {
	/* 	const [user, setuser] = useState('') */

	// Recupera la lista de favoritos desde el LocalStorage
	const [favStorage, setFavStorage] = useLocalStorage('redu_favorites')

	const [favorites, dispatchFav] = useReducer(favoriteReducer, favStorage)
	const [favoritesLogged, dispatchLog] = useReducer(
		favoritesLoggedIn,
		usersExisting
	)

	// Efecto para guardar los cambios en el LocalStorage
	useEffect(() => {
		setFavStorage(favorites)
	}, [favorites])

	useEffect(() => {
		updateUsers(favoritesLogged)
	}, [favoritesLogged])

	// Función para alternar el estado favorito de un producto
	/* const toggleFavorite = (product) => {
		? dispatch({ type: 'TOGGLE_FAVORITE_LOGGED_IN', product, username })
		dispatch({ type: 'TOGGLE_FAVORITE', product })
	} */
	const addFavoriteLoggedIn = (product) => {
		return {
			type: 'TOGGLE_FAVORITE_LOGGED_IN',
			product,
			username
		}
	}

	const addFavoriteLoggedOut = (product) => {
		return {
			type: 'TOGGLE_FAVORITE',
			product
		}
	}

	const toggleFavorite = (product) => {
		if (username) {
			dispatchLog(addFavoriteLoggedIn(product, username))
		} else {
			dispatchFav(addFavoriteLoggedOut(product))
		}
	}

	return {
		favorites: favStorage,
		toggleFavorite
	}
}
