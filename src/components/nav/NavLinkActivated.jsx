import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export function NavLinkActivated({ to, children }) {
	const linkBase = 'grid place-content-center  stroke-black'
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? `fill-red-6 stroke-red-6 ${linkBase}`
					: `fill-none ${linkBase}`
			}
		>
			{children}
		</NavLink>
	)
}

NavLinkActivated.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node
}
