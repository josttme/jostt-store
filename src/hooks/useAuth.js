import { useContext, useState } from 'react'
import { ProductContext } from '../context'

export function useAuth() {
	const { usersExisting, updateUsers, setUsername } = useContext(ProductContext)
	const [messageError, setMessageError] = useState('')

	/********************************
	 ****** Register
	 ********************************/

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		const newUser = Object.fromEntries(new FormData(e.target))

		const isUserExist = isExist('username', newUser, usersExisting)
		const isEmailExist = isExist('email', newUser, usersExisting)

		const registeredUser = () => {
			setMessageError('')
			updateUsers([...usersExisting, newUser])
			setUsername(newUser.username)
			e.target.reset()
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
		}
		isUserCorrect && isPasswordCorrect
			? loggedUser()
			: setMessageError('The user or password is incorrect')
	}

	return { handleRegisterSubmit, handleLoginSubmit, messageError }
}

const isExist = (property, newUser, usersExisting) =>
	usersExisting.some((user) => user[property] === newUser[property])
