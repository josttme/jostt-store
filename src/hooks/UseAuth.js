import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export function UseAuth() {
	const [usersStorage, setUsersStorage] = useLocalStorage('users_store')
	const [messageError, setMessageError] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const user = Object.fromEntries(new FormData(e.target))

		const isUserList = usersStorage.some(
			(uStorage) => uStorage.username === user.username
		)
		const isEmailList = usersStorage.some(
			(uStorage) => uStorage.email === user.email
		)

		if (isUserList) {
			setMessageError('The user already exists')
		} else if (isEmailList) {
			setMessageError('The email is already in use')
		} else {
			setUsersStorage([...usersStorage, user])
		}
	}
	return { handleSubmit, messageError }
}
