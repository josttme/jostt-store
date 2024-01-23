import { useEffect } from 'react'

export function useNavigation(navigate) {
	const navigateToProduct = (id) => {
		navigate(`/product/${id}`)
	}
	return { navigateToProduct }
}

export function useResetScroll(deps) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, deps)
}
