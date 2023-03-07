import React from 'react'
import { SlMagnifier } from 'react-icons/sl'

const ProjectSearch = ({ handleChange, search }) => {
	return (
		<div className='w-max relative text-gray-500'>
			<input
				type='text'
				placeholder='Search'
				className='w-full rounded-[30px] px-5 py-4 text-[18px] bg-[#FCFBFF] outline-none'
				value={search}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<SlMagnifier size={24} className='absolute right-4 top-[16px] text-[14px]' />
		</div>
	)
}

export default ProjectSearch
