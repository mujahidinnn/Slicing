import { useState } from "react";
import avatar from "../../assets/img/3D00868 1.png";
import photo from "../../assets/img/user.png";
import ProjectCard from "./ProjectCard";
import PopupRegister from "./PopupRegister";

function Tentang() {
  const [modal, setModal] = useState(false);

  const toogle = () => {
    setModal(true);
  };

  const modalInactive = () => {
    setModal(false);
    // setChangeForm(false);
  };

  return (
    <div className="relative -mt-1 text-white">
      <div className="relative min-h-min lg:h-min bg-[#22A6B3] pt-2.5 lg:pt-5 pl-3">
        <p className="leading-[18px] pb-1 pt-2 sm:px-5 lg:pl-[4%] w-[80%] lg:w-1/2 text-justify text-sm sm:text-xl 2xl:text-[1.5em] 3xl:text-3xl 4xl:text-[2.75em] 5xl:text-[4.6em] 6xl:text-[6em] 2xl:leading-[2.2rem] 3xl:leading-[2.5rem] 4xl:leading-[3.75rem] 5xl:leading-[6rem] 6xl:leading-[8rem] ">
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
        className="-mt-1 sm:-mt-14 lg:-mt-2 xl:-mt-20 4xl:-mt-1 lg:absolute top-20 sm:z-[-1]"
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
        className="absolute w-[37%] top-[20%] sm:top-[13%] lg:top-0 right-0"
      />
      <div className="2xl:leading-[5rem] 3xl:leading-[6rem] 4xl:leading-[7.5rem] 5xl:leading-[12rem] 6xl:leading-[16rem] text-2xl sm:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5em] 6xl:text-[12em] sm:leading-[60px] text-center mt-20 lg:mt-[12%] text-[#22A6B3]">
        <h1>
          Jadilah bagian
          <br />
          dari
          <span className="font-bold"> proyek pilihan mu</span>
        </h1>
      </div>
      <div className="flex lg:justify-center overflow-x-auto lg:overflow-hidden text-black snap-mandatory lg:snap-none snap-x px-[15%] sm:px-10 lg:px-[10%] pt-[3%] pb-5 gap-9">
        {ProjectCard.map((data, index) => {
          return (
            <div
              key={index}
              className="relative flex-[0_0_110%] sm:flex-[0_0_48%]  lg:flex-[0_0_30%] snap-center bg-white border border-[#CDCDCD] shadow-[0_1px_4px_rgba(0,0,0,0.25)] rounded-3xl 3xl:rounded-[2em] 4xl:rounded-[3em] 5xl:rounded-[4em] p-6 lg:p-[2.2%]"
            >
              <div className="flex">
                <div className="flex justify-center items-center rounded-full bg-gray-500 p-[1%] ">
                  <img
                    src={photo}
                    className="rounded-full w-10 sm:w-12 lg:w-10 2xl:w-[3.5rem] 3xl:w-[3.75rem] 4xl:w-[4.75rem] 5xl:w-[6.75rem] 6xl:w-[9em]"
                  />
                </div>
                <div className="ml-3 lg:ml-[4.5%] 2xl:ml-[3.5%]">
                  <h1 className="font-bold sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-5xl 6xl:text-[4em] ">
                    {data.user}
                  </h1>
                  <h3 className="4xl:mt-1 5xl:mt-2 6xl:mt-4 text-[13.5px] sm:text-[15px] lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-[1.7em] 5xl:text-4xl 6xl:text-[3em] ">
                    {data.as}
                  </h3>
                </div>
              </div>
              <h5 className="font-bold sm:text-xl lg:text-sm xl:text-base 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2.05em] 5xl:text-[3.1em] 6xl:text-[4.1em] text-[#22A6B3] leading-3 4xl:leading-none mt-8 lg:mt-[7%] ">
                {data.title}
              </h5>
              <p className="mt-3 lg:mt-[5%] sm:text-xl lg:text-sm xl:text-base 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2.05em] 5xl:text-[3.1em] 6xl:text-[4.1em] 3xl:leading-9 4xl:leading-[145%] ">
                {data.desc}
              </p>
              <button
                onClick={toogle}
                className="border sm:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-[2em] 5xl:text-[3.1em] 6xl:text-[4.1em] border-[#22A6B3] hover:bg-[#22A6B3] text-[#22A6B3] hover:text-white py-1.5 lg:py-[2.7%] 4xl:py-[3.5%] 5xl:py-[5%] px-3 mt-5 lg:mt-[9%] rounded-xl w-full duration-500"
              >
                Lihat selengkapnya
              </button>
            </div>
          );
        })}
      </div>
      {modal ? <PopupRegister toogle={modalInactive} /> : null}
      <div className="text-center text-[#22A6B3] mb-10 3xl:mt-5 4xl:mt-6 5xl:mt-20 ">
        <button onClick={toogle}>
          <p className="sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-[2.5em] 5xl:text-[3.5em] 6xl:text-[4.5em] ">
            Lihat lebih banyak ➔
          </p>
        </button>
      </div>
    </div>
  );
}

export default Tentang;
