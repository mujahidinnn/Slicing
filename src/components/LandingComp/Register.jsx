import { useState } from 'react'
import invisibleIcon from '../../assets/icons/invisible.svg'
import message from '../../assets/icons/message.svg'
import lock from '../../assets/icons/padlock 1.svg'
import user from '../../assets/icons/user 1.svg'
import visibleIcon from '../../assets/icons/visible.svg'

function Register(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirmation, setPassword_confirmation] = useState('')
	const [visiblePassword, setVisiblePassword] = useState(true)
	const [visibleConfirmation, setVisibleConfirmation] = useState(true)

	const handlePassword = (e) => {
		e.preventDefault()
		setVisiblePassword(!visiblePassword)
	}
	const handleConfirm = (e) => {
		e.preventDefault()
		setVisibleConfirmation(!visibleConfirmation)
	}

	const visiblePass = visiblePassword ? 'password' : 'text'
	const visiblePassIcon = visiblePassword ? invisibleIcon : visibleIcon
	const visiblePassClass = visiblePassword
		? 'absolute bottom-[7%] right-[1%] w-[20px] sm:w-6 lg:w-[4%]'
		: 'absolute bottom-[3%] right-[0.5%] w-6 sm:w-7 lg:w-[4.9%] '
	const visibleConfirm = visibleConfirmation ? 'password' : 'text'
	const visibleConfirmIcon = visibleConfirmation ? invisibleIcon : visibleIcon
	const visibleConfirmClass = visibleConfirmation
		? 'absolute bottom-[7%] right-[1%] w-[20px] sm:w-6 lg:w-[4%]'
		: 'absolute bottom-[3%] right-[0.5%] w-6 sm:w-7 lg:w-[4.9%] '

	const handleSubmit = (e) => {
		e.preventDefault()

		props.modal()
	}

	return (
		<div id='form' className='relative z-[10] sm:px-[10%] lg:px-[6%] sm:pb-5 lg:pb-8 sm:pt-4 lg:pt-[3%] lg:opacity-90 bg-white lg:border lg:border-[#CDCDCD] lg:shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] min-h-full w-full rounded-[4%]'>
			<form onSubmit={handleSubmit}>
				<h1 className='text-4xl sm:text-6xl lg:text-[2em] xl:text-[2.5em] 2xl:text-[3em] 3xl:text-[3.5em] 4xl:text-[5em] 5xl:text-[7em] 6xl:text-[8.5em] font-bold text-[#22A6B3] sm:leading-10 lg:leading-3 xl:leading-8 2xl:leading-none lg:mt-5 4xl:mt-10'>
					Daftar
				</h1>
				<br />
				<p className='sm:text-2xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-[2.1em] 5xl:text-[3em] 6xl:text-[4em] lg:-mt-3 xl:-mt-2 4xl:leading-[120%] '>
					Jika Anda sudah memiliki akun terdaftar,
					<br />
					Anda bisa{' '}
					<button
						onClick={props.toogle}
						className='font-bold text-[#22A6B3]'>
						Masuk di sini!
					</button>
				</p>
				<div className='5xl:pt-3 lg:max-h-[225px] xl:max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[390px] 4xl:max-h-[490px] 5xl:max-h-[35vh] grid gap-6 lg:gap-4 xl:gap-6 3xl:gap-10 4xl:gap-14 5xl:gap-24 6xl:gap-[8.5em] pb-3 mt-3 lg:mt-0 xl:mt-2 2xl:mt-3 4xl:mt-7 5xl:mt-12 6xl:mt-16 lg:overflow-y-scroll scrollbar scrollbar-w-[0.7vw] scrollbar-thumb-[#D9D9D9] hover:scrollbar-thumb-[#999999] scrollbar-track-[rgba(254,254,254,0.5)] scrollbar-thumb-rounded-full '>
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
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1 border-b border-b-black focus:border-b-2'
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
							Nama
						</label>
						<br />
						<div className='relative'>
							<img
								src={user}
								className='absolute w-5 lg:w-[4%] bottom-[20%]'
							/>
							<input
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1 border-b border-b-black focus:border-b-2'
								name='name'
								label='name'
								type='text'
								placeholder='Masukan nama anda'
								value={name}
								onChange={(e) => setName(e.target.value)}
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
							<button onClick={handlePassword}>
								<img
									src={visiblePassIcon}
									className={visiblePassClass}
								/>
							</button>
							<input
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1 border-b border-b-black focus:border-b-2'
								name='password'
								type={visiblePass}
								placeholder='Masukan kata sandi anda'
								label='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className='mb-4 lg:mb-0'>
						<label className='sm:text-lg lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-[1.4em] 4xl:text-[1.95em] 5xl:text-[2.7em] 6xl:text-[4em] text-[#999999]'>
							Konfirmasi Kata Sandi
						</label>
						<br />
						<div className='relative'>
							<img
								src={lock}
								className='absolute w-5 lg:w-[4%] bottom-[20%]'
							/>
							<button onClick={handleConfirm}>
								<img
									src={visibleConfirmIcon}
									className={visibleConfirmClass}
								/>
							</button>
							<input
								className='w-full mt-3 2xl:mt-4 3xl:mt-6 4xl:mt-7 sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.3em] 6xl:text-[4.5em] outline-none pl-6 lg:pl-[5%] pb-1  border-b border-b-black focus:border-b-2'
								name='password confirmation'
								type={visibleConfirm}
								placeholder='Konfirmasi kata sandi anda'
								label='password confirmation'
								value={password_confirmation}
								onChange={(e) => setPassword_confirmation(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<button
					className='w-full mt-5 lg:mt-[4.5%] xl:mt- 4xl:mt- -mb-1 sm:-mb-5 lg:-mb-2 xl:mb-0 2xl:mb-3 3xl:mb-5 4xl:mb-8 5xl:mb-14 6xl:mb-20 text-white bg-[#22A6B3] py-3 sm:py-5 lg:py-[2.5vh] 5xl:py-[3vh] sm:text-2xl lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-[2em] 4xl:text-[2.4em] 5xl:text-[4em] 6xl:text-[4.75em] font-bold rounded-full hover:bg-[#1A7F89]'
					onClick={handleSubmit}>
					DAFTAR
				</button>
			</form>
		</div>
	)
}

export default Register
