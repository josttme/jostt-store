import { createSlice } from '@reduxjs/toolkit'
import { selectUserByUsername, selectUserByEmail } from './usersSelectors'

const USERS_STORAGE_KEY = 'store-users'

const getUsersFromStorage = () => {
	const usersJSON = localStorage.getItem(USERS_STORAGE_KEY)
	return usersJSON ? JSON.parse(usersJSON) : []
}

const initialState = {
	users: getUsersFromStorage(),
	error: null
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,

	reducers: {
		addUser: (state, action) => {
			const { newUser } = action.payload
			const { users } = state
			const isUserExist = selectUserByUsername(state, newUser.username)
			const isEmailExist = selectUserByEmail(state, newUser.email)

			if (isUserExist) {
				state.error = 'The user already exists'
			} else if (isEmailExist) {
				state.error = 'The email is already in use'
			} else {
				state.users = [...users, newUser]
				localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users))
				state.error = null
			}
		}
	}
})

export const { addUser } = usersSlice.actions
