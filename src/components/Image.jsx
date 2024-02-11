import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, title }) => {
	const [loaded, setLoaded] = useState(false)

	return (
		<div className="relative aspect-square h-full w-full overflow-hidden rounded-xl shadow-sm lg:rounded-none">
			<img
				className="h-full w-full"
				src={src}
				alt={title}
				width="200"
				height="200"
				onLoad={() => setLoaded(true)}
			/>
			{!loaded && <div className="cardSkeleton absolute inset-0 "></div>}
		</div>
	)
}

export default memo(Image)

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}
