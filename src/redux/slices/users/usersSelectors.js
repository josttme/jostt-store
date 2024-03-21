import { createSelector } from '@reduxjs/toolkit'

// Selector para obtener el usuario actual del estado
// const getCurrentUser = (state) => state.user.currentUser
const getCurrentUser = (state) => state.storeCurrenUser.currentUser
// Selector para obtener la lista de usuarios del estado
// const getUsers = (state) => state.users.allUsers
const getUsers = (state) => state.storeUsers.users

// Función utilitaria para encontrar un usuario por su nombre de usuario
const findUserByUsername = (users, username) => {
	return users.find((user) => user.username === username)
}

// Selector memoizado para obtener los detalles del usuario actual
export const getCurrentUserDetails = createSelector(
	[getCurrentUser, getUsers], // Selectores de los que depende
	(currentUser, users) => {
		// Si no hay un usuario actual, devuelve un objeto vacío
		if (!currentUser) return ''
		// Encuentra el usuario actual en la lista de usuarios
		const user = findUserByUsername(users, currentUser)

		// Si no se encuentra el usuario actual, devuelve un objeto vacío
		if (!user) return ''

		// Devuelve un objeto con los detalles del usuario actual
		return {
			username: user.username,
			email: user.email,
			favorites: user.favorites,
			cartItems: user.cartItems
		}
	}
)

export const getSumProductSubtotal = createSelector((currentUser, users) => {
	// Si no hay un usuario actual, devuelve un objeto vacío
	if (!currentUser) return ''
	// Encuentra el usuario actual en la lista de usuarios
	const user = findUserByUsername(users, currentUser)
	console.log(user)
	/* selectCartItems(state).find((item) => item.id === productId),
			(product) => (product ? product.price * product.quantity : 0) */
	return users
})
