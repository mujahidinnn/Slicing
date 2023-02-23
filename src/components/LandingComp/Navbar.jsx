import React from "react";
import logo from "../../assets/logo/logo_medium.svg";

const Navbar = (props) => {
  return (
    <div className="font-bold shadow-[0_3px_20px_rgba(0,0,0,0.25)] text-white w-full h-[60px] sm:h-[80px] lg:h-[10vh] flex sm:justify-between items-center rounded-b-3xl 2xl:rounded-b-[1.5em] 3xl:rounded-b-[2em] 4xl:rounded-b-[3.5em] 5xl:rounded-b-[5.5em] 6xl:rounded-b-[7em] -mt-1 px-5 sm:px-[3%] 5xl:px-[5] bg-[#22A6B3]">
      <svg
        className="sm:hidden text-white mr-3"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.66666 7C3.66666 6.44772 4.11437 6 4.66666 6H23.3333C23.8856 6 24.3333 6.44772 24.3333 7C24.3333 7.55228 23.8856 8 23.3333 8H4.66666C4.11437 8 3.66666 7.55228 3.66666 7ZM3.66666 14C3.66666 13.4477 4.11437 13 4.66666 13H23.3333C23.8856 13 24.3333 13.4477 24.3333 14C24.3333 14.5523 23.8856 15 23.3333 15H4.66666C4.11437 15 3.66666 14.5523 3.66666 14ZM3.66666 21C3.66666 20.4477 4.11437 20 4.66666 20H23.3333C23.8856 20 24.3333 20.4477 24.3333 21C24.3333 21.5523 23.8856 22 23.3333 22H4.66666C4.11437 22 3.66666 21.5523 3.66666 21Z"
          fill="white"
        />
      </svg>
      <img src={logo} alt="logo" className="w-[25%] sm:w-[18%] lg:w-[8%]" />
      <ul className="hidden sm:flex sm:items-center sm:gap-6 lg:gap-[12%] mr-[6%]">
        <li className="text-[#DCDCDC] sm:text-2xl lg:text-[0.95em] xl:text-[1.15em] 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2em] 5xl:text-[3.3em] 6xl:text-[4em]">
          <a href="#tentang">TENTANG</a>
        </li>
        <li className="text-[#DCDCDC] sm:text-2xl lg:text-[0.95em] xl:text-[1.15em] 2xl:text-[1.3em] 3xl:text-[1.55em] 4xl:text-[2em] 5xl:text-[3.3em] 6xl:text-[4em]">
          <a href="#role">ROLE</a>
        </li>
        <li className="text-xl sm:text-2xl lg:text-base xl:text-xl 2xl:text-[1.5em] 3xl:text-[1.7em] 4xl:text-[2.25em] 5xl:text-[3.5em] 6xl:text-[4.5em]">
          <button onClick={props.button}>
            <a href={props.href}>{props.text}</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
