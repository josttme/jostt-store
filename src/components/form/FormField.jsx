import PropTypes from 'prop-types'

export function FormField({
	label,
	type,
	name,
	placeholder,
	required,
	pattern,
	...attributes
}) {
	return (
		<div>
			<label className="font-medium" htmlFor={name}>
				{label}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				required={required}
				pattern={pattern}
				{...attributes}
				className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-[#0a7beb]"
			/>
		</div>
	)
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	pattern: PropTypes.string
}
