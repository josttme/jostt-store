import { useSelector } from 'react-redux'
import { getCurrentUserDetails } from '../redux/slices/users/usersSelectors'
import { selectLikes } from '../redux/slices/likesSelectors'

export const useGetFavorites = () => {
	const username = useSelector(getCurrentUserDetails)
	const likes = useSelector(selectLikes)

	if (username) return username.favorites

	return likes
}
