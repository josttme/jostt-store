import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, title }) => {
	const [loaded, setLoaded] = useState(false)

	return (
		<div className="relative">
			<img
				className="h-full w-full"
				src={src}
				alt={title}
				width="200"
				height="200"
				onLoad={() => setLoaded(true)}
			/>
			{!loaded && (
				<div className="cardSkeleton absolute inset-0 bg-[#dcdcdc] "></div>
			)}
		</div>
	)
}

export default memo(Image)

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}
