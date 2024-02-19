import PropTypes from 'prop-types'

export function CustomButton({ onClick, className, children }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`w-full rounded-full px-4 py-2 text-white ${className}`}
		>
			{children}
		</button>
	)
}

CustomButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}
