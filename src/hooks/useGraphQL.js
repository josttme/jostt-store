import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
const API_URL = import.meta.env.VITE_API_URL

export function useGraphQL(query, variables) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['graphql', { query, variables }],
		queryFn: async () => {
			const res = await request(API_URL, query, variables)

			if (res.errors) {
				throw new Error(res.errors[0].message)
			}
			return res
		},
		staleTime: Infinity,
		cacheTime: Infinity
	})
	return {
		data,
		isLoading,
		isError
	}
}
