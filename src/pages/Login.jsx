import { useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useAuthLogin } from '../hooks/auth'
import { ProductContext } from '../context'
import {
	FormHeader,
	FormField,
	FomtButton,
	FormMessage
} from '../components/form/'
export function Login() {
	const { handleLoginSubmit, messageError } = useAuthLogin()
	const { errorCheckout, setErrorCheckout } = useContext(ProductContext)
	const location = useLocation()

	useEffect(() => {
		return () => {
			if (location.pathname === '/login') {
				setErrorCheckout('')
			}
		}
	}, [location])

	return (
		<main className="flex min-h-[80vh]  w-full flex-col items-center justify-center bg-gray-50 sm:px-4">
			<section className="w-full max-w-md space-y-10 px-2 pb-20 pt-10 text-gray-600">
				<FormHeader
					title="Log in to your account"
					subtitle={
						!errorCheckout ? `Don't have an account?` : `${errorCheckout}`
					}
					link="Sign up"
					path="/register"
				/>

				<div className="rounded-lg  border border-slate-400/15 bg-white p-4 text-lg shadow sm:p-6">
					{/* 	<div className="relative">
						<span className="block h-px w-full bg-gray-300"></span>
						<p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
							Default accounts
						</p>
					</div>
					<div className="grid grid-cols-3 gap-x-3">
						<button className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-gray-50 active:bg-gray-100">
							User1
						</button>
						<button className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-gray-50 active:bg-gray-100">
							User2
						</button>
						<button className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-gray-50 active:bg-gray-100">
							User3
						</button>
					</div>
					<div className="relative">
						<span className="block h-px w-full bg-gray-300"></span>
						<p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
							Or continue with
						</p>
					</div> */}
					<form onSubmit={handleLoginSubmit} className="space-y-6">
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
							label="Password"
							name="password"
							type="password"
							autoComplete="new-password"
							placeholder="*******************************"
							required
						/>
						<FomtButton value="Sign in" />
						<FormMessage messageError={messageError} />
					</form>
				</div>
			</section>
		</main>
	)
}
