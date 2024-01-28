export function useAuthUtils() {
	const isExist = (property, newUser, usersExisting) =>
		usersExisting.some((user) => user[property] === newUser[property])
	return { isExist }
}
