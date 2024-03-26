import { useDispatch, useSelector } from 'react-redux'
import { toggleLike, updateUserFavorites } from '../redux/slices'

export const useToggleFavorite = () => {
	const dispatch = useDispatch()
	const username = useSelector((state) => state.storeCurrenUser.currentUser)

	const toggleFavorite = ({ product }) => {
		if (username) {
			// Si hay un usuario autenticado, actualiza los favoritos del usuario
			dispatch(updateUserFavorites({ username, product }))
		} else {
			// Si no hay usuario autenticado, actualiza el slice de likes
			dispatch(toggleLike({ product }))
		}
	}

	return toggleFavorite
}
