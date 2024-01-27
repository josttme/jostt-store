import { useContext, useState } from 'react'
import { ProductContext } from '../context'
import { useUpdateCurrenUser } from './useUpdateCurrenUser'
export function useAuth() {
	const {
		usersExisting,
		updateUsers,
		setUsername,
		setProducts,
		setCartItems,
		cartItems,
		favorites
	} = useContext(ProductContext)
	const [messageError, setMessageError] = useState('')
	const { getFavoritesAndCartsOnCurrentUser } = useUpdateCurrenUser({
		usersExisting,
		updateUsers,
		setProducts,
		setCartItems
	})

	/********************************
	 ****** Register
	 ********************************/

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

	/********************************
	 ****** Login
	 ********************************/

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

	return { handleRegisterSubmit, handleLoginSubmit, messageError }
}

const isExist = (property, newUser, usersExisting) =>
	usersExisting.some((user) => user[property] === newUser[property])
