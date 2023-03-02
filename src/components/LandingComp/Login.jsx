import React, { useState } from 'react'
import message from '../../assets/icons/message.svg'
import lock from '../../assets/icons/padlock 1.svg'
import visibleIcon from '../../assets/icons/visible.svg'
import invisibleIcon from '../../assets/icons/invisible.svg'
import { Link } from 'react-router-dom'

function Login(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [show, setShow] = useState(true)

	const handleVisible = (e) => {
		e.preventDefault()
		setShow(!show)
	}
	const showType = show ? 'password' : 'text'
	const showIcon = show ? invisibleIcon : visibleIcon
	const showIconClass = show
		? 'absolute bottom-[7%] right-[1%] w-[20px] sm:w-6 lg:w-[4%]'
		: 'absolute bottom-[3%] right-[0.5%] w-6 sm:w-7 lg:w-[4.9%] '

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='relative z-[10] sm:px-[10%] lg:px-[6%] sm:pb-5 lg:pb-8 sm:pt-4 lg:pt-[3%] lg:opacity-90 bg-white lg:border lg:border-[#CDCDCD] lg:shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] min-h-min w-full rounded-[4%]'>
			<form onSubmit={handleSubmit}>
				<h1 className='text-4xl sm:text-6xl lg:text-[2em] xl:text-[2.5em] 2xl:text-[3em] 3xl:text-[3.5em] 4xl:text-[5em] 5xl:text-[7em] 6xl:text-[8.5em] font-bold text-[#22A6B3] sm:leading-10 lg:leading-3 xl:leading-8 2xl:leading-none lg:mt-5 4xl:mt-10'>
					Masuk
				</h1>
				<br />
				<p className='sm:text-2xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-[2.1em] 5xl:text-[3em] 6xl:text-[4em] lg:-mt-3 xl:-mt-2 4xl:leading-[120%] 6xl:mt-5 '>
					Jika Anda belum memiliki akun terdaftar,
					<br />
					Anda bisa{' '}
					<button
						onClick={props.toogle}
						className='font-bold text-[#22A6B3]'>
						Daftar di sini!
					</button>
				</p>
				<div className='mt-3 lg:mt-[3%] 4xl:mt-[5%] grid gap-6 sm:gap-10 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-9 4xl:gap-14 5xl:gap-24 6xl:gap-32'>
					<div>
						<label className='text-sm sm:text-lg lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-[1.4em] 4xl:text-[1.95em] 5xl:text-[2.7em] 6xl:text-[4em] text-[#999999]'>
							Email
						</label>
						<br />
						<div className='relative'>
							<img
								src={message}
								className='absolute w-5 lg:w-[4%] bottom-[25%] lg:bottom-[24%] mr-1'
							/>
							<input
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 5xl:mt-9 6xl:mt-14 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1 border-b border-b-black focus:border-b-2'
								name='email'
								type='email'
								placeholder='Masukan email anda'
								label='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<label className='sm:text-lg lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-[1.4em] 4xl:text-[1.95em] 5xl:text-[2.7em] 6xl:text-[4em] text-[#999999]'>
							Kata Sandi
						</label>
						<br />
						<div className='relative'>
							<img
								src={lock}
								className='absolute w-5 lg:w-[4%] bottom-[20%]'
							/>
							<button onClick={handleVisible}>
								<img
									src={showIcon}
									className={showIconClass}
								/>
							</button>
							<input
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 5xl:mt-9 6xl:mt-14 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1 border-b border-b-black focus:border-b-2'
								name='password'
								type={showType}
								placeholder='Masukan kata sandi anda'
								label='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className='flex mt-[2%] sm:mt-[5%] justify-between sm:text-xl lg:text-[0.8em] xl:text-base 2xl:text-xl 3xl:text-[1.5em] 4xl:text-[2em] 5xl:text-[2.875em] 6xl:text-[4em]'>
					<div className='flex items-center basis-1/2'>
						<input
							type='checkbox'
							className='mr-[2%] w-[13px] 2xl:w-[16px] 3xl:w-[19px] 4xl:w-[26px] 5xl:w-[45px] 6xl:w-[65px] h-[13px] 2xl:h-[16px] 3xl:h-[19px] 4xl:h-[26px] 5xl:h-[45px] 6xl:h-[65px] cursor-pointer'
						/>
						<label>Ingat Saya</label>
					</div>
					<a href='#'>Lupa Password?</a>
				</div>
				<button
					className='w-full mt-5 lg:mt-[4.5%] xl:mt- 4xl:mt- -mb-1 sm:-mb-5 lg:-mb-2 xl:mb-0 2xl:mb-3 3xl:mb-5 4xl:mb-8 5xl:mb-20 text-white bg-[#22A6B3] hover:bg-[#1A7F89] py-3 sm:py-5 lg:py-[2.5vh] 5xl:py-[3vh] sm:text-2xl lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-[2em] 4xl:text-[2.4em] 5xl:text-[4em] 6xl:text-[4.75em] font-bold rounded-full'
					onClick={handleSubmit}>
					MASUK
				</button>
			</form>
			<Link
				to='/dashboard/explore'
				className='text-red-500 underline text-xl'>
				Link sementara untuk ke halaman dashboard
			</Link>
		</div>
	)
}

export default Login
