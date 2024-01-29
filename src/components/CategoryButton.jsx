import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export function CategoryButton({ category, categoryId, productPage }) {
	const navigate = useNavigate()

	const handleCategoryRoute = (e, category, categoryId) => {
		e.stopPropagation()
		const categoryLowercase = category.toLowerCase()
		const categoryRoute = `/category/${categoryLowercase}-${categoryId}`
		if (location.pathname !== categoryRoute) navigate(categoryRoute)
	}

	return (
		<button
			onClick={(e) => {
				handleCategoryRoute(e, category, categoryId)
			}}
			className={`${
				productPage
					? 'text-md w-24 self-start bg-slate-200'
					: 'absolute bottom-0 left-0 m-2 border border-black/10  bg-slate-100/80  text-sm'
			}  rounded-lg  px-3 py-0.5 text-black transition-all duration-200 hover:bg-black/60 hover:text-white`}
		>
			{category}
		</button>
	)
}

CategoryButton.propTypes = {
	category: PropTypes.string.isRequired,
	categoryId: PropTypes.string.isRequired,
	productPage: PropTypes.bool
}
