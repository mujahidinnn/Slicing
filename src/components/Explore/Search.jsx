import React from 'react'
import { SlMagnifier } from 'react-icons/sl'

const Search = ({ handleChange, search }) => {
	return (
		<div className='w-[20%] relative text-gray-500'>
			<input
				type='text'
				placeholder='Search'
				className='w-full rounded-[30px] px-3 py-2 text-[14px] bg-[#FCFBFF]'
				value={search}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<SlMagnifier className='absolute right-4 top-[11px] text-[14px]' />
		</div>
	)
}

export default Search
