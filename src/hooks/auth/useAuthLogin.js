import { useAuthContext } from './useAuthContext'

export function useAuthLogin() {
	const {
		isExist,
		usersExisting,
		cartItems,
		favorites,
		setUsername,
		setMessageError,
		messageError,
		getFavoritesAndCartsOnCurrentUser
	} = useAuthContext()

	const handleLoginSubmit = (e) => {
		e.preventDefault()

		const newUser = Object.fromEntries(new FormData(e.target))
		const isUserCorrect = isExist('username', newUser, usersExisting)
		const isPasswordCorrect = isExist('password', newUser, usersExisting)

		const loggedUser = () => {
			setMessageError('')
			setUsername(newUser.username)
			e.target.reset()
			getFavoritesAndCartsOnCurrentUser(
				newUser.username,
				null,
				cartItems,
				null,
				favorites
			)
		}
		isUserCorrect && isPasswordCorrect
			? loggedUser()
			: setMessageError('The user or password is incorrect')
	}
	return { handleLoginSubmit, messageError }
}
