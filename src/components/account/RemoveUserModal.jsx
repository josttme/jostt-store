import PropTypes from 'prop-types'
import { CustomButton } from './CustomButton'
import { useDispatch } from 'react-redux'
import { clearCurrentUser, removeUser } from '../../redux/slices'

export function RemoveUserModal({ username, setCloseModal, closeModal }) {
	if (!closeModal) return

	const dispatch = useDispatch()

	const handleRemoveUser = () => {
		dispatch(removeUser({ username }))
		dispatch(clearCurrentUser())
	}
	return (
		<section className="fixed inset-0  z-50 mx-auto  grid h-screen w-full place-content-center bg-black/20">
			<div className=" mx-5 grid h-40 grid-cols-2 grid-rows-2 items-end justify-items-center gap-5 rounded-lg  bg-white p-5 sm:w-full sm:max-w-lg ">
				<p className="col-span-2 self-center text-center">
					Are you sure you want to delete your account?
				</p>

				<CustomButton
					onClick={() => setCloseModal(false)}
					className="bg-[#0a7beb] hover:bg-[#1b99ff]"
				>
					Cancel
				</CustomButton>
				<CustomButton
					onClick={handleRemoveUser}
					className="bg-[#dc2626] hover:bg-[#d50000]"
				>
					Remove
				</CustomButton>
			</div>
		</section>
	)
}

RemoveUserModal.propTypes = {
	username: PropTypes.string,
	setCloseModal: PropTypes.func,
	closeModal: PropTypes.bool.isRequired
}
