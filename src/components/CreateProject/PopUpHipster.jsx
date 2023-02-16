import React from "react";
import FtHipster from "../../assets/img/Hipster.png";

export default function PopUp({ setShowHipster }) {
  return (
    <>
      <div className="justify-center mt-5 fixed inset-0 z-50 ">
        <div className="relative mx-auto flex gap-3 max-w-xl bg-[#ddd] rounded-2xl px-12 py-5 ">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="p-2"
                type="button"
                onClick={() => setShowHipster(false)}
              >
                X
              </button>
            </div>
            <div className="bg-[url('/src/assets/Ellipse4.png')] bg-no-repeat bg-center ">
              <img src={FtHipster} alt="Hustler" className="m-auto" />
            </div>
            <h1 className="text-2xl text-[#22A6B3] text-center font-bold ">
              Hipster
            </h1>
            <p className="text-xl text-center">Si Desainer</p>
            <p className="">
              Seorang ahli di bidang desain pengalaman pengguna yang berfokus
              pada kesenangan pelanggan hingga perusahaan melalui visualisasi
              menarik serta interaksi yang baik.
            </p>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black max-w-screen-2x m-auto"></div>
    </>
  );
}
