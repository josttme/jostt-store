import { useAuthContext } from './useAuthContext'

export function useAuthRegister() {
	const {
		isExist,
		usersExisting,
		updateUsers,
		cartItems,
		favorites,
		setUsername,
		setMessageError,
		messageError,
		favoritesOnCurrentUser,
		cartsOnCurrentUser
	} = useAuthContext()

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		const newUser = Object.fromEntries(new FormData(e.target))
		const isUserExist = isExist('username', newUser, usersExisting)
		const isEmailExist = isExist('email', newUser, usersExisting)
		const newUpdateUsers = [...usersExisting, newUser]

		const registeredUser = () => {
			const username = newUser.username
			setMessageError('')
			updateUsers(newUpdateUsers)
			setUsername(username)
			e.target.reset()
			favoritesOnCurrentUser({ username, newUpdateUsers, favorites })
			cartsOnCurrentUser({ username, newUpdateUsers, cartItems })
		}

		isUserExist
			? setMessageError('The user already exists')
			: isEmailExist
				? setMessageError('The email is already in use')
				: registeredUser()
	}

	return { handleRegisterSubmit, messageError }
}
