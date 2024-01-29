import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'
import { getUserByUsername } from '../utils'
import { EditProfile } from '../components/EditProfile'
import { RemoveUserModal } from '../components/RemoveUserModal'

export function Account() {
	const [editUserData, setEditUserData] = useState(false)
	const [closeModal, setCloseModal] = useState(false)
	const { username, usersExisting, setUsername } = useContext(ProductContext)
	const { email } = getUserByUsername({ username, usersExisting })

	const firstTwoLetters = username.substring(0, 2).toUpperCase()

	return (
		<div className="mx-auto my-10 grid max-w-lg justify-center">
			<div></div>
			<div className="flex justify-center">
				<span className="grid h-32 w-32 place-content-center rounded-full bg-blue-500 text-7xl font-bold text-white">
					{firstTwoLetters}
				</span>
			</div>

			<div className="mt-5 text-center">
				<h1 className="text-3xl font-bold">{username}</h1>
				<p className="text-gray-500">{email}</p>
			</div>

			<div className="mt-5 grid w-full place-content-center  items-center gap-5 text-center">
				<button
					type="button"
					onClick={() => setEditUserData(true)}
					className=" w-36 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>
					Edit Profile
				</button>
				<Link
					to="/login"
					onClick={() => setUsername('')}
					className=" w-36 rounded-full bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
				>
					Log Out
				</Link>
				<button
					type="button"
					onClick={() => setCloseModal(true)}
					className=" w-36 rounded-full bg-[#dc2626] px-4 py-2 text-white hover:bg-[#d50000]"
				>
					Delete account
				</button>
			</div>

			{editUserData && <EditProfile setEditUserData={setEditUserData} />}
			{closeModal && (
				<RemoveUserModal setCloseModal={setCloseModal} username={username} />
			)}
		</div>
	)
}
