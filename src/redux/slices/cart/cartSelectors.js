import { createSelector } from '@reduxjs/toolkit'

export const selectCartItems = (state) => state.storeCart.cart

export const selectTotalQuantity = createSelector(
	selectCartItems,
	(cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectTotalPrice = createSelector(selectCartItems, (cartItems) =>
	cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
)

export const selectProductSubtotal = createSelector(
	(state, productId) =>
		selectCartItems(state).find((item) => item.id === productId),
	(product) => (product ? product.price * product.quantity : 0)
)
