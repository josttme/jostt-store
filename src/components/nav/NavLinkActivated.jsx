import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export function NavLinkActivated({ to, children }) {
	const linkBase = 'grid place-content-center'
	const linkActive = 'bg-red-1 '
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${linkBase} ${linkActive}   ` : linkBase
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
