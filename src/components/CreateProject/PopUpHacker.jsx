import React from 'react'
import FtHacker from '../../assets/img/Hacker.png'

export default function PopUpHacker({ setShowHacker }) {
	return (
		<>
			<div className='justify-center mt-5 fixed inset-0 z-50 '>
				<div className='relative mx-auto flex gap-3 max-w-xl bg-[#ffffff] rounded-2xl px-12 py-5 '>
					<div className='relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5'>
						<div className='text-end'>
							<button
								className='p-2'
								type='button'
								onClick={() => setShowHacker(false)}>
								X
							</button>
						</div>
						<div>
							<img
								src={FtHacker}
								alt='Hacker'
								className='m-auto'
							/>
						</div>
						<h1 className='text-2xl text-[#22A6B3] text-center font-bold '>
							Hacker
						</h1>
						<p className='text-xl text-center'>Si Exsekutor</p>
						<p className=''>
							Seorang eksekutor ide melalui kemampuan teknikal yang berfokus
							pada seluruh tahap dalam membangun produk untuk merealisasikan ide
							dengan kualitas terbaik.
						</p>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black max-w-screen-2x m-auto'></div>
		</>
	)
}
