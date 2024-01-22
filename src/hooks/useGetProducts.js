import { useContext, useEffect } from 'react'
import gql from 'graphql-tag'
import { useGraphQL } from './useGraphQL'
import { mappedProducts } from '../services/products'
import { ProductContext } from '../context'

export function useGetProducts() {
	const { allProducts, productsLoaded, setAllProducts, setProductsLoaded } =
		useContext(ProductContext)

	const GET_PRODUCTS = gql`
		query Query($categoryId: ID) {
			category(categoryId: $categoryId) {
				id
				title
				price
				description
				imageMedium
				category {
					id
					name
				}
				credit {
					author
					authorLink
					sourceLink
				}
			}
		}
	`

	const { data, isLoading, isError } = useGraphQL(GET_PRODUCTS, {})
	useEffect(() => {
		if (!productsLoaded && data) {
			const mappProducs = mappedProducts(data?.category)
			setAllProducts(mappProducs)
			setProductsLoaded(true)
		}
	}, [data])

	return {
		allProducts,
		isLoading,
		isError
	}
}
