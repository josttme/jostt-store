import { useCallback } from 'react'
import { PropTypes } from 'prop-types'
import debounce from 'just-debounce-it'
import { SvgSearch } from '../components/icons/SvgSearch'
import { useSearch } from '../hooks/useSearch'

export function Search({ getProducts, productsSearch, allProducts }) {
	const { search, updateSearch, errorMessage } = useSearch({ productsSearch })
	const debounceGetProducts = useCallback(
		debounce((search) => {
			getProducts({ search, allProducts })
		}, 300),
		[getProducts, allProducts]
	)

	const handleChange = (e) => {
		const newQuery = e.target.value

		if (newQuery.startsWith(' ')) return
		debounceGetProducts(newQuery)
		updateSearch(newQuery)
	}

	return (
		<div className="mx-auto pt-5 iphone678:w-4/5 iphone678:max-w-md">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="mb-4 flex h-11 w-full  items-stretch"
			>
				<input
					className=" flex-auto rounded-bl-lg rounded-tl-lg  border  border-gray-300 bg-white  px-3 py-1.5  text-gray-700  focus:border-gray-500 focus:outline-none"
					placeholder="Search"
					onChange={handleChange}
					type="search"
					value={search}
				/>
				<span className="flex items-center rounded-br-lg rounded-tr-lg bg-gray-900 px-6 py-2.5">
					<SvgSearch className="h-4 w-4 fill-white" />
				</span>
			</form>
			<div className={`h-6 w-full transition-all `}>
				<p className="text-center  text-red-6">{errorMessage}</p>
			</div>
		</div>
	)
}
Search.propTypes = {
	getProducts: PropTypes.func.isRequired,
	productsSearch: PropTypes.array,
	allProducts: PropTypes.array
}
