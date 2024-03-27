import { useGetFavorites } from '../hooks/useGetFavorites'
import { ProductsList } from '@components/Card'

export function Favorites() {
	const favorites = useGetFavorites()

	return (
		<div className="flex-grow">
			<ProductsList products={favorites} favorites />
		</div>
	)
}
