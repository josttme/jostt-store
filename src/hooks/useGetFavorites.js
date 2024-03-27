import { useSelector } from 'react-redux'
import { getCurrentUserDetails, selectLikes } from '../redux/slices'

export const useGetFavorites = () => {
	const username = useSelector(getCurrentUserDetails)
	const likes = useSelector(selectLikes)

	if (username) return username.favorites

	return likes
}
