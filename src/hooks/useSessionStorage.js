import { useState, useEffect } from 'react'

export function useSessionStorage(key) {
	const [state, setState] = useState(() => {
		const stored = sessionStorage.getItem(key)
		return stored ? JSON.parse(stored) : ''
	})

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}
