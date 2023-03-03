import React from 'react'
import FtHustler from '../../assets/img/Hustler.png'

export default function PopUpHustler({ setShowHustler }) {
	return (
    <>
      <div className="animate-zoom-out justify-center mt-5 fixed inset-0 z-50 ">
        <div className="relative mx-auto flex gap-3 max-w-xl bg-[#ffffff] rounded-2xl px-12 py-5 ">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="p-2"
                type="button"
                onClick={() => setShowHustler(false)}
              >
                X
              </button>
            </div>
            <div>
              <img src={FtHustler} alt="Hustler" className="m-auto" />
            </div>
            <h1 className="text-2xl text-[#22A6B3] text-center font-bold ">
              Hustler
            </h1>
            <p className="text-xl text-center">Si Ahli Marketing dan Bisnis</p>
            <p className="">
              Hustler dituntut dapat menjual ide ke investor, melakukan pitching
              produk ke konsumen, membentuk networking hingga fokus pada masalah
              dalam manajemen perusahaan.
            </p>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black max-w-screen-2x m-auto"></div>
    </>
  );
}
