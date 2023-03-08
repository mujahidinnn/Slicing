import sendEmailSucess from '../../assets/img/SendEmailSuccess.png'
import { BsX } from 'react-icons/bs'
import { useStateContext } from '../../context/StateContext'

const EmailModal = () => {
	const { setEmailModal } = useStateContext()
	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-6xl'>
					<div
						className='bg-[#FCFBFF] rounded-xl p-10 w-full z-50 flex items-center'
						aria-hidden='true'>
						<div>
							<img
								src={sendEmailSucess}
								alt='sendEmailSuccess'
							/>
						</div>

						<span>
							<BsX
								className='absolute top-4 right-4 text-[40px] cursor-pointer text-gray-400'
								onClick={() => setEmailModal(false)}
							/>
						</span>

						<div>
							<h1 className='text-3xl font-semibold text-teal-500'>
								Email Lamaran Terkirim
							</h1>
							<p className='text-xl text-teal-500'>
								Lanjutkan diskusi via email dan cek notifikasi berkala
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</>
	)
}

export default EmailModal
