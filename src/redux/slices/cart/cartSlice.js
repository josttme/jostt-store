import { createSlice } from '@reduxjs/toolkit'

// Clave en el localStorage
const CART_STORAGE_KEY = 'store-cart'

// Función auxiliar para obtener del localStorage
const getCartFromLocalStorage = () => {
	const cartJSON = localStorage.getItem(CART_STORAGE_KEY)
	return cartJSON ? JSON.parse(cartJSON) : []
}

// Función auxiliar para guardar en el localStorage
const saveCartToLocalStorage = (cart) => {
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

// Estado inicial obtenido del localStorage
const initialState = {
	cart: getCartFromLocalStorage()
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addToCart: (state, action) => {
			const { product } = action.payload
			const { cart } = state

			// Verificar si el producto ya está en el carrito
			const existingProductIndex = cart.findIndex(
				(cartProduct) => cartProduct.id === product.id
			)

			if (existingProductIndex !== -1) {
				// Si el producto ya está en el carrito, incrementar su cantidad
				const updatedCart = [...cart]
				updatedCart[existingProductIndex].quantity += 1
				state.cart = updatedCart
				saveCartToLocalStorage(updatedCart)
			} else {
				// Si el producto no está en el carrito, agregarlo con cantidad 1
				const updatedCart = [...cart, { ...product, quantity: 1 }]
				state.cart = updatedCart
				saveCartToLocalStorage(updatedCart)
			}
		},

		removeFromCart: (state, action) => {
			const { product } = action.payload
			const { cart } = state

			// Filtrar el carrito para eliminar el producto
			const updatedCart = cart.filter(
				(cartProduct) => cartProduct.id !== product.id
			)

			state.cart = updatedCart
			saveCartToLocalStorage(updatedCart)
		},

		increaseQuantity: (state, action) => {
			const { product } = action.payload
			const { cart } = state

			// Actualizar la cantidad del producto en el carrito
			const updatedCart = cart.map((cartProduct) => {
				if (cartProduct.id === product.id) {
					return { ...cartProduct, quantity: cartProduct.quantity + 1 }
				}
				return cartProduct
			})

			state.cart = updatedCart
			saveCartToLocalStorage(updatedCart)
		},

		decreaseQuantity: (state, action) => {
			const { product } = action.payload
			const { cart } = state

			// Actualizar la cantidad del producto en el carrito
			const updatedCart = cart.map((cartProduct) => {
				if (cartProduct.id === product.id) {
					return {
						...cartProduct,
						quantity: cartProduct.quantity - 1
					}
				}
				return cartProduct
			})

			state.cart = updatedCart
			saveCartToLocalStorage(updatedCart)
		}
	}
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
	cartSlice.actions
