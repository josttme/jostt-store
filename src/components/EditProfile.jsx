import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ProductContext } from '../context'
import { useAuthEditProfile } from '../hooks/auth/useAuthEditProfile'

export function EditProfile({ setEditUserData }) {
	const { username } = useContext(ProductContext)
	const { handleEditProfile, messageError } = useAuthEditProfile({ username })
	return (
		<div className="relative mt-5 bg-white p-4 py-6 shadow sm:rounded-lg sm:p-6">
			<form onSubmit={handleEditProfile} className="space-y-5">
				<div>
					<button
						type="button"
						onClick={() => setEditUserData(false)}
						className="absolute right-2 top-2 grid h-5 w-5 place-content-center rounded-full bg-slate-100/80 p-4 text-xl transition duration-300 hover:bg-slate-200"
					>
						X
					</button>
				</div>
				<h3 className="sm:text-1xl text-center text-2xl font-bold text-gray-800">
					Edit Your Profile
				</h3>
				<div>
					<label className="font-medium">Username</label>
					<input
						name="username"
						type="text"
						required
						pattern="[A-Za-z0-9]*"
						title="Solo letras y números están permitidos"
						autoComplete="username"
						className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
					/>
				</div>
				<div>
					<label className="font-medium">Email</label>
					<input
						name="email"
						type="email"
						required
						autoComplete="email"
						className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
					/>
				</div>
				<div>
					<label className="font-medium">Password</label>
					<input
						name="password"
						type="password"
						required
						autoComplete="current-password"
						className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
					/>
				</div>
				<button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
					Edit Profile
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
	)
}

EditProfile.propTypes = {
	setEditUserData: PropTypes.func.isRequired
}
