import { useState } from 'react'
import { addUser } from '../../redux/slices/users/usersSlice'
import { setCurrentUser } from '../../redux/slices/sessionSlice'
import { removeAllCart, removeAllLikes } from '../../redux/slices'
import { isExist } from './authUtils'

export function useRegister(users, favorites, cartItems, dispatch) {
	const [messageError, setMessageError] = useState('')

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		const updateNewUser = Object.fromEntries(new FormData(e.target))
		const { username, email } = updateNewUser

		const isUserExist = isExist(users, 'username', username)
		const isEmailExist = isExist(users, 'email', email)

		const registeredUser = () => {
			const newUser = { ...updateNewUser, favorites, cartItems }
			setMessageError('')
			dispatch(addUser({ newUser }))
			dispatch(setCurrentUser({ username }))
			dispatch(removeAllLikes())
			dispatch(removeAllCart())
			e.target.reset()
		}
		isUserExist
			? setMessageError('The user already exists')
			: isEmailExist
				? setMessageError('The email is already in use')
				: registeredUser()
	}

	return { handleRegisterSubmit, messageError }
}
