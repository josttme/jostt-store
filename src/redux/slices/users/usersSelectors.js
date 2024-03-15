import { createSelector } from '@reduxjs/toolkit'

export const selectUsers = (state) => state.users

export const selectUserByUsername = createSelector(
	selectUsers,
	(_, username) => username,
	(users, username) => {
		if (Array.isArray(users)) {
			return users.find((user) => user.username === username)
		}
		return undefined
	}
)

export const selectUserByEmail = createSelector(
	selectUsers,
	(_, email) => email,
	(users, email) => {
		if (Array.isArray(users)) {
			return users.find((user) => user.email === email)
		}
		return undefined
	}
)
