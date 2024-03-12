import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './api'
import { likesSlice } from './slices/likesSlice'

export const store = configureStore({
	reducer: {
		storeLikes: likesSlice.reducer,
		[storeApi.reducerPath]: storeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(storeApi.middleware)
})
