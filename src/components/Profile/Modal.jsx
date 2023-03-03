import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../src/assets/img/popup.png";

const Modal = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="animate-zoom-out bg-[rgba(0,0,0,0.25)] fixed inset-0 z-50 flex justify-center items-center"
    >
      <div className="relative bg-white p-2 rounded-3xl w-[750px] ">
        <Link to="/dashboard/myprofile">
          <button
            onClick={onClose}
            className="absolute outline-none right-5 text-[35px]"
          >
            &times;
          </button>
        </Link>
        <div className="flex justify-around items-center">
          <img src={logo2} alt="logo silang" className="h-[247px] " />
          <p className="text-2xl text-[#22A6B3] pr-16 leading-8">
            <span className="font-bold">
              Berhasil memperbarui <br /> profil.
            </span>
            Pastikan profil anda <br /> selalu terupdate sebelum <br /> melamar
            proyek.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
