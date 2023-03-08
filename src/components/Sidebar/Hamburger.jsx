import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "./PopupLogout";

// Icons
import { BiUser } from "react-icons/bi";
import { HiOutlineHome, HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";
import profile from "../../assets/img/img.png";

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
          className="cursor-pointer select-none"
        />
        <p className="text-[#22A6B3] font-semibold text-lg pr-2 select-none">
          {pathname === "/dashboard/explore"
            ? "Explore"
            : pathname === "/dashboard/myproject"
            ? "Proyek Saya"
            : pathname === "/dashboard/myprofile"
            ? "Profil Saya"
            : pathname === "/dashboard/editprofile"
            ? "Edit Profil"
            : pathname === "/dashboard/notification"
            ? "Notifikasi"
            : pathname === "/dashboard/createproject"
            ? "Buat Proyek"
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
            className="float-right relative -top-5 right-5 text-gray-700 text-3xl cursor-pointer select-none"
            onClick={() => setShow(!show)}
          >
            ×
          </div>
          <div className="flex h-[80vh] flex-col justify-between pt-2 pb-6 select-none">
            <div className="my-10">
              <Link to="/dashboard/myprofile" onClick={() => setShow(false)}>
                <div className="m-2 mr-0 relative flex items-center gap-[10px]">
                  <img src={profile} alt="" className="ml-2" />
                  <div>
                    <span className="font-semibold text-gray-800">
                      Vellya Riona
                    </span>
                    <p className="text-sm text-gray-700">
                      vellyariona@gmail.com
                    </p>
                  </div>
                </div>
              </Link>
              <ul className="mt-6 space-y-2 tracking-wide text-xl">
                <li className="min-w-max">
                  <Link
                    to="/dashboard/explore"
                    className={`${
                      pathname === "/dashboard/explore"
                        ? "text-[#22A6B3]"
                        : "text-gray-700 hover:text-[#22A6B3]"
                    } relative group flex items-center gap-5 space-x-4 px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <HiOutlineHome size={33} className="ml-[6px]" />
                    <span className="fill-current">Explore</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/dashboard/myproject"
                    className={`${
                      pathname === "/dashboard/myproject"
                        ? "text-[#22A6B3]"
                        : "text-gray-700 hover:text-[#22A6B3]"
                    } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <HiOutlineFolderMinus size={33} className="ml-[6px]" />
                    <span className="fill-current ">Proyek Saya</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/dashboard/myprofile"
                    className={`${
                      pathname === "/dashboard/myprofile"
                        ? "text-[#22A6B3]"
                        : "text-gray-700 hover:text-[#22A6B3]"
                    } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                    onClick={() => setShow(false)}
                  >
                    <BiUser size={33} className="ml-[6px]" />
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
                    : "text-gray-700 hover:text-[#22A6B3]"
                } bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3`}
                onClick={() => setShow(false)}
              >
                <IoNotificationsOutline size={33} className="ml-[6px]" />
                <span className="fill-current ">Notifikasi</span>
              </Link>
              <div
                className="group flex items-center gap-4  space-x-4 rounded-md px-4 py-3 text-xl hover:text-[#22A6B3] cursor-pointer"
                onClick={() => {
                  setModalOn(true);
                  setShow(false);
                }}
              >
                <IoLogOutOutline size={33} className="ml-[10px]" />
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
