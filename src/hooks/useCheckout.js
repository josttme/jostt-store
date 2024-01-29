import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../context'

export function useCheckout() {
	const { username, setErrorCheckout } = useContext(ProductContext)

	const navigate = useNavigate()
	const handeCheckout = (e) => {
		e.preventDefault()

		if (!username) {
			navigate('/login')
			setErrorCheckout('Please log in to complete your checkout')
		}
	}
	return { handeCheckout }
}
