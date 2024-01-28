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
		getFavoritesAndCartsOnCurrentUser
	} = useAuthContext()

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		const newUser = Object.fromEntries(new FormData(e.target))
		const isUserExist = isExist('username', newUser, usersExisting)
		const isEmailExist = isExist('email', newUser, usersExisting)
		const newUpdateUsers = [...usersExisting, newUser]

		const registeredUser = () => {
			setMessageError('')
			updateUsers(newUpdateUsers)
			setUsername(newUser.username)
			e.target.reset()
			getFavoritesAndCartsOnCurrentUser(
				newUser.username,
				newUpdateUsers,
				cartItems,
				null,
				favorites
			)
		}

		isUserExist
			? setMessageError('The user already exists')
			: isEmailExist
				? setMessageError('The email is already in use')
				: registeredUser()
	}

	return { handleRegisterSubmit, messageError }
}
