import { useState } from 'react'
import { setCurrentUser } from '../../redux/slices/sessionSlice'
import { loginUser, removeAllCart, removeAllLikes } from '../../redux/slices'
import { isExist } from './authUtils'

export function useAuthLogin(users, favorites, cartItems, dispatch) {
	const [messageError, setMessageError] = useState('')

	// Función para actualizar un array de objetos.
	function updateUserArray(existingArray, newArray) {
		return newArray.length > 0
			? [
					...existingArray.filter(
						(item) => !newArray.find((newItem) => newItem.id === item.id)
					),
					...newArray
				]
			: existingArray
	}

	// Función para actualizar los favoritos y el carrito del usuario.
	function updateUserFavCart(users, user, favorites, cartItems) {
		// Encontrar el usuario en el array de usuarios
		const existingUser = users.find((u) => u.username === user.username)

		// Actualizar los favoritos
		const updatedFavorites = updateUserArray(existingUser.favorites, favorites)

		// Actualizar el carrito
		const updatedCartItems = updateUserArray(existingUser.cartItems, cartItems)

		// Crear un nuevo objeto de usuario con los datos actualizados
		const updatedUser = {
			...existingUser,
			favorites: updatedFavorites,
			cartItems: updatedCartItems
		}

		return updatedUser
	}

	// Función para manejar el submit del formulario de inicio de sesión.
	const handleLoginSubmit = (e) => {
		e.preventDefault()

		const user = Object.fromEntries(new FormData(e.target))
		const { username, email, password } = user

		const isUserExist = isExist('username', username)
		const isEmailExist = isExist('email', email)
		const isPasswordExist = isExist('password', password)

		const loginedUser = () => {
			const updateUser = updateUserFavCart(users, user, favorites, cartItems)

			setMessageError('')
			dispatch(loginUser({ updateUser }))
			dispatch(setCurrentUser({ username }))
			dispatch(removeAllLikes())
			dispatch(removeAllCart())
			e.target.reset()
		}

		;(isUserExist || isEmailExist) && isPasswordExist
			? loginedUser()
			: setMessageError('The username or password is incorrect')
	}

	return { handleLoginSubmit, messageError, setMessageError }
}
