import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
// hamburger
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import Popup from "./PopupLogout";
import { useState } from "react";
import profile from "../../assets/img/img.png";
import { Link, useLocation } from "react-router-dom";

const Hamburger = () => {
  const [modalOn, setModalOn] = useState(false);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleOnClose = () => setModalOn(false);

  return (
    <>
      <div className="flex justify-between items-center fixed bg-white shadow-md w-full p-3 z-[999]">
        <HiOutlineMenuAlt2
          size={30}
          onClick={() => setShow(!show)}
          className="cursor-pointer"
        />
        <p className="text-[#22A6B3] font-semibold text-lg">
          {pathname === "/dashboard/explore"
            ? "Explore"
            : pathname === "/dashboard/myproject"
            ? "Proyek Saya"
            : pathname === "/dashboard/myprofile"
            ? "Profil Saya"
            : pathname === "/dashboard/notification"
            ? "Notifikasi"
            : null}
        </p>
      </div>
      <div className="flex w-full">
        <div
          className={`${
            show ? "left-0" : "left-[-100%]"
          } fixed z-[999] top-0 transition-all duration-500 ease-in-out py-10 overflow-hidden h-screen border-r w-[80%] bg-white shadow-md rounded-tr-xl rounded-br-xl`}
        >
          <div
            className="float-right relative -top-5 right-5 text-gray-700 text-3xl cursor-pointer"
            onClick={() => setShow(!show)}
          >
            ×
          </div>
          <div className="flex h-[80vh] flex-col justify-between pt-2 pb-6">
            <div className="my-10">
              <div className="m-2 relative flex items-center gap-[10px]">
                <img src={profile} alt="" className="ml-2" />
                <div>
                  <span className="font-semibold">Vellya Riona</span>
                  <p className="text-sm">vellyariona@gmail.com</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 tracking-wide text-xl">
                <li className="min-w-max">
                  <Link
                    to="/dashboard/explore"
                    className={`${
                      pathname === "/dashboard/explore"
                        ? "text-[#22A6B3]"
                        : "text-black hover:text-[#22A6B3]"
                    } relative group flex items-center gap-5 space-x-4 bg-gradient-to-r px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <AiOutlineHome size={33} className="ml-[6px]" />
                    <span className="fill-current">Explore</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/dashboard/myproject"
                    className={`${
                      pathname === "/dashboard/myproject"
                        ? "text-[#22A6B3]"
                        : "text-black hover:text-[#22A6B3]"
                    } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <AiOutlineFolderOpen size={33} className="ml-[6px]" />
                    <span className="fill-current ">Proyek Saya</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/dashboard/myprofile"
                    className={`${
                      pathname === "/dashboard/myprofile"
                        ? "text-[#22A6B3]"
                        : "text-black hover:text-[#22A6B3]"
                    } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <AiOutlineUser size={33} className="ml-[6px]" />
                    <span className=" fill-current  ">Profil Saya</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full -mb-3 align-center text-xl">
              <Link
                to="/dashboard/notification"
                className={`${
                  pathname === "/dashboard/notification"
                    ? "text-[#22A6B3]"
                    : "text-black hover:text-[#22A6B3]"
                } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                onClick={() => setShow(false)}
              >
                <MdNotificationsNone size={33} className="ml-[6px]" />
                <span className="fill-current ">Notifikasi</span>
              </Link>
              <div
                className="group flex items-center gap-5  space-x-4 rounded-md px-4 py-3 text-xl hover:text-[#22A6B3] cursor-pointer"
                onClick={() => {
                  setModalOn(true);
                  setShow(false);
                }}
              >
                <IoMdExit size={33} className="ml-[6px]" />
                <span className="fill-current ">Keluar</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[20%]  h-full fixed ${
            show ? "right-0" : "-right-[20%]"
          } bg-transparent z-[999] transition-all duration-500 ease-in-out `}
          onClick={() => setShow(false)}
        ></div>
      </div>
      {modalOn && <Popup setModalOn={setModalOn} onClose={handleOnClose} />}
    </>
  );
};
export default Hamburger;
