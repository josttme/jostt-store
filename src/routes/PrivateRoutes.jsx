import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/slices'

export function PrivateRoutes() {
	const username = useSelector(getCurrentUser)
	return username ? <Outlet /> : <Navigate to="/login" />
}

export function PublicOnlyRoute() {
	const username = useSelector(getCurrentUser)
	return !username ? <Outlet /> : <Navigate to="/account" />
}
