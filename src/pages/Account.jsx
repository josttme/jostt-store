import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'
import { getUserByUsername } from '../utils'
import { EditProfile } from '../components/EditProfile'

export function Account() {
	const [editUserData, setEditUserData] = useState(false)
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

			<div className="mt-10 text-center">
				<button
					type="button"
					onClick={() => setEditUserData(true)}
					className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>
					Edit Profile
				</button>
			</div>

			<Link
				to="/login"
				onClick={() => setUsername('')}
				className="mt-5 text-center text-gray-400"
			>
				Log Out
			</Link>
			{editUserData && <EditProfile setEditUserData={setEditUserData} />}
		</div>
	)
}
