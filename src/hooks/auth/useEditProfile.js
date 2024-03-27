import { useState } from 'react'
import { isExist } from './authUtils'
import { setCurrentUser, editUser } from '../../redux/slices'

export function useAuthEditProfile(users, currentUser, dispatch) {
	const [messageError, setMessageError] = useState('')

	const handleEditProfile = (e) => {
		e.preventDefault()

		const newUserData = Object.fromEntries(new FormData(e.target))
		const { username, email, password } = newUserData

		const isUserExist = isExist(users, 'username', username)
		const isEmailExist = isExist(users, 'email', email)

		const updateUserData = (users, currentUser) => {
			const user = users.find((u) => u.username === currentUser)
			return { ...user, username, email, password }
		}
		const editUserData = () => {
			const updateUser = updateUserData(users, currentUser)
			setMessageError('')
			dispatch(setCurrentUser({ username }))
			dispatch(editUser({ updateUser, currentUser }))
			e.target.reset()
		}
		isUserExist
			? setMessageError('The user already exists')
			: isEmailExist
				? setMessageError('The email is already in use')
				: editUserData()
	}
	return { handleEditProfile, messageError }
}
