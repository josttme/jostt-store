import { useContext, useState } from 'react'
import { ProductContext } from '@context'
import { useAuthUtils } from './useAuthUtils'
import { useUpdateUserFavorites } from '../user/useUpdateUserFavorites'
import { useUpdateUserCart } from '../user/useUpdateUserCart'

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

	const { favoritesOnCurrentUser } = useUpdateUserFavorites({
		usersExisting,
		updateUsers,
		setProducts
	})
	const { cartsOnCurrentUser } = useUpdateUserCart({
		usersExisting,
		updateUsers,
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
		favoritesOnCurrentUser,
		cartsOnCurrentUser
	}
}
