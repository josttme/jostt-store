import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { ProductContext } from '../context'

export function PrivateRoutes() {
	const { username } = useContext(ProductContext)

	return username ? <Outlet /> : <Navigate to="/login" />
}

export function PublicOnlyRoute() {
	const { username } = useContext(ProductContext)

	return !username ? <Outlet /> : <Navigate to="/account" />
}
