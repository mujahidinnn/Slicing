import React from 'react'
import { dataNotifikasi } from './dataNotification'

const Notification = () => {
	return (
		<div className='bg-slate-100 z-50 flex h-screen w-full overflow-x-hidden'>
			<div className='flex flex-col items-center w-screen px-9'>
				<div className='pt-20 text-2xl font-bold w-full px-4'>
					<h1 className='text-4xl'>Notifikasi</h1>
				</div>
				<div className='mt-8 w-full flex flex-col'>
					{dataNotifikasi.map((notif) => {
						return (
              <div
                key={notif.id}
                className="bg-white p-3 w-[98%] rounded-xl border-l-[10px] border-[#B1DAE7] mt-5 hover:border-teal-400 hover:bg-[#DDEEF3]"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                  <div>
                    <p className="text-[#22A6B3] text-base lg:text-xl">{notif.title}</p>
                    <div className="">
                      <span className="font-semibold text-gray-700 text-sm lg:text-lg">
                        {notif.category}
                      </span>
                      <p className="text-gray-500 text-xs lg:text-base">{notif.desc}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col 	items-start lg:items-center">
                    <p className="text-[#DC3F3F] text-sm lg:text-base">
                      {notif.isRead ? "" : "Belum dibaca"}
                    </p>
                    <span className="text-gray-500 text-sm lg:text-base">
                      01-01-2023 13:44
                    </span>
                    {notif.isApproved && (
                      <div className="flex gap-2">
                        <button className="text-white px-2 py-1 w-max bg-green-500 rounded-xl  text-sm lg:text-base">
                          Terima
                        </button>
                        <button className="text-white px-2 py-1 w-max bg-red-500 rounded-xl  text-sm lg:text-base">
                          Batalkan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
					})}
					<div className='h-[5vh]'/>
				</div>
			</div>
		</div>
	)
}

export default Notification
