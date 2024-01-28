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
		favoritesOnCurrentUser,
		cartsOnCurrentUser
	} = useAuthContext()

	const handleLoginSubmit = (e) => {
		e.preventDefault()

		const newUser = Object.fromEntries(new FormData(e.target))
		const isUserCorrect = isExist('username', newUser, usersExisting)
		const isPasswordCorrect = isExist('password', newUser, usersExisting)

		const loggedUser = () => {
			const username = newUser.username
			setMessageError('')
			setUsername(username)
			e.target.reset()
			favoritesOnCurrentUser({ username, favorites })
			cartsOnCurrentUser({ username, cartItems })
		}
		isUserCorrect && isPasswordCorrect
			? loggedUser()
			: setMessageError('The user or password is incorrect')
	}
	return { handleLoginSubmit, messageError }
}
