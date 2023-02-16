import React from "react";
import { dataNotifikasi } from "./dataNotification";

const Notification = () => {
  return (
    <div className="bg-[#D8D8D8]  inset-0 z-50 flex h-screen">
      <div className="flex flex-col items-center w-screen">
        <div className="p-5 text-2xl font-bold">
          <h1 className="text-4xl left-36 absolute">Notifikasi</h1>
        </div>
        <div className="mt-8 w-full flex flex-col items-center justify-center ml-20">
          {dataNotifikasi.map((notif) => {
            return (
              <div key={notif.id} className="bg-[#F3F5F9] p-3 w-[90%] rounded-xl border-l-[10px] border-[#DDEEF3] mt-5 hover:border-teal-500 hover:bg-[#DDEEF3]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#22A6B3]">{notif.title}</p>
                    <div className="">
                      <span className="font-bold">{notif.category}</span>
                      <p className="text-gray-500">{notif.desc}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center">
                    <p className="text-[#DC3F3F]">
                      {notif.isRead ? "" : "Belum dibaca"}
                    </p>
                    <span className="text-gray-500">01-01-2023; 13:44</span>
                    {notif.isApproved && (
                      <div className="flex gap-2">
                        <button className="py-1 w-[90px] bg-green-500 rounded-xl">
                          Terima
                        </button>
                        <button className="py-1 w-[90px] bg-red-500 rounded-xl">
                          Batalkan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
