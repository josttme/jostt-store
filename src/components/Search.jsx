import { useCallback, useRef } from 'react'
import { PropTypes } from 'prop-types'
import debounce from 'just-debounce-it'
import { SvgSearch } from '../components/icons/SvgSearch'

export function Search({ search, updateSearch, errorMessage, getProducts }) {
	const inputRef = useRef()
	const debounceGetProducts = useCallback(
		debounce((search) => {
			if (search.length > 1) {
				getProducts({ search })
			}
		}, 300),
		[getProducts]
	)

	const handleChange = (e) => {
		const newQuery = e.target.value

		if (newQuery.startsWith(' ')) return
		debounceGetProducts(newQuery)
		updateSearch(newQuery)
	}

	return (
		<div className="mx-auto  w-11/12 max-w-md pt-5">
			<form
				onClick={(e) => e.preventDefault()}
				className="mb-4 flex h-11 w-full  items-stretch"
			>
				<input
					ref={inputRef}
					className=" flex-auto rounded-bl-lg rounded-tl-lg  border  border-gray-300 bg-white  px-3 py-1.5  text-gray-700  focus:border-gray-500 focus:outline-none"
					placeholder="Search..."
					onChange={handleChange}
					type="search"
					value={search}
				/>
				<span className="flex items-center rounded-br-lg rounded-tr-lg bg-gray-900 px-6 py-2.5">
					<SvgSearch className="h-4 w-4 fill-white" />
				</span>
			</form>
			<div className={`h-6 w-full transition-all `}>
				<p className="text-center text-red-500">{errorMessage}</p>
			</div>
		</div>
	)
}
Search.propTypes = {
	search: PropTypes.string.isRequired,
	updateSearch: PropTypes.func.isRequired,
	getProducts: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired
}
