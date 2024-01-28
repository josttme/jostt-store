export function useUpdateUserFavorites({
	usersExisting,
	updateUsers,
	setProducts
}) {
	const favoritesOnCurrentUser = ({
		username,
		newUpdateUsers,
		newFavorite,
		favorites,
		removeFavorite
	}) => {
		const users = newUpdateUsers?.some((user) => user.username === username)
			? newUpdateUsers.slice()
			: usersExisting.slice()

		const indexUser = users.findIndex((user) => user.username === username)
		const currenUser = users[indexUser]

		let updatedFavorites = []

		const existingItemsFavoritesMap = new Map(
			users[indexUser]?.favorites?.map((item) => {
				return [item.id, item]
			})
		)
		if (removeFavorite) {
			updatedFavorites = removeFavorite
		} else {
			const newFavorites = favorites || newFavorite
			newFavorites.forEach((item) => {
				existingItemsFavoritesMap.set(item.id, item)
			})
			updatedFavorites = Array.from(existingItemsFavoritesMap.values())
		}

		if (!currenUser?.favorites) currenUser.favorites = []

		currenUser.favorites = [...updatedFavorites]

		updateUsers(users)
		setProducts([])
	}
	return { favoritesOnCurrentUser }
}
