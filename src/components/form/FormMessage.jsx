import PropTypes from 'prop-types'

export function FormMessage({ messageError }) {
	return (
		<>
			{messageError && (
				<div
					className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700"
					role="alert"
				>
					<span>{messageError}</span>
				</div>
			)}
		</>
	)
}

FormMessage.propTypes = {
	messageError: PropTypes.string
}
