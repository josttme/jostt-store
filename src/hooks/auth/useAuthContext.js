import { useContext, useState } from 'react'
import { ProductContext } from '../../context'
import { useUpdateCurrenUser } from '../useUpdateCurrenUser'
import { useAuthUtils } from './useAuthUtils'

export function useAuthContext() {
	const [messageError, setMessageError] = useState('')

	const {
		usersExisting,
		updateUsers,
		setUsername,
		setProducts,
		setCartItems,
		cartItems,
		favorites
	} = useContext(ProductContext)

	const { isExist } = useAuthUtils()

	const { getFavoritesAndCartsOnCurrentUser } = useUpdateCurrenUser({
		usersExisting,
		updateUsers,
		setProducts,
		setCartItems
	})

	return {
		isExist,
		usersExisting,
		cartItems,
		favorites,
		updateUsers,
		messageError,
		setUsername,
		setMessageError,
		getFavoritesAndCartsOnCurrentUser
	}
}
