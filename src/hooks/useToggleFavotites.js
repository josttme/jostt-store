import useLocalStorage from './useLocalStorage'
import { useUpdateUserFavorites } from './user/useUpdateUserFavorites'

export function useToggleFavotites(key, usersExisting, username, updateUsers) {
	let FavoriteItemsCurrentUser
	if (usersExisting) {
		FavoriteItemsCurrentUser = usersExisting?.find(
			(user) => user?.username === username
		)?.favorites
	}
	const [products, setProducts] = useLocalStorage(key)
	const favorites = FavoriteItemsCurrentUser || products
	const { favoritesOnCurrentUser } = useUpdateUserFavorites({
		usersExisting,
		updateUsers,
		setProducts
	})
	const toggledFavorites = (e, product) => {
		e.stopPropagation()
		const isProductInList = favorites.some((item) => item.id === product.id)

		if (isProductInList) {
			// si ya existe, se eliminará de la lista
			const removeFavorite = favorites.filter((item) => item.id !== product.id)
			username
				? favoritesOnCurrentUser({ username, removeFavorite })
				: setProducts(removeFavorite)
		} else {
			// si no existe, se agregará a la lista
			const newFavorite = [...favorites, product]

			username
				? favoritesOnCurrentUser({ username, newFavorite })
				: setProducts(newFavorite)
		}
	}

	return [favorites, toggledFavorites, setProducts]
}
