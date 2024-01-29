import PropTypes from 'prop-types'
import { useAuthRemoveUser } from '../hooks/auth/useAuthRemoveUser'

export function RemoveUserModal({ username, setCloseModal }) {
	const { removeUser } = useAuthRemoveUser({ username })
	return (
		<section className="absolute left-0 top-0 z-50 grid h-screen w-screen place-content-center bg-black/20">
			<div className="grid h-40 w-full max-w-sm grid-cols-2 grid-rows-2 items-center  justify-items-center rounded-lg bg-white  p-5 ">
				<p className="co col-span-2 col-start-1 text-center">
					Are you sure you want to delete your account?
				</p>
				<button
					onClick={() => setCloseModal(false)}
					className=" col-span-1  h-10 w-36 self-end justify-self-start rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>
					Cancel
				</button>
				<button
					onClick={removeUser}
					className=" col-span-1  col-end-3 row-start-2 h-10 w-36 self-end justify-self-end rounded-full bg-[#dc2626] px-4 py-2 text-white hover:bg-[#d50000]"
				>
					Remove
				</button>
			</div>
		</section>
	)
}

RemoveUserModal.propTypes = {
	username: PropTypes.string,
	setCloseModal: PropTypes.func
}
