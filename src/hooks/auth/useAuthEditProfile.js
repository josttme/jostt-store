import { useAuthContext } from './useAuthContext'

export function useAuthEditProfile({ username }) {
	const {
		isExist,
		usersExisting,
		setMessageError,
		messageError,
		setUsername,
		updateUsers
	} = useAuthContext()

	const handleEditProfile = (e) => {
		e.preventDefault()

		const users = usersExisting.slice()
		const newUserData = Object.fromEntries(new FormData(e.target))
		const isUserExist = isExist('username', newUserData, usersExisting)
		const isEmailExist = isExist('email', newUserData, usersExisting)
		const indexUser = usersExisting.findIndex(
			(user) => user.username === username
		)
		const currenUser = users[indexUser]
		currenUser.username = newUserData.username
		currenUser.email = newUserData.email
		currenUser.password = newUserData.password

		const editUserData = () => {
			const username = newUserData.username
			setMessageError('')
			updateUsers(users)
			setUsername(username)
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
