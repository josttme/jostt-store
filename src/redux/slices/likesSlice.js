import { createSlice } from '@reduxjs/toolkit'

// Clave en el localStorage para almacenar los likes
const LIKES_STORAGE_KEY = 'product-likes'

// Función auxiliar para obtener los likes del localStorage
const getLikesFromStorage = () => {
	const likesJSON = localStorage.getItem(LIKES_STORAGE_KEY)
	return likesJSON ? JSON.parse(likesJSON) : []
}

// Estado inicial obtenido del localStorage
const initialState = {
	likes: getLikesFromStorage()
}

export const likesSlice = createSlice({
	name: 'likes',
	initialState,

	reducers: {
		// Reducer para alternar el estado de like de un producto
		toggleLike: (state, action) => {
			const { product } = action.payload
			const { likes } = state

			// Verificar si el producto ya está en la lista de likes
			const isLiked = likes.some(
				(likedProduct) => likedProduct.id === product.id
			)

			// Actualizar la lista de likes
			const updatedLikes = isLiked
				? likes.filter((likedProduct) => likedProduct.id !== product.id) // Eliminar el producto de la lista
				: [...likes, product] // Agregar el producto a la lista

			// Actualizar el estado y almacenar los likes en el localStorage
			state.likes = updatedLikes
			localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updatedLikes))
		}
	}
})

// Exportar la acción toggleLike
export const { toggleLike } = likesSlice.actions
