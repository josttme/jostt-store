import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const Pagination = ({ totalPages, onPageChange, currentPage }) => {
	const navigate = useNavigate()

	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

	const handlePageChange = (newPage) => {
		if (currentPage === newPage) return

		const path = newPage === 1 ? '/' : `/page/${newPage}`
		navigate(path)
		onPageChange(newPage)
	}

	return (
		<div className="mt-5 flex w-full items-center justify-center gap-1 ">
			{pageNumbers.map((page) => (
				<PageButton
					key={page}
					page={page}
					isActive={page === currentPage}
					onClick={() => handlePageChange(page)}
				/>
			))}
		</div>
	)
}
const PageButton = ({ page, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`
			grid h-10 w-10 place-content-center rounded-md border border-gray-7 p-1 px-2 text-lg duration-150
			${isActive ? 'bg-gray-7' : 'hover:bg-gray-1'}
		`}
	>
		{page}
	</button>
)

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}

PageButton.propTypes = {
	page: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}
