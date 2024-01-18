import PropTypes from 'prop-types'
import { memo } from 'react'

const Image = ({ src, title, isLoading, setIsLoading }) => {
	return (
		<div className="relative">
			<img
				className={`${!isLoading && 'opacity-0'} h-full w-full`}
				src={src}
				alt={title}
				onLoad={() => setIsLoading(true)}
				width="200"
				height="200"
			/>
		</div>
	)
}

export default memo(Image)

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	setIsLoading: PropTypes.func.isRequired
}
