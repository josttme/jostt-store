import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserDetails, clearCurrentUser } from '../redux/slices'
import { EditProfile } from '@components/account/EditProfile'
import { RemoveUserModal } from '@components/account/RemoveUserModal'
import { CustomButton } from '@components/account/CustomButton'
import { useResetScroll } from '@utils'

export function Account() {
	const dispatch = useDispatch()
	const [editUserData, setEditUserData] = useState(false)
	const [closeModal, setCloseModal] = useState(false)

	const { username, email } = useSelector(getCurrentUserDetails)

	const firstTwoLetters = username.substring(0, 2).toUpperCase()
	// Scroll al principio de la página cuando se cambia de ruta.
	useResetScroll([username])
	return (
		<main className="mx-auto flex min-h-[80vh] w-full max-w-sm flex-col pt-10 ">
			<header className="flex flex-col items-center space-y-2">
				<span className="grid h-32 w-32 place-content-center rounded-full bg-[#0a7beb] text-7xl font-bold text-white">
					{firstTwoLetters}
				</span>
				<h2 className="text-3xl font-bold">{username}</h2>
				<p className="text-gray-500">{email}</p>
			</header>

			<section className="mt-5 grid w-full place-content-center  items-center gap-4 text-center">
				<CustomButton
					onClick={() => setEditUserData(true)}
					className="bg-[#0a7beb] hover:bg-[#1b99ff]"
				>
					Edit Profile
				</CustomButton>
				<Link to="/login">
					<CustomButton
						onClick={() => dispatch(clearCurrentUser())}
						className="bg-[#0a7beb] hover:bg-[#1b99ff]"
					>
						Log Out
					</CustomButton>
				</Link>
				<CustomButton
					onClick={() => setCloseModal(true)}
					className="bg-[#dc2626] hover:bg-[#d50000]"
				>
					Delete account
				</CustomButton>
			</section>

			<EditProfile
				editUserData={editUserData}
				setEditUserData={setEditUserData}
			/>
			<RemoveUserModal
				closeModal={closeModal}
				setCloseModal={setCloseModal}
				username={username}
			/>
		</main>
	)
}
