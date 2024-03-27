import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
	const [openNavBar, setOpenNavBar] = useState(false)

	const valueContext = {
		openNavBar,
		setOpenNavBar
	}

	return (
		<ProductContext.Provider value={valueContext}>
			{children}
		</ProductContext.Provider>
	)
}

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired
}
