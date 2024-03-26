export function isExist(array, field, value) {
	return array.some((u) => u[field] === value)
}
