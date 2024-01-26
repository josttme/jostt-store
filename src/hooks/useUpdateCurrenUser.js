import { useContext } from 'react'
import { ProductContext } from '../context'

export function useUpdateCurrenUser() {
	const {
		usersExisting,
		cartItems,
		favorites,
		updateUsers,
		setProducts,
		setCartItems
	} = useContext(ProductContext)
	const getFavoritesAndCartsOnCurrentUser = (username, newUpdateUsers) => {
		const allUsers = usersExisting.slice()
		const indexUser = allUsers.findIndex((user) => user.username === username)
		let getUser
		const isExistUser = allUsers.find((user) => user.username === username)

		isExistUser
			? (getUser = isExistUser)
			: (getUser = newUpdateUsers.find((user) => user.username === username))

		const updateUser = {
			...getUser,
			cartItems: [...cartItems],
			favorites: [...favorites]
		}

		allUsers.splice(indexUser, 1, updateUser)
		console.log('hola')
		updateUsers(allUsers)
		setProducts([])
		setCartItems([])
	}
	return { getFavoritesAndCartsOnCurrentUser }
}
