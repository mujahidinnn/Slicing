import React from 'react'
import { Link } from 'react-router-dom'
import createProjectCard from '../../assets/img/CreateProjectCard.png'

const CreateProjectCard = () => {
	return (
		<div className='flex w-full h-[200px] bg-[#FCFBFF] mt-5 rounded-xl px-10 py-5 text-gray-900 justify-between'>
			<div className='flex flex-col justify-center gap-[12px]'>
				<h1 className='text-3xl font-bold tracking-wide'>
					Buat Proyekmu Sendiri!
				</h1>
				<p className='text-gray-700'>
					Publish projectmu dan dapatkan co-founder yang sesuai
				</p>
				<Link to="/dashboard/createproject">
				<button className='w-[35%] py-2 border rounded-lg text-white bg-teal-500'>
					Buat Project
				</button>
				</Link>
			</div>
			<div className='relative w-[40%]'>
				<img
					src={createProjectCard}
					alt='idea'
					className='absolute top-[-115px]'
				/>
			</div>
		</div>
	)
}

export default CreateProjectCard

