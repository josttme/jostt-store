import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Login() {
	const { handleLoginSubmit, messageError } = useAuth()
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 sm:px-4">
			<div className="w-full space-y-6 text-gray-600 sm:max-w-md">
				<div className="text-center">
					<img
						src="https://floatui.com/logo.svg"
						width={150}
						className="mx-auto"
					/>
					<div className="mt-5 space-y-2">
						<h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
							Log in to your account
						</h3>
						<p className="">
							Don't have an account?{' '}
							<Link
								to="/register"
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Sign up
							</Link>
						</p>
					</div>
				</div>
				<div className="space-y-8 bg-white p-4 py-6 shadow sm:rounded-lg sm:p-6">
					<div className="relative">
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
					</div>
					<form onSubmit={handleLoginSubmit} className="space-y-5">
						<div>
							<label className="font-medium">Username</label>
							<input
								name="username"
								type="text"
								required
								pattern="[A-Za-z0-9]*"
								title="Solo letras y números están permitidos"
								className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
							/>
						</div>
						<div>
							<label className="font-medium">Password</label>
							<input
								name="password"
								type="password"
								required
								className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
							/>
						</div>
						<button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
							Sign in
						</button>
						{messageError && (
							<div
								className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700"
								role="alert"
							>
								<span>{messageError}</span>
							</div>
						)}
					</form>
				</div>
			</div>
		</main>
	)
}