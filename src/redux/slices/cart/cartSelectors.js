import { createSelector } from '@reduxjs/toolkit'

export const selectCartItems = (state) => state.storeCart.cart

export const selectTotalQuantity = createSelector(
	selectCartItems,
	(cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)
