import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const Pagination = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage
}) => {
	const pages = []

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i)
	}
	const navigate = useNavigate()

	const pagess = (page) => {
		if (page === 1) {
			navigate('/', { replace: true }) // Navegar a la raíz si es la página 1
		} else {
			navigate(`/page/${page}`, { replace: true }) // Navegar a la ruta "/page/..."
		}
		setCurrentPage(page)
	}

	return (
		<div className="mt-5 flex w-full items-center justify-center gap-1 ">
			{pages.map((page, index) => {
				return (
					<button
						onClick={() => pagess(page)}
						key={index}
						className={`${
							page === currentPage && 'bg-gray-7 '
						} border-gray-7 hover:bg-gray-1 grid h-10 w-10 place-content-center rounded-md border p-1 px-2   text-lg duration-150`}
					>
						{page}
					</button>
				)
			})}
		</div>
	)
}

Pagination.propTypes = {
	totalPosts: PropTypes.number.isRequired,
	postsPerPage: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}
