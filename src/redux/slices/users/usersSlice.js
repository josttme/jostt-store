import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const USERS_STORAGE_KEY = 'store-users'

const getUsersFromStorage = () => {
	const usersJSON = localStorage.getItem(USERS_STORAGE_KEY)
	return usersJSON ? JSON.parse(usersJSON) : []
}

const initialState = {
	users: getUsersFromStorage()
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,

	reducers: {
		addUser: (state, action) => {
			const { newUser } = action.payload

			state.users = [...state.users, newUser]
			localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users))
		},
		removeUser: (state, action) => {
			const { username } = action.payload
			console.log(username)
			state.users = state.users.filter((user) => user.username !== username)
			localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users))
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateUserFavorites.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(addToUserCart.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(removeFromUserCart.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(increaseUserCartQuantity.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(decreaseUserCartQuantity.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(removeAllUserCart.fulfilled, (state, action) => {
				state.users = action.payload
			})
	}
})

export const updateUserFavorites = createAsyncThunk(
	'users/updateUserFavorites',
	async ({ username, product }, { getState }) => {
		const state = getState()
		const user = state.storeUsers.users.find((u) => u.username === username)

		if (!user) throw new Error(`User ${username} not found`)

		const updatedFavorites = user.favorites.some((fav) => fav.id === product.id)
			? user.favorites.filter((fav) => fav.id !== product.id)
			: [...user.favorites, product]

		const updatedUsers = state.storeUsers.users.map((u) =>
			u.username === username ? { ...u, favorites: updatedFavorites } : u
		)

		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers))

		return updatedUsers
	}
)

export const addToUserCart = createAsyncThunk(
	'users/addToUserCart',
	async ({ username, product }, { getState }) => {
		// Lógica para agregar el producto al carrito del usuario
	}
)

export const removeFromUserCart = createAsyncThunk(
	'users/removeFromUserCart',
	async ({ username, product }, { getState }) => {
		// Lógica para eliminar el producto del carrito del usuario
		const state = getState()
		const user = state.storeUsers.users.find((u) => u.username === username)
		const updatedCart = user.cartItems.filter(
			(cartProduct) => cartProduct.id !== product.id
		)
		const updatedUsers = state.storeUsers.users.map((u) =>
			u.username === username ? { ...u, cartItems: updatedCart } : u
		)
		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers))
		return updatedUsers
	}
)

export const increaseUserCartQuantity = createAsyncThunk(
	'users/increaseUserCartQuantity',
	async ({ username, product }, { getState }) => {
		// Lógica para aumentar la cantidad del producto en el carrito del usuario
		const state = getState()
		const user = state.storeUsers.users.find((u) => u.username === username)
		const updatedCart = user.cartItems.map((cartProduct) => {
			if (cartProduct.id === product.id) {
				return { ...cartProduct, quantity: cartProduct.quantity + 1 }
			}
			return cartProduct
		})
		const updatedUsers = state.storeUsers.users.map((u) =>
			u.username === username ? { ...u, cartItems: updatedCart } : u
		)
		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers))
		return updatedUsers
	}
)

export const decreaseUserCartQuantity = createAsyncThunk(
	'users/decreaseUserCartQuantity',
	async ({ username, product }, { getState }) => {
		// Lógica para disminuir la cantidad del producto en el carrito del usuario
		const state = getState()
		const user = state.storeUsers.users.find((u) => u.username === username)
		const updatedCart = user.cartItems.map((cartProduct) => {
			if (cartProduct.id === product.id) {
				return { ...cartProduct, quantity: cartProduct.quantity - 1 }
			}
			return cartProduct
		})
		const updatedUsers = state.storeUsers.users.map((u) =>
			u.username === username ? { ...u, cartItems: updatedCart } : u
		)
		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers))
		return updatedUsers
	}
)

export const removeAllUserCart = createAsyncThunk(
	'users/removeAllUserCart',
	async ({ username }, { getState }) => {
		// Lógica para eliminar todos los productos del carrito del usuario
	}
)

export const { addUser, removeUser } = usersSlice.actions
