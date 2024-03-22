import { PropTypes } from 'prop-types'
import { SvgCartPlus } from './icons/SvgCartPlus'
import { useCartActions } from '../hooks/useCartProduct'

export function AddToCartButton({ product }) {
	const { handleAddToCart } = useCartActions()

	const addToCart = (e) => {
		e.stopPropagation()
		// Despachamos la acción addToCart y pasamos el objeto  del producto
		handleAddToCart({ product })
	}
	return (
		<div
			onClick={addToCart}
			className="relative flex cursor-pointer items-center rounded-md before:absolute before:h-full before:w-full before:rounded-md  hover:before:bg-black/10  lg:bg-gradient-to-r lg:from-red-1 lg:via-red-4 lg:via-30%   lg:to-red-7"
		>
			<div className="w-10 rounded-l-md rounded-r-md bg-red-1 p-1 lg:rounded-r-none  ">
				<SvgCartPlus className="fill-red-5 stroke-red-5" />
			</div>
			<span className=" hidden px-1 text-center text-sm text-white lg:block lg:px-2">
				Add to cart
			</span>
		</div>
	)
}
AddToCartButton.propTypes = {
	product: PropTypes.object.isRequired
}
