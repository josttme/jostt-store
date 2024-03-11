import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
	reducerPath: 'storeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => `/`,
			transformResponse: (response) => {
				const { products } = response
				return {
					products: products.map((product) => ({
						id: product.id,
						name: product.title,
						price: product.price,
						description: product.description,
						mainImage: product.imageMedium,
						categoryName: product.category.name,
						categoryId: product.category.id,
						createdBy: product.credit.author,
						createdByLink: product.credit.authorLink,
						sourceLink: product.credit.sourceLink
					}))
				}
			}
		})
	})
})

export const { useGetProductsQuery } = storeApi
