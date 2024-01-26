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

const currentUser = 'juan'
const users = [
	{ name: 'juan', lastName: 'elias', age: '22' },
	{ name: 'name2', lastName: 'lastname2', age: '23' },
	{ name: 'name3', lastName: 'lastname4', age: '25' }
]
const getUser = users.find((user) => user.name === currentUser)
getUser.city = 'New York'
getUser.childrens = '2'
console.log(getUser)
