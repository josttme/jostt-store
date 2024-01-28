export function useUpdateUserCart({
	usersExisting,
	updateUsers,
	setCartItems
}) {
	const cartsOnCurrentUser = ({
		username,
		newUpdateUsers,
		newCart,
		cartItems: carts,
		removeCart
	}) => {
		const users = newUpdateUsers?.some((user) => user.username === username)
			? newUpdateUsers.slice()
			: usersExisting.slice()

		const indexUser = users.findIndex((user) => user.username === username)
		const currenUser = users[indexUser]

		let updatedCart = []

		const existingCartItemsMap = new Map(
			users[indexUser]?.cartItems?.map((item) => {
				return [item.id, item]
			})
		)

		if (removeCart) {
			updatedCart = removeCart
		} else {
			const newCarts = carts || newCart
			newCarts.forEach((newItem) => {
				existingCartItemsMap.set(newItem.id, newItem)
			})
			updatedCart = Array.from(existingCartItemsMap.values())
		}
		if (!currenUser?.cartItems) {
			currenUser.cartItems = []
		}
		currenUser.cartItems = [...updatedCart]
		updateUsers(users)
		setCartItems([])
	}
	return { cartsOnCurrentUser }
}
