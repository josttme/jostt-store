import { createSlice } from '@reduxjs/toolkit'

const SESSION_STORAGE_KEY = 'currentUser'

const getSessionUserFromStorage = () => {
	const sessionUser = sessionStorage.getItem(SESSION_STORAGE_KEY)
	return sessionUser ? JSON.parse(sessionUser) : ''
}

const initialState = {
	currentUser: getSessionUserFromStorage()
}

export const currentUser = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			const { username } = action.payload
			state.currentUser = username
			sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(username))
		},
		clearCurrentUser: (state) => {
			state.currentUser = null
			sessionStorage.removeItem(SESSION_STORAGE_KEY)
		}
	}
})

export const { setCurrentUser, clearCurrentUser } = currentUser.actions
