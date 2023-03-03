import React from "react";
import { Link } from "react-router-dom";
import FtSuccees from "../../assets/img/Hacker.png";

export default function PopUpSuccess() {
  return (
    <>
      <div className="animate-zoom-out justify-center pt-32 fixed inset-0 z-50 ">
        <div className="max-w-max bg-white rounded-3xl pl-[24px] pr-[38px] pt-6 pb-8 m-auto ">
          <div className="flex">
            <img
              src={FtSuccees}
              alt="Oppss, Sorry"
              className=" xl:h-60 lg:h-56 md:h-44 sm:h-32 xsm:h-28"
            />
            <div>
              <p className="font-extralight mr-[-25px] xl:text-2xl lg:text-xl md:text-sm md:mb-5 sm:text-xs sm:mb-2 xsm:w-xl flex justify-end">
                <Link to="/dashboard/explore" className="px-2">
                  ✕
                </Link>
              </p>
              <span className=" text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  font-extrabold ">
                Berhasil membuat proyek,
              </span>
              <br />
              <p className="text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  ">
                proyek anda akan muncul
              </p>
              <p className="text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
                pada laman explore
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black max-w-screen-2x m-auto"></div>
    </>
  );
}
