import  { useState } from "react";
import logo from "../../assets/logo/logo_medium.svg";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Tentang", link: "/" },
    { name: "Role", link: "/" },
  ];

  return (
    <div className=" w-full fixed 3xl:static z-50 top-0 left-0">
      <div className="flex items-center sm:justify-between shadow-[0_3px_20px_rgba(0,0,0,0.25)] sm:h-[9vh] 3xl:h-max bg-[#22A6B3] py-3 sm:px-[3%] px-7 rounded-b-xl 2xl:rounded-b-[1.5em] 3xl:rounded-b-[2em] 4xl:rounded-b-[3.5em] 5xl:rounded-b-[5.5em] 6xl:rounded-b-[7em]">
        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden  left-8 top-[30%] cursor-pointer md:hidden"
        >
          <svg
            name={open ? "close" : "menu"}
            className=" text-white mr-3 cursor-pointer"
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
        </div>
        <div className="flex items-center lg:w-full">
          <img
            src={logo}
            alt="logo"
            className="w-[25%] sm:w-[18%] lg:w-[10%] "
          />
        </div>

        <ul
          className={`font-bold grid gap-5 p-[15%] sm:px-[2%] sm:pt-0 sm:gap- sm:flex sm:items-center left-0 sm:pb-0 pb-9 absolute sm:static bg-[#22A6B3] sm:bg-none sm:z-auto z-[-1] w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in shadow-[0_3px_20px_rgba(0,0,0,0.25)] sm:shadow-none ${
            open ? "top-0 " : "top-[-450%]"
          }`}
        >
          <li
            onClick={() => setOpen(false)}
            className="sm:my-0 text-[#DCDCDC] sm:text-2xl lg:text-[0.95em] xl:text-[1.15em] mt-7"
          >
            <a
              href="#tentang"
              className="text-[#DCDCDC] duration-500 sm:duration-[0s]"
            >
              TENTANG
            </a>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="sm:my-0 text-[#DCDCDC] sm:text-2xl lg:text-[0.95em] xl:text-[1.15em] "
          >
            <a
              href="#role"
              className="text-[#DCDCDC] duration-500 sm:duration-[0s]"
            >
              ROLE
            </a>
          </li>

          <li
            className="text-xl sm:text-2xl lg:text-base xl:text-xl"
            onClick={props.button}
          >
            <a
              href={window.innerWidth < 1024 ? `#footer` : `#`}
              className="text-white"
              onClick={() => setOpen(false)}
            >
              {props.text}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
