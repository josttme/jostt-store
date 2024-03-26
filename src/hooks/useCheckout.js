import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentUserDetails } from '../redux/slices/users/usersSelectors'

export function useCheckout() {
	const { username } = useSelector(getCurrentUserDetails)

	const navigate = useNavigate()
	const handeCheckout = (e) => {
		e.preventDefault()

		if (!username) navigate('/login')
	}
	return { handeCheckout }
}
