import  { useState } from 'react'
import img from '../../assets/img/img_landingpage.png'
import logo from '../../assets/logo/logo_medium.svg'
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import PopupSuccess from './PopupSuccess'

function Main() {
	const [changeForm, setChangeForm] = useState(true)
	const [modal, setModal] = useState(false)

	const toogle = () => {
		setChangeForm(!changeForm)
	}
	const modalActive = () => {
		setModal(true)
	}
	const modalInactive = () => {
		setModal(false)
		setChangeForm(false)
	}
	const form = changeForm ? (
		<Register
			toogle={toogle}
			modal={modalActive}
		/>
	) : (
		<Login toogle={toogle} />
	)
	const text = changeForm ? 'MASUK' : 'DAFTAR'
	return (
		<div
			id='main'
			className='relative min-h-min lg:min-h-[100vh]'>
			{modal ? <PopupSuccess toogle={modalInactive} /> : null}
			<div className='fixed top-0 inset-x-0 z-50'>
				<Navbar
					button={toogle}
					text={text}
				/>
			</div>
			<div className='w-full mt-6 lg:flex lg:items-center lg:h-screen'>
				<div className='w-full  flex items-center mt-2 '>
					<img
						src={img}
						alt='image'
						className='hidden lg:block w-[58%] z-[-5] ml-[-1%] mb-[4%]'
					/>
					<div className='mb-[-60px]'>
						<img
							src={img}
							alt='image'
							className='lg:hidden mt-8 w-full ml-2 bottom-0'
						/>
					</div>
					<div className='absolute hidden w-[45%] lg:block right-[5%]'>
						{form}
					</div>
				</div>
			</div>
			<img
				src={logo}
				alt='team-up'
				className='absolute z-20 -bottom-1.5 lg:bottom-[-1.5%] left-[4%] lg:left-[2%] w-[27%]'
			/>
			<svg
				id='tentang'
				className='sm:absolute sm:bottom-[-1%] lg:z-[-1]'
				viewBox='0 0 1280 270'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g filter='url(#filter0_d_401_1393)'>
					<path
						d='M0 69.9772L35.5556 65.255C71.1111 60.1764 142.222 51.2666 213.333 55.7215C284.444 60.1764 355.556 79.7779 426.667 112.744C497.778 145.71 568.889 193.823 640 179.3C711.111 165.312 782.222 88.6877 853.333 69.9772C924.444 51.2666 995.556 88.6877 1066.67 88.955C1137.78 88.6877 1208.89 51.2666 1244.44 31.9323L1280 12.9544V269.557H1244.44C1208.89 269.557 1137.78 269.557 1066.67 269.557C995.556 269.557 924.444 269.557 853.333 269.557C782.222 269.557 711.111 269.557 640 269.557C568.889 269.557 497.778 269.557 426.667 269.557C355.556 269.557 284.444 269.557 213.333 269.557C142.222 269.557 71.1111 269.557 35.5556 269.557H0V69.9772Z'
						fill='#22A6B3'
						className='path'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d_401_1393'
						x='-10'
						y='0.954407'
						width='1300'
						height='276.602'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood
							floodOpacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='-2' />
						<feGaussianBlur stdDeviation='5' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_401_1393'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_401_1393'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</div>
	)
}

export default Main
