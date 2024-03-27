import PropTypes from 'prop-types'
import { FormField, FomtButton, FormMessage } from '../form'
import { SvgClosed } from '../icons/SvgClosed'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthEditProfile } from '../../hooks/auth/useEditProfile'
import { getCurrentUserDetails } from '../../redux/slices'

export function EditProfile({ setEditUserData, editUserData }) {
	const dispatch = useDispatch()
	const { username: currentUser } = useSelector(getCurrentUserDetails)

	const users = useSelector((state) => state.storeUsers.users)
	const { handleEditProfile, messageError } = useAuthEditProfile(
		users,
		currentUser,
		dispatch
	)
	if (!editUserData) return
	return (
		<div className="relative m-5 my-5 bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
			<form onSubmit={handleEditProfile} className="space-y-5">
				<fieldset className="space-y-6">
					<legend className="text-center text-2xl font-bold">
						Edit Your Profile
					</legend>
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
					<FomtButton value="Edit Profile" />
					<FormMessage messageError={messageError} />
				</fieldset>

				<div>
					<button
						type="button"
						onClick={() => setEditUserData(false)}
						className="absolute right-2 top-2 grid h-5 w-5 place-content-center rounded-full bg-slate-100/80 p-4 text-xl transition duration-300 hover:bg-slate-200"
					>
						<SvgClosed className="h-6 w-6 stroke-2" />
					</button>
				</div>
			</form>
		</div>
	)
}

EditProfile.propTypes = {
	setEditUserData: PropTypes.func.isRequired,
	editUserData: PropTypes.bool.isRequired
}
