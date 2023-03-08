import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "./PopupLogout";

// Icons
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import profile from "../../assets/img/img.png";


const Sidebar = () => {
  const [modalOn, setModalOn] = useState(false);
  const { pathname } = useLocation();

  const handleOnClose = () => setModalOn(false);

  return (
    <>
      <div className=" bg-white fixed top-0 left-0 z-[999] rounded-br-xl rounded-tr-xl">
        <div className="py-10 w-[5rem] overflow-hidden border-r hover:w-72 bg-white rounded-xl hover:bg-white transition-[2s]">
          <div className="flex h-[80vh] flex-col justify-between pt-2 pb-6">
            <div>
              <Link to="/dashboard/myprofile">
                <div className="m-2  flex items-center gap-[10px] space-x-4">
                  <img src={profile} alt="" className="ml-2" />
                  <div>
                    <span className="font-semibold">Vellya Riona</span>
                    <p className="text-sm">vellyariona@gmail.com</p>
                  </div>
                </div>
              </Link>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <div className="text-xl hover:text-[#22A6B3]">
                    <Link
                      to="/dashboard/explore"
                      className={`${
                        pathname === "/dashboard/explore"
                          ? "text-[#22A6B3]"
                          : "text-black hover:text-[#22A6B3]"
                      }  group flex items-center gap-5 space-x-4 px-4 py-3`}
                    >
                      <HiOutlineHome size={33} className="ml-[6px]" />
                      <span className="fill-current">Explore</span>
                    </Link>
                  </div>
                </li>
                <li className="min-w-max">
                  <div className="text-xl hover:text-[#22A6B3]">
                    <Link
                      to="/dashboard/myproject"
                      className={`${
                        pathname === "/dashboard/myproject"
                          ? "text-[#22A6B3]"
                          : "text-black hover:text-[#22A6B3]"
                      }  group flex items-center gap-5 space-x-4 px-4 py-3`}
                    >
                      <HiOutlineFolderMinus size={33} className="ml-[6px]" />
                      <span className="fill-current ">Proyek Saya</span>
                    </Link>
                  </div>
                </li>
                <li className="min-w-max">
                  <div className="text-xl hover:text-[#22A6B3]">
                    <Link
                      to="/dashboard/myprofile"
                      className={`${
                        pathname === "/dashboard/myprofile"
                          ? "text-[#22A6B3]"
                          : "text-black hover:text-[#22A6B3]"
                      }  group flex items-center gap-5 space-x-4 px-4 py-3`}
                    >
                      <BiUser size={33} className="ml-[6px]" />
                      <span className=" fill-current  ">Profil Saya</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-max -mb-3 align-center">
              <div className="text-xl hover:text-[#22A6B3]">
                <Link
                  to="/dashboard/notification"
                  className={`${
                    pathname === "/dashboard/notification"
                      ? "text-[#22A6B3]"
                      : "text-black hover:text-[#22A6B3]"
                  }  group flex items-center gap-5 space-x-4 px-4 py-3`}
                >
                  <IoNotificationsOutline size={33} className="ml-[6px]" />
                  <span className="fill-current ">Notifikasi</span>
                </Link>
              </div>
              <div
                className="text-xl hover:text-[#22A6B3] cursor-pointer"
                onClick={() => setModalOn(true)}
              >
                <div className="group flex items-center gap-5  space-x-4 rounded-md px-4 py-3">
                  <IoLogOutOutline size={33} className="ml-[7px]" />
                  <span className="fill-current ">Keluar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOn && <Popup setModalOn={setModalOn} onClose={handleOnClose} />}
      </div>
    </>
  );
};
export default Sidebar;
