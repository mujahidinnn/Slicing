import React, { useState } from "react";
import avatar from "../../assets/img/3D00868.png";
import ProjectCard from "./ProjectCard";
import PopupRegister from "./PopupRegister";

function Tentang() {
  const [modal, setModal] = useState(false);

  const toogle = () => {
    setModal(true);
  };

  return (
    <div className="relative -mt-1 text-white">
      <div className="sm:hidde min-h-min sm:h-min bg-[#22A6B3] pt-2.5 sm:pt-5 pl-3">
        <p className="leading-[13.5px] pb-1 pt-2 sm:px-14 w-[80%] sm:w-1/2 text-justify text-sm sm:text-xl">
          Sebuah solusi bagi team-seekers yang
          <span className="font-bold">
            {" "}
            membutuhkan partner dengan skill tertentu.{" "}
          </span>
          Kamu dapat
          <span className="font-bold"> memamerkan idemu </span>
          untuk memulai membangun bisnis yang menarik orang seminat. Kamu juga
          dapat
          <span className="font-bold"> bergabung dengan proyek </span>
          yang membutuhkan orang seperti dirimu!
        </p>
      </div>
      <svg
        className="-mt-1 sm:absolute top-10 sm:z-[-1]"
        viewBox="0 0 1280 313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_552_1035)">
          <path
            d="M0 299C497.063 174.492 777.444 175.036 1280 299V0H0V299Z"
            fill="#22A6B3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_552_1035"
            x="-10"
            y="-6"
            width="1300"
            height="319"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_552_1035"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_552_1035"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={avatar}
        className="absolute w-[37%] top-[16%] sm:top-0 right-0"
      />
      <div className="text-2xl sm:text-5xl text-center mt-20 sm:mt-[270px] text-[#22A6B3]">
        <h1>
          Jadilah bagian
          <br />
          dari
          <span className="font-bold"> proyek pilihan mu</span>
        </h1>
      </div>
      <div className="flex sm:justify-center overflow-x-auto sm:overflow-hidden text-black snap-mandatory sm:snap-none snap-x px-[15%] sm:px-[10%] pt-10 pb-5 gap-9">
        {ProjectCard.map((data, index) => {
          return (
            <div
              key={index}
              className="relative flex-[0_0_110%] sm:flex-[0_0_30%] snap-center bg-white border border-[#CDCDCD] shadow-[0_1px_4px_rgba(0,0,0,0.25)] rounded-3xl p-6"
            >
              <div className="flex">
                <div className="rounded-full bg-gray-500 w-10 h-10">
                  <img src={avatar} className="rounded-full" />
                </div>
                <div className="ml-3">
                  <h1 className="font-bold">{data.user}</h1>
                  <h3 className="font-[500]  leading-4 text-[13.5px]">
                    {data.as}
                  </h3>
                </div>
              </div>
              <h5 className="font-bold text-[#22A6B3] leading-3 mt-10">
                {data.title}
              </h5>
              <p className="text-sm pt-3">{data.desc}</p>
              <button
                onClick={toogle}
                className="border border-[#22A6B3] hover:bg-[#22A6B3] text-[#22A6B3] hover:text-white py-1.5 px-3 mt-5 rounded-xl w-full"
              >
                Lihat selengkapnya
              </button>
            </div>
          );
        })}
      </div>
      {modal ? <PopupRegister setModal={setModal} /> : null}
      <div className="text-center text-[#22A6B3] mb-10">
        <button onClick={toogle}>
          <a href="#">Lihat lebih banyak ➔</a>
        </button>
      </div>
    </div>
  );
}

export default Tentang;
