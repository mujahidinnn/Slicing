import React, { useState } from 'react'
import { v4 as id } from 'uuid'
import PopUpHipster from './PopUpHipster'
import PopUpHacker from './PopUpHacker'
import PopUpHustler from './PopUpHustler'
import Succees from './PopUpSuccees'

export default function CreateProject() {
	// ~~~Tentang Proyek~~~
	const [judulProject, setJudulProject] = useState('')
	const [dataJudulProject, setDataJudulProject] = useState([])
	const [namaProgram, setNamaProgram] = useState('')
	const [dataNamaProgram, setDataNamaProgram] = useState([])
	const [deskripsiProject, setDeskripsiProject] = useState('')
	const [dataDeskripsiProject, setDataDeskripsiProject] = useState([])
	const [detailRekutmen, setDetailRekutmen] = useState('')
	const [dataDetailRekutmen, setDataDetailRekutmen] = useState([])
	const [kategori, setKategori] = useState()
	const [data, setData] = useState()

	// Kategori
	const [inputLainnya, setInputLainnya] = useState('')
	const [dataInputLainnya, setDataInputLainnya] = useState('')

	// durasi
	const [durasiPengerjaan, setDurasiPengerjaan] = useState(0)

	// ~~~Tentang Rekrutmen~~~
	const [hustler, setHustler] = useState(0)
	const [hacker, setHacker] = useState(0)
	const [hipster, setHipster] = useState(0)
	const [showHipster, setShowHipster] = useState(0)
	const [showHacker, setShowHacker] = useState(0)
	const [showHustler, setShowHustler] = useState(0)
	const [showSuccees, setShowSuccees] = useState(false)

	function kode() {
		return id
	}

	// `~`~`~`~`~`~`~`~function~`~`~`~`~`~`~`~`
	// ~~~Left~~~
	const durasiPlus = (e) => {
		e.preventDefault()
		if (durasiPengerjaan > 11) {
			return false
		} else {
			setDurasiPengerjaan(durasiPengerjaan + 1)
		}
	}
	const durasiMint = (e) => {
		e.preventDefault()
		if (durasiPengerjaan <= 0) {
			return false
		} else {
			setDurasiPengerjaan(durasiPengerjaan - 1)
		}
	}

	// ~~~Hustler~~~
	const hustlerPlus = (e) => {
		e.preventDefault()
		setHustler(hustler + 1)
	}
	const hustlerMint = (e) => {
		e.preventDefault()
		if (hustler <= 0) {
			return false
		} else {
			setHustler(hustler - 1)
		}
	}
	function Hustlers(e) {
		e.preventDefault()

		setShowHustler(true)
	}
	// ~~~Hacker~~~
	const hackerplus = (e) => {
		e.preventDefault()
		setHacker(hacker + 1)
	}
	const hackerMint = (e) => {
		e.preventDefault()
		if (hacker > 0) {
			setHacker(hacker - 1)
		}
	}
	function Hackers(e) {
		e.preventDefault()

		setShowHacker(true)
	}
	// ~~~Hispter~~~
	const hipsterplus = (e) => {
		e.preventDefault()
		setHipster(hipster + 1)
	}
	const hipsterMint = (e) => {
		e.preventDefault()
		if (hipster > 0) {
			setHipster(hipster - 1)
		}
	}
	function Hipsters(e) {
		e.preventDefault()

		setShowHipster(true)
	}

	function saveData(e) {
		e.preventDefault()

		{
			setDataJudulProject(judulProject)
			setDataNamaProgram(namaProgram)
			setDataDeskripsiProject(deskripsiProject)
			setDataDetailRekutmen(detailRekutmen)
			setDataInputLainnya(inputLainnya)
		}
		const kumpulanData = [
			dataJudulProject,
			dataNamaProgram,
			kategori,
			dataInputLainnya,
			dataDeskripsiProject,
			durasiPengerjaan,
			hustler,
			hacker,
			hipster,
			dataDetailRekutmen,
		]
		setJudulProject('')
		setNamaProgram('')
		setKategori('')
		setInputLainnya('')
		setDurasiPengerjaan(0)
		setDeskripsiProject('')
		setHustler(0)
		setHacker(0)
		setHipster(0)
		setDetailRekutmen('')
		setData(kumpulanData)
		setShowSuccees(true)
		return
	}
	return (
		<>
			{/* pembungkus */}
			<div className='animate-to-right pr-[6%] sm:pr-[3%] pl-[10%] max-w-screen-2x bg-[#F3F5F9] h-screen m-auto pb-10'>
				{/* Create Project */}
				<p className='pt-[49px] text-4xl sm:text-5xl font-bold'>Buat Proyek</p>
				<form
					onSubmit={saveData}
					className='md:flex justify-between'>
					<div className='md:w-[55%] w-full mt-[45px] mr-16'>
						<div>
							<p className=' text-2xl text-[#22A6B3] font-bold'>
								Tentang Proyek
							</p>
							<br />

							{/* Judul project */}
							<p>
								Judul Proyek <span className='text-[#F63333]'>*</span>
							</p>
							<input
								type='text'
								value={judulProject}
								onChange={(e) => setJudulProject(e.target.value)}
								placeholder='Berikan judul singkat untuk Projectmu'
								className=' px-2 py-2 border border-[#22A6B3] outline-none rounded-md w-full'
							/>

							{/* Nama Program */}
							<p className=' mt-4'>
								Nama Program <span className='text-[#F63333]'>*</span>
							</p>
							<input
								type='text'
								value={namaProgram}
								onChange={(e) => setNamaProgram(e.target.value)}
								placeholder='Program yang di ikuti dalam pengadaan project ini'
								className=' px-2 py-2 border border-[#22A6B3] outline-none rounded-md w-full'
							/>

							{/* Kategori */}
							<p className=' mt-4'>
								Kategori <span className='text-[#F63333]'>*</span>
							</p>
							{/* <div className="grid grid-rows-1 grid-flow-col gap-x-5"> */}
							<div className='sm:flex justify-between flex-wrap'>
								<div>
									<div className='my-2 flex items-center'>
										<input
											type='radio'
											name='kategori'
											value='Pendidikan'
											onChange={(e) => setKategori(e.target.value)}
											checked={kategori === 'Pendidikan'}
										/>
										<label className='ml-2'>Pendidikan</label>
									</div>
									<div className='flex items-center'>
										<input
											type='radio'
											name='kategori'
											value='Kesehatan'
											onChange={(e) => setKategori(e.target.value)}
											checked={kategori === 'Kesehatan'}
										/>
										<label className='ml-2'>Kesehatan</label>
									</div>
								</div>
								<div>
									<div className='my-2 flex items-center'>
										<input
											type='radio'
											name='kategori'
											value='Perdagangan'
											onChange={(e) => setKategori(e.target.value)}
											checked={kategori === 'Perdagangan'}
										/>
										<label className='ml-2'>Perdagangan</label>
									</div>
									<div className='flex items-center'>
										<input
											type='radio'
											name='kategori'
											value='Teknologi'
											onChange={(e) => setKategori(e.target.value)}
											checked={kategori === 'Teknologi'}
										/>
										<label className='ml-2'>Teknologi</label>
									</div>
								</div>
								<div className='w-1/3 '>
									<div className='my-2 flex items-center'>
										<input
											type='radio'
											name='kategori'
											value='Lainnya'
											onChange={(e) => setKategori(e.target.value)}
											checked={kategori === 'Lainnya'}
										/>
										<label className='ml-2'> Lainnya:</label>
									</div>
									<div>
										<input
											type='text'
											name='kategori'
											value={inputLainnya}
											onChange={(e) => {
												setInputLainnya(e.target.value)
											}}
											placeholder='Ketik kategori lainnya'
											className='px-2 border-b-[1px] w-full border-b-black  bg-transparent outline-none'
										/>
									</div>
								</div>
							</div>

							{/* Durasi project */}
							<p className='mt-5  font-Poppins'>Durasi Pengerjaan</p>
							<div className='mt-2'>
								<button
									type='submit'
									onClick={durasiMint}
									className='border border-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3] p-2 rounded-l-[10px]'>
									-
								</button>
								<span
									type='submit'
									className='border border-y-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3] py-2 px-4'>
									{durasiPengerjaan}
								</span>
								<button
									type='submit'
									onClick={durasiPlus}
									className='border border-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3]  p-2 rounded-r-[10px] mr-5'>
									+
								</button>
								<span>Bulan</span>
							</div>
							<br />

							{/* Deskripsi */}
							<p>
								Deskripsi Proyek<span className='text-[#F63333]'> *</span>
							</p>
							<textarea
								type='text'
								value={deskripsiProject}
								onChange={(e) => setDeskripsiProject(e.target.value)}
								placeholder='Ceritakan selengkapnya mengenai detail proyek yang kamu buat'
								className='w-[100%] h-[126px] px-2 py-1 border border-[#22A6B3] rounded-lg outline-none scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200'
								style={{ resize: 'none' }}></textarea>
						</div>
					</div>
					<div className='w-full md:w-[50%] mt-[45px]'>
						{/* Role yang dibutuhkan dalam project */}
						<p className='text-2xl text-[#22A6B3] font-bold '>
							Tentang Rekrutmen
						</p>
						<br />
						<div>
							<p>
								Personil yang di butuhkan
								<span className='text-[#F63333]'> *</span>
							</p>
							<div className='pt-3'>
								<button
									type='submit'
									onClick={hustlerMint}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]'>
									-
								</button>
								<span
									type='submit'
									className='border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] py-2 px-4'>
									{hustler}
								</span>
								<button
									type='submit'
									onClick={hustlerPlus}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]'>
									+
								</button>
								<span className='ml-2'>
									Sebagai
									<a
										href='/'
										onClick={Hustlers}
										className='ml-2 text-[#22A6B3]'>
										Hustler
									</a>
								</span>
								{showHustler ? (
									<PopUpHustler setShowHustler={setShowHustler} />
								) : null}
							</div>
							<div className='pt-2'>
								<button
									type='submit'
									onClick={hackerMint}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]'>
									-
								</button>
								<span
									type='submit'
									className='border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 py-2 px-4'>
									{hacker}
								</span>
								<button
									type='submit'
									onClick={hackerplus}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]'>
									+
								</button>
								<span className='ml-2'>
									Sebagai
									<a
										href='/'
										onClick={Hackers}
										className='ml-2 text-[#22A6B3]'>
										Hacker
									</a>
								</span>
								{showHacker ? (
									<PopUpHacker setShowHacker={setShowHacker} />
								) : null}
							</div>
							<div className='pt-2'>
								<button
									type='submit'
									onClick={hipsterMint}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]'>
									-
								</button>
								<span
									type='submit'
									className='border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 py-2 px-4'>
									{hipster}
								</span>
								<button
									type='submit'
									onClick={hipsterplus}
									className='border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]'>
									+
								</button>
								<span className='ml-2'>
									Sebagai
									<a
										href='/'
										onClick={Hipsters}
										className='ml-2 text-[#22A6B3] '>
										Hipster
									</a>
								</span>
								{showHipster ? (
									<PopUpHipster setShowHipster={setShowHipster} />
								) : null}
							</div>
							<br />
							<p className=' mb-2'>
								Detail Rekrutmen <span className='text-[#F63333]'>*</span>
							</p>

							{/* Detail role */}
							<textarea
								type='text'
								value={detailRekutmen}
								onChange={(e) => setDetailRekutmen(e.target.value)}
								placeholder='Ceritakan detail rekrutmen dan persyaratan'
								className='w-full h-[126px] px-2 py-1 border border-[#22A6B3] rounded-lg outline-none bg-[#FCFBFF] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200'
								style={{ resize: 'none' }}></textarea>
						</div>

						{/* Unggah project */}
						<button
							type='submit'
							className='bg-[#22A6B3] px-3 py-1 rounded-lg text-[#FCFBFF] mt-5 '>
							Unggah project
						</button>
						{showSuccees ? <Succees /> : null}
					</div>
				</form>
			</div>
			<ul className='m-auto max-w-screen-2x'>{data}</ul>
		</>
	)
}
