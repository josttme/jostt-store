import useLocalStorage from './useLocalStorage'
import { useUpdateCurrenUser } from './useUpdateCurrenUser'

export function useToggleFavotites(key, usersExisting, username, updateUsers) {
	let FavoriteItemsCurrentUser
	if (usersExisting) {
		FavoriteItemsCurrentUser = usersExisting?.find(
			(user) => user?.username === username
		)?.favorites
	}
	const [products, setProducts] = useLocalStorage(key)
	const newFavoriteItems = FavoriteItemsCurrentUser || products
	const { getFavoritesAndCartsOnCurrentUser } = useUpdateCurrenUser({
		usersExisting,
		updateUsers,
		setProducts
	})
	const toggledFavorites = (e, product) => {
		e.stopPropagation()
		const isProductInList = newFavoriteItems.some(
			(item) => item.id === product.id
		)

		if (isProductInList) {
			// si ya existe, se eliminará de la lista
			const updatedProducts = newFavoriteItems.filter(
				(item) => item.id !== product.id
			)
			if (username) {
				getFavoritesAndCartsOnCurrentUser(
					username,
					null,
					null,
					null,
					null,
					updatedProducts
				)
			} else {
				setProducts(updatedProducts)
			}
		} else {
			// si no existe, se agregará a la lista
			if (username) {
				getFavoritesAndCartsOnCurrentUser(username, null, null, null, [
					...newFavoriteItems,
					product
				])
			} else {
				setProducts([...newFavoriteItems, product])
			}
		}
	}

	return [newFavoriteItems, toggledFavorites, setProducts]
}
