import { PropTypes } from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context'
import { Link } from 'react-router-dom'

export function Cart() {
	const { cartItems, quantityProducts } = useContext(ProductContext)
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
						{`Carrito(${quantityProducts})`}
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
							className="text-md block rounded  bg-gray-700 px-5 py-3 text-gray-100 transition hover:bg-gray-600"
						>
							Continuar compra
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export function CartProduct(product) {
	const [isLoading, setIsLoading] = useState(false)
	const { title, price, image, quantity } = product
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
					src={image}
					alt={title}
					width={100}
					height={100}
					className={`${
						!isLoading && 'opacity-0'
					} h-16 w-16 rounded object-cover`}
					onLoad={() => setIsLoading(true)}
				/>
				<div className="grid place-content-center">
					<h3 className="text-lg text-gray-900">{title}</h3>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-4 w-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</button>
			</div>
		</li>
	)
}
CartProduct.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired
}
