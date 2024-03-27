import { useDispatch, useSelector } from 'react-redux'
import { useRegister } from '../hooks/auth/useRegister'
import {
	FormHeader,
	FormField,
	FomtButton,
	FormMessage
} from '@components/form/'

export function Register() {
	const dispatch = useDispatch()
	const users = useSelector((state) => state.storeUsers.users)
	const favorites = useSelector((state) => state.storeLikes.likes)
	const cartItems = useSelector((state) => state.storeCart.cart)

	const { handleRegisterSubmit, messageError } = useRegister(
		users,
		favorites,
		cartItems,
		dispatch
	)

	return (
		<main className="flex min-h-[80vh]  w-full flex-col items-center justify-center bg-gray-50 sm:px-4">
			<section className="w-full max-w-md space-y-10 px-2 pb-20 pt-10 text-gray-600">
				<FormHeader
					title="Create an account"
					subtitle="Already have an account?"
					link="Log in"
					path="/login"
				/>
				<div className="rounded-lg  border border-slate-400/15 bg-white p-4 text-lg shadow sm:p-6">
					<form onSubmit={handleRegisterSubmit} className="space-y-6">
						<FormField
							label="Username"
							name="username"
							type="text"
							pattern="[A-Za-z0-9]*"
							title="Only letters and numbers are allowed"
							autoComplete="username"
							placeholder="username123"
							required
						/>
						<FormField
							label="Email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder="username@example.com"
							required
						/>
						<FormField
							label="Password"
							name="password"
							type="password"
							autoComplete="new-password"
							placeholder="*******************************"
							required
						/>
						<FomtButton value="Create account" />
						<FormMessage messageError={messageError} />
					</form>
				</div>
			</section>
		</main>
	)
}
