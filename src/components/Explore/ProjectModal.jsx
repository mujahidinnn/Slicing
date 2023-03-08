import React from 'react'
import { SlMagnifier } from 'react-icons/sl'
import { BiTimeFive } from 'react-icons/bi'
import { BsX } from 'react-icons/bs'
import profile from '../../assets/img/profile.jpg'
import { useStateContext } from '../../context/StateContext'

const ProjectModal = ({ title, program, category, desc, hacker, hipster }) => {
	const { setProjectModal, showEmailModal } = useStateContext()
	return (
		<>
			<div className='animate-zoom-out bg-[rgba(0,0,0,0.15)] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-6xl'>
					<div
						className='bg-[#FCFBFF] rounded-xl p-10 w-full z-50 '
						aria-hidden='true'>
						<div className='flex w-full justify-between'>
							<p className='tracking-wider text-teal-500 font-semibold'>
								{program}
							</p>
							<span>
								<BsX
									className='text-[30px] cursor-pointer'
									onClick={() => setProjectModal(false)}
								/>
							</span>
						</div>

						<div className='mt-2'>
							<h1 className='flex text-[19px] font-bold items-center gap-10'>
								{title}{' '}
								<span className='text-[13px] bg-teal-100 p-1 rounded-xl w-[80px] text-center text-teal-500'>
									Dibuka
								</span>
							</h1>
							<p>{category}</p>
						</div>

						<div className='flex justify-around gap-10'>
							<article className='mt-3'>
								<p className='text-gray-500'>{desc}</p>
							</article>

							<div className='flex flex-col gap-2 bg-[#DDEEF3] p-5 rounded-xl w-1/2'>
								<div className='flex items-center gap-5'>
									<img
										src={profile}
										alt=''
										className='w-[70px] rounded-[50%] border-white border-2'
									/>
									<div>
										<h3 className='font-semibold text-lg'>Fulan Al Fulani</h3>
										<p className='text-sm'>Founder</p>
									</div>
								</div>

								<h5 className='text-teal-600 font-semibold'>
									Detail Rekrutmen :
								</h5>

								<div className='flex px-2 mt-1 items-center gap-[15px]'>
									<SlMagnifier className='text-gray-500 font-semibold' />
									<b>
										{hacker} Hacker, {hipster} Hipster
									</b>
								</div>

								<p className='break-words'>
									Hacker yang dibutuhkan front-end dan back-end. Framework yang
									digunakan adalah React. Diutamakan domisili Jogja. Hipster
									diutamakan memiliki pengalaman di UI/UX Designer. Harus bisa
									bekerja sama dalam tim.
								</p>
							</div>
						</div>

						<div>
							<h5 className='text-teal-500 font-semibold'>Durasi Pengerjaan</h5>
							<p className='flex gap-2 items-center'>
								<span>
									<BiTimeFive className='text-[18px] text-teal-500' />
								</span>{' '}
								4 Bulan
							</p>
						</div>

						<div className='w-full flex justify-end'>
							<button
								className='py-3 w-[12%] bg-teal-500 text-white rounded-lg mt-1 drop-shadow-xl tracking-wide'
								onClick={showEmailModal}>
								Lamar
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='opacity-25 fixed inset-0 z-40 bg-black'></div> */}
		</>
	)
}

export default ProjectModal
