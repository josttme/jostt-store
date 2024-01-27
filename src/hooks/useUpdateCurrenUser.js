/* import { useContext } from 'react'
import { ProductContext } from '../context' */

export function useUpdateCurrenUser({
	usersExisting,
	updateUsers,
	setCartItems,
	setProducts
}) {
	/* 	const {
		cartItems: newCatItems,

	} = useContext(ProductContext) */

	const getFavoritesAndCartsOnCurrentUser = (
		username,
		newUpdateUsers,
		newCatItemsCurrentUser,
		removeItems,
		newFavoriteItemsCurrentUser,
		removeFavorite
	) => {
		/* 	const newCatItems = [] */
		const allUsers = newUpdateUsers?.some((user) => user.username === username)
			? newUpdateUsers.slice()
			: usersExisting.slice()

		const indexUser = allUsers.findIndex((user) => user.username === username)
		/* 	let getUser
		const isExistUser = allUsers.find((user) => user.username === username) */

		/* isExistUser
			? (getUser = isExistUser)
			: (getUser = newUpdateUsers.find((user) => user.username === username)) */

		const user = allUsers[indexUser]
		if (newFavoriteItemsCurrentUser === undefined) {
			let updatedItems
			const existingItemsMap = new Map(
				allUsers[indexUser]?.cartItems?.map((item) => {
					return [item.id, item]
				})
			)
			/* 		if (newCatItems?.legth === 0) {
			newCatItems?.forEach((newItem) => {
				existingItemsMap.set(newItem.id, newItem)
				updatedItems = Array.from(existingItemsMap.values())
			})
		} else { */
			/* if (newCatItemsCurrentUser) {
				console.log(newCatItemsCurrentUser)
			} else {
			} */

			if (!removeItems) {
				newCatItemsCurrentUser.forEach((newItem) => {
					existingItemsMap.set(newItem.id, newItem)
				})
				updatedItems = Array.from(existingItemsMap.values())
			} else {
				updatedItems = removeItems
			}
			/* 	} */

			/* 		const updateUser = {
			...getUser,
			cartItems: [...newCatItems],
			favorites: [...favorites]
		} 
		console.log(updateUser) 
				console.log(allUsers)
		console.log(allUsers[indexUser]?.cartItems)
		console.log(newCatItems) */

			if (!user?.cartItems) {
				user.cartItems = []
			}
			user.cartItems = [...updatedItems]
			updateUsers(allUsers)
			setCartItems([])

			/*
		allUsers.splice(indexUser, 1, updateUser)
		updateUsers(allUsers) */
		} else {
			/********************************
			 ****** Update Favorites
			 ********************************/
			console.log(newFavoriteItemsCurrentUser)
			let updatedFavorites
			const existingItemsFavoritesMap = new Map(
				allUsers[indexUser]?.favorites?.map((item) => {
					return [item.id, item]
				})
			)
			if (!removeFavorite) {
				newFavoriteItemsCurrentUser.forEach((item) => {
					existingItemsFavoritesMap.set(item.id, item)
				})
				updatedFavorites = Array.from(existingItemsFavoritesMap.values())
			} else {
				console.log('object')
				updatedFavorites = removeFavorite
			}

			if (!user?.favorites) {
				user.favorites = []
			}
			user.favorites = [...updatedFavorites]
			/* 		} */
			updateUsers(allUsers)
			setProducts([])
		}
	}
	return { getFavoritesAndCartsOnCurrentUser }
}
/* {
    "username": "usuario7",
    "email": "usuario7@usuario.com",
    "password": "usuario7",
    "cartItems": [
        {
            "id": "6",
            // demas datos del item
        },
        {
            "id": "1",
             // demas datos del item
        },
        {
            "id": "22",
             // demas datos del item
        },
        {
            "id": "14",
             // demas datos del item
        },
        {
            "id": "3",
            // demas datos del item
        }
    ]
} */
