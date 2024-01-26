import { PropTypes } from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context'
import { Link } from 'react-router-dom'
import { SvgRemove } from '../components/icons/SvgRemove'
import { useCheckout } from '../hooks/useCheckout'

export function Cart() {
	const { cartItems, quantityProducts } = useContext(ProductContext)
	const { handeCheckout } = useCheckout()

	const calculateCartTotalPrice = (cartItems) => {
		return cartItems.reduce((totalPrice, item) => {
			return totalPrice + item.price * item.quantity
		}, 0)
	}
	const total = calculateCartTotalPrice(cartItems)

	return (
		<section className="flex-grow pb-52 ">
			<div className="mx-auto max-w-3xl px-4  pt-8  sm:px-6 sm:py-12 lg:px-8">
				<section className="text-center">
					<h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
						{`Bag (${quantityProducts})`}
					</h1>
				</section>
				<div className="felx mt-8 flex-col">
					<ul className="space-y-4">
						{cartItems.map((product) => (
							<CartProduct key={product.id} {...product} />
						))}
					</ul>
				</div>
				<div className="mt-12 flex flex-col gap-4 border-gray-100">
					<span className="self-end text-xl">Total: {`$${total}`}</span>

					<div className="self-end text-center ">
						<button
							type="button"
							onClick={handeCheckout}
							className="text-md block rounded  bg-gray-700 px-5 py-3 text-gray-100 transition hover:bg-gray-600"
						>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export function CartProduct(product) {
	const [isLoading, setIsLoading] = useState(false)
	const { name, price, mainImage, quantity } = product
	const { removeFromCart, increaseQuantity, decreaseQuantity } =
		useContext(ProductContext)

	const [subtotal, setSubtotal] = useState(0)

	const decrease = () => decreaseQuantity(product)
	const increase = () => increaseQuantity(product)
	const removeProduct = () => removeFromCart(product)

	useEffect(() => {
		setSubtotal(price * quantity)
	}, [quantity])
	return (
		<li className="flex items-center gap-4">
			<Link
				to={`/product/${product.id}`}
				className="relative flex gap-4 rounded-md p-2 "
			>
				{!isLoading && (
					<div className=" absolute left-0 top-0 m-2 h-16 w-16 animate-pulse-fast rounded bg-gray-300" />
				)}
				<img
					src={mainImage}
					alt={name}
					width={100}
					height={100}
					className={`${
						!isLoading && 'opacity-0'
					} h-16 w-16 rounded object-cover`}
					onLoad={() => setIsLoading(true)}
				/>
				<div className="grid place-content-center">
					<h3 className="text-lg text-gray-900">{name}</h3>
					<span className="text-xl">{`$${price}`}</span>
				</div>
			</Link>

			<div className="flex flex-1 items-center justify-end gap-2">
				<div className="grid h-12 grid-cols-3  place-content-center rounded-md border border-gray-200">
					<button
						type="button"
						className="h-10 w-10  leading-10 text-gray-600 transition hover:opacity-75"
						onClick={decrease}
					>
						-
					</button>

					<span className="w-10 text-center leading-10">{quantity}</span>

					<button
						type="button"
						className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
						onClick={increase}
					>
						+
					</button>
				</div>
				<span className="w-28 px-4 text-center text-xl">${subtotal}</span>

				<button
					onClick={removeProduct}
					className="text-gray-600 transition hover:text-red-600"
				>
					<span className="sr-only">Remove item</span>
					<SvgRemove className="h-5 w-5 fill-none stroke-current" />
				</button>
			</div>
		</li>
	)
}
CartProduct.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	mainImage: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired
}
