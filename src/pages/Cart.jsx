import { PropTypes } from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '@context'
import { Link, useLocation } from 'react-router-dom'
import { SvgRemove } from '@components/icons/SvgRemove'
import { useCheckout } from '@hooks/useCheckout'
import { useResetScroll } from '@utils'

export function Cart() {
	const { cartItems, quantityProducts } = useContext(ProductContext)
	const { handeCheckout } = useCheckout()

	// Scroll al principio de la página cuando se cambia de ruta.
	const { pathname } = useLocation()
	useResetScroll([pathname])
	const calculateCartTotalPrice = (cartItems) => {
		return cartItems.reduce((totalPrice, item) => {
			return totalPrice + item.price * item.quantity
		}, 0)
	}
	const total = calculateCartTotalPrice(cartItems)

	return (
		<section className="min-h-[80vh] flex-grow  pb-52 ">
			<div className="mx-auto max-w-2xl px-3 pt-8 sm:px-12  sm:py-12  md:px-0">
				<div className="mb-16 mt-8 text-center">
					<h2 className="text-xl  text-gray-900 sm:text-2xl">
						{`You have ${quantityProducts} products in your Bag`}
					</h2>
				</div>
				<div className="felx  flex-col ">
					<ul className="space-y-6">
						{cartItems.map((product) => (
							<CartProduct key={product.id} {...product} />
						))}
					</ul>
				</div>
				{quantityProducts > 0 && (
					<div className="mt-12 flex flex-col gap-4 ">
						<span className="self-end text-xl">Total: {`$${total}`}</span>

						<div className="self-end text-center ">
							<button
								type="button"
								onClick={handeCheckout}
								className="text-md block rounded  bg-red-6 px-5 py-3 text-gray-100 transition hover:bg-red-8"
							>
								Checkout
							</button>
						</div>
					</div>
				)}
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
		<>
			<li className="relative grid h-36 grid-cols-6 grid-rows-3  md:h-20 md:grid-cols-7 md:grid-rows-2">
				<Link
					to={`/product/${product.id}`}
					className="relative col-span-2 row-span-3  flex aspect-square h-full w-full rounded-md   hover:bg-gray-1 md:col-span-1 md:h-20 md:w-20 "
				>
					{!isLoading && (
						<div className=" absolute left-0 top-0 m-2 animate-pulse-fast rounded bg-gray-300 " />
					)}
					<img
						src={mainImage}
						alt={name}
						width={100}
						height={100}
						className={`${
							!isLoading && 'opacity-0'
						} aspect-square  w-full rounded object-cover md:h-20 md:w-20 `}
						onLoad={() => setIsLoading(true)}
					/>
				</Link>
				<Link
					to={`/product/${product.id}`}
					className="underline-offset-3 col-start-3 col-end-6 row-start-1 row-end-2 pl-4 text-lg text-gray-900 hover:underline sm:text-xl  md:col-span-3  md:col-start-2 "
				>
					{name}
				</Link>
				<span className=" col-start-3 col-end-3 self-center justify-self-start pl-4 text-center text-2xl md:col-start-2 md:row-start-2  md:self-start ">{`$${price}`}</span>

				<div className=" col-span-4 col-start-3 row-start-3 flex w-full flex-1 items-center justify-between gap-2 pl-4 md:col-span-1 md:col-start-5 md:row-span-2 md:row-start-1 md:pl-0 lg:justify-end">
					<div className="grid w-full grid-cols-3 place-items-center  overflow-hidden rounded-md border border-black/20 ">
						<button
							type="button"
							className=" w-full text-2xl  leading-10 text-black/50 transition hover:bg-gray-1  hover:text-black hover:opacity-75"
							onClick={decrease}
						>
							-
						</button>

						<span className=" w-10 text-center leading-10">{quantity}</span>

						<button
							type="button"
							className=" w-full leading-10  text-black/50  transition hover:bg-gray-1 hover:text-black "
							onClick={increase}
						>
							+
						</button>
					</div>
				</div>
				<span className="col-start-5 col-end-7 row-start-2 w-full self-center justify-self-end text-end  text-2xl md:col-start-6 md:row-span-2  md:row-start-1 ">
					${subtotal}
				</span>
				<div className="absolute right-0 top-1 md:static md:col-start-7 md:row-span-2 md:place-self-center">
					<button
						onClick={removeProduct}
						className="text-gray-600 transition hover:text-red-6"
					>
						<span className="sr-only">Remove item</span>
						<SvgRemove className="h-5 w-5 fill-none stroke-current" />
					</button>
				</div>
			</li>
			<hr className="w-full  border-black opacity-20" />
		</>
	)
}

CartProduct.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	mainImage: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired
}
