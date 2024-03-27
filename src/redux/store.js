import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './api'
import { usersSlice, currentUser, cartSlice, likesSlice } from './slices'

export const store = configureStore({
	reducer: {
		storeUsers: usersSlice.reducer,
		storeCurrenUser: currentUser.reducer,
		storeCart: cartSlice.reducer,
		storeLikes: likesSlice.reducer,
		[storeApi.reducerPath]: storeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(storeApi.middleware)
})
