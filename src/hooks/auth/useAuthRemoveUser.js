import { useAuthContext } from './useAuthContext'

export function useAuthRemoveUser({ username }) {
	const { usersExisting, setUsername, updateUsers } = useAuthContext()

	const removeUser = () => {
		const users = usersExisting.slice()

		const removeUser = users.filter((user) => user.username !== username)
		console.log(username)
		updateUsers(removeUser)
		setUsername('')
	}

	return { removeUser }
}
