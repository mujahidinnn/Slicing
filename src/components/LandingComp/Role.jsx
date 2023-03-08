import RoleCard from "./RoleCard";

function Role() {
  return (
    <div className="relative w-full pb-16 lg:pb-[10vh] ">
      <div id="role" className="absolute top-[10%] 5xl:top-[35%" />
      <svg
        className="relative -z-20 rotate-180"
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
      <div className="bg-[#22A6B3] h-14 sm:h-40 lg:h-[50vh] -mt-1">
        <h1 className="text-white text-xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5em] 6xl:text-[11.5em] text-center -mt-5 sm:-mt-20 lg:mt-[-10%] lg:leading-[3rem] xl:leading-[4rem] 2xl:leading-[5.5rem] 3xl:leading-[6.5rem] 4xl:leading-[8rem] 5xl:leading-[13rem] 6xl:leading-[17rem] ">
          Siapa saja yang
          <span className="font-bold"> berperan</span>
          <br />
          dalam sebuah
          <span className="font-bold"> Start-Up</span>?
        </h1>
      </div>
      <div className="flex lg:justify-center bg-[#22A6B3] lg:bg-transparent overflow-x-auto lg:overflow-hidden text-black snap-mandatory lg:snap-none snap-x px-[15%] sm:px-10 lg:px-[10%] pt-20 xl:pt-[6%] pb-5 -mt-[1px] lg:-mt-36 xl:-mt-40 2xl:mt-[-13rem] 3xl:mt-[-14rem] 4xl:mt-[-19rem] 5xl:mt-[-27rem] 6xl:mt-[-34rem] gap-9 3xl:gap-12 4xl:gap-14 5xl:gap-20 6xl:gap-32 ">
        {RoleCard.map((data, index) => {
          return (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_30%] border border-[#CDCDCD] snap-center bg-white text-justify shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-3xl 4xl:rounded-[2.75rem] 5xl:rounded-[4.5rem] 6xl:rounded-[6rem] p-6 lg:p-[2.5%] "
            >
              <div className="">
                <img
                  src={data.image}
                  alt={data.role}
                  className="absolute top-[-120px] 2xl:top-[-180px] 3xl:top-[-200px] 4xl:top-[-290px] 5xl:top-[-430px] 6xl:top-[-580px] inset-x-2 w-[250px] sm:w-[325px] lg:w-[100%] z-[10]"
                />
                <img
                  src={data.bg}
                  className="absolute w-[65%] top-[-70px] lg:top-[-18%] left-[20%] sm:left-10 xl:left-[15%] sm:w-[250px] lg:w-[70%] z-[1]"
                />
              </div>
              <h1 className="text-[#22A6B3] text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-[3.5em] 5xl:text-[6em] 6xl:text-[8.25em] font-bold text-center pt-20 sm:pt-40 lg:pt-[50%]">
                {data.role}
              </h1>

              <h3 className="2xl:mt-1 3xl:mt-2.5 4xl:mt-5 5xl:mt-12 6xl:mt-16 text-sm sm:text-xl lg:text-sm xl:text-base 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2.05em] 5xl:text-[3.1em] 6xl:text-[4.1em] text-center">
                {data.as}
              </h3>
              <p className="text-gray-700 mt-3 lg:mt-1 xl:mt-2 2xl:mt-4 4xl:mt-6 5xl:mt-10 6xl:mt-16 text-sm sm:text-xl lg:text-sm xl:text-base 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2.05em] 5xl:text-[3.1em] 6xl:text-[4.1em] 3xl:leading-9 4xl:leading-[145%] ">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
      <p className="lg:hidden sm:text-2xl text-center text-white bg-[#22A6B3] pb-5 -mt-1 rounded-b-3xl">
        <span className="font-bold">Daftarkan </span>
        dirimu!
      </p>
    </div>
  );
}

export default Role;
