import PropTypes from 'prop-types'

export function ProductImage({ image, title }) {
	return (
		<figure className="grid place-content-center  lg:h-[570px] lg:w-[570px] lg:shadow-lg">
			<img src={image} alt={title} width={1000} height={1000} />
		</figure>
	)
}

ProductImage.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}
