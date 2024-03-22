import { PropTypes } from 'prop-types'
import { SvgHeart } from './icons/SvgHeart'
import { useFavorites } from '../hooks/useFavorites'
import { useToggleFavorite } from '../hooks/useToggleFavorite'

export function FavoriteButton({ product, className }) {
	const toggleFavorite = useToggleFavorite()
	const favorites = useFavorites()

	const isLiked = favorites?.some((like) => like.id === product.id)

	const handleToggleLike = (e) => {
		e.stopPropagation()
		// Despachamos la acción toggleLike y pasamos el objeto pokemon completo
		toggleFavorite({ product })
	}
	const favorite = isLiked ? 'fill-red-6 stroke-red-6' : 'fill-none'
	return (
		<div onClick={handleToggleLike} className={className}>
			<button
				type="button"
				title="Like"
				className="grid h-full w-full place-content-center rounded-full bg-slate-100/80 transition duration-300 hover:bg-white/90 hover:stroke-red-6"
			>
				<SvgHeart
					className={`${favorite} grid h-5 w-5 place-content-center stroke-black stroke-[1.3] lg:stroke-[1.6]  lg:hover:stroke-red-6`}
				/>
			</button>
		</div>
	)
}

FavoriteButton.propTypes = {
	className: PropTypes.string,
	product: PropTypes.object.isRequired
}
