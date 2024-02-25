import { useAuthRegister } from '@hooks/auth'
import {
	FormHeader,
	FormField,
	FomtButton,
	FormMessage
} from '@components/form/'

export function Register() {
	const { handleRegisterSubmit, messageError } = useAuthRegister()
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
