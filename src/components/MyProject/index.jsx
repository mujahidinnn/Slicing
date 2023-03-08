import search from '../../assets/icons/search.svg'
import CardsProjectApplied from './CardProjectApplied'
import CardProjectIMade from './CardProjectIMade'

const MyProject = () => {
	return (
		<div className='bg-slate-100 '>
			<div className='bg-slate-100 min-h-screen px-4 lg:px-[31px] pt-12'>
				<div className='mt-5 flex justify-between items-center bg-white max-w-xs md:max-w-sm p-3 gap-4 rounded-full mb-5'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none w-[150%] bg-transparent'
						spellCheck='false'
					/>
					<img
						src={search}
						alt='search'
						className='mr-2'
					/>
				</div>

				<h2 className='font-semibold text-4xl mb-7 leading-loose'>
					Proyek Saya
				</h2>

				<>
					{/* Cards project dibuat oleh saya */}
					<h3 className='font-semibold text-2xl mb-4'>Dibuat oleh Saya</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-center place-content-center justify-items-center'>
						<CardProjectIMade />
					</div>
				</>

				<>
					<h3 className='font-semibold text-2xl mb-4 mt-16'>
						Proyek yang Saya Lamar
					</h3>
					{/* Card project yang saya lamar */}
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-center place-content-center justify-items-center'>
						<CardsProjectApplied />
					</div>
				</>

				<div className='h-5' />
			</div>
		</div>
	)
}

export default MyProject
