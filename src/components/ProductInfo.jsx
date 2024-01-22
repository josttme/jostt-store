import PropTypes from 'prop-types'

export function ProductInfo({
	title,
	description,
	author,
	authorLink,
	sourceLink
}) {
	return (
		<>
			<h1 className="text-4xl"> {title}</h1>
			<p className="mb-2 text-lg">{description}</p>

			<ProductInfoAuthor
				author={author}
				authorLink={authorLink}
				sourceLink={sourceLink}
			/>
		</>
	)
}

export function ProductInfoAuthor({ author, authorLink, sourceLink }) {
	if (!authorLink) return
	return (
		<span>
			Photo by{' '}
			<a
				href={authorLink}
				target="_blank"
				className="text-black/60 underline decoration-black/60 transition-all duration-200 hover:text-black hover:decoration-black"
				rel="noreferrer"
			>
				{author}{' '}
			</a>
			on{' '}
			<a
				href={sourceLink}
				target="_blank"
				className="text-black/60 underline decoration-black/60 transition-all duration-200 hover:text-black hover:decoration-black"
				rel="noreferrer"
			>
				Unsplash
			</a>
		</span>
	)
}
ProductInfoAuthor.propTypes = {
	author: PropTypes.string,
	authorLink: PropTypes.string,
	sourceLink: PropTypes.string
}

ProductInfo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	author: PropTypes.string,
	authorLink: PropTypes.string,
	sourceLink: PropTypes.string
}
