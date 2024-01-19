import PropTypes from 'prop-types'

export function ProductImage({ image, title }) {
	return (
		<figure className="grid h-[570px] w-[570px] place-content-center shadow-lg">
			<img src={image} alt={title} width={1000} height={1000} />
		</figure>
	)
}

ProductImage.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}
