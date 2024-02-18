import PropTypes from 'prop-types'

export function FomtButton({ value }) {
	return (
		<button
			type="submit"
			name="submit"
			id="submit"
			value={value}
			className="w-full rounded-lg bg-[#0a7beb] px-4 py-2 font-medium text-white duration-150 hover:bg-[#1b99ff] active:bg-[#0a7beb]"
		>
			{value}
		</button>
	)
}

FomtButton.propTypes = {
	value: PropTypes.string.isRequired
}
