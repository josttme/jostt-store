import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function FormHeader({ title, subtitle, link, path }) {
	return (
		<header className=" mt-5 space-y-2 text-center">
			<h1 to="/" className="mr-3 text-4xl font-bold text-red-6">
				JosttStore
			</h1>
			<h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">{title}</h3>
			<p className="mr-1 inline-block text-lg">{subtitle}</p>
			<Link
				to={path}
				className="font-medium text-[#0a7beb] hover:text-[#1b99ff]"
			>
				{link}
			</Link>
		</header>
	)
}

FormHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}
