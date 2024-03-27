import { PropTypes } from 'prop-types'
import { useSearch } from '@hooks/useSearch'
import { SvgSearch } from '@components/icons/SvgSearch'

export function Search({ products, onSearch, isLoading }) {
	const { handleChange, errorMessage } = useSearch({
		products,
		isLoading,
		onSearch
	})

	return (
		<div className="mx-auto pt-5 iphone678:w-4/5 iphone678:max-w-md">
			<form className="mb-4 flex h-11 w-full  items-stretch">
				<input
					className=" flex-auto rounded-bl-lg rounded-tl-lg  border  border-gray-300 bg-white  px-3 py-1.5  text-gray-700  focus:border-gray-500 focus:outline-none"
					placeholder="Search"
					onChange={handleChange}
					type="search"
				/>
				<span className="flex items-center rounded-br-lg rounded-tr-lg bg-gray-900 px-6 py-2.5">
					<SvgSearch className="h-4 w-4 fill-white" />
				</span>
			</form>
			<div className={`h-6 w-full transition-all `}>
				{errorMessage && (
					<p className="text-center  text-red-6">{errorMessage}</p>
				)}
			</div>
		</div>
	)
}
Search.propTypes = {
	products: PropTypes.array,
	isLoading: PropTypes.bool,
	onSearch: PropTypes.func
}
