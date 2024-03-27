import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api'
import { ProductsList } from '@components/Card'
import { getProductsByCategory } from '@services/products'
import { useResetScroll } from '@utils'

export function Category() {
	// Obtiene el parámetro "path" de la ruta actual
	const { id } = useParams()
	// Divide el "path" en partes
	const idParts = id.split('-')
	// Obtiene el último elemento de la ruta actual
	const categoryId = Number(idParts[idParts.length - 1])
	useResetScroll([id])
	const { data } = useGetProductsQuery()
	if (!data) return
	const allProducts = data?.products
	const products = getProductsByCategory({ categoryId, allProducts })

	// Scroll al principio de la página cuando se cambia de ruta.

	return <ProductsList products={products} />
}
