import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export function useAuth() {
	const [usersExisting, updateUsers] = useLocalStorage('users_store')
	const [messageError, setMessageError] = useState('')

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		setMessageError('')

		const newUser = Object.fromEntries(new FormData(e.target))

		const isUserExist = isExist('username', newUser, usersExisting)

		const isEmailExist = isExist('email', newUser, usersExisting)

		isUserExist
			? setMessageError('The user already exists')
			: isEmailExist
				? setMessageError('The email is already in use')
				: updateUsers([...usersExisting, newUser])
	}

	return { handleRegisterSubmit, messageError }
}

const isExist = (property, newUser, usersExisting) =>
	usersExisting.some((user) => user[property] === newUser[property])
